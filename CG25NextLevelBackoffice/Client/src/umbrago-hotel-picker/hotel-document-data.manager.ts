import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import {
  UMB_DOCUMENT_SEARCH_PROVIDER_ALIAS,
  UmbDocumentDetailModel,
  UmbDocumentDetailRepository,
  UmbDocumentItemModel,
  UmbDocumentItemRepository,
  UmbDocumentTreeItemModel,
  UmbDocumentTreeRepository,
} from "@umbraco-cms/backoffice/document";
import { createExtensionApiByAlias } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState } from "@umbraco-cms/backoffice/observable-api";
import { UmbSearchProvider } from "@umbraco-cms/backoffice/search";

/* Note: POC code. Data requests for the picker is handled by this manager. It currently makes more requests than ideal. 
A better solution would be a custom endpoint or a more flexible "filter"-style endpoint in the Management API for document. */
export class UmbraGoHotelDocumentDataManager extends UmbControllerBase {
  #hotelsContainers: Array<UmbDocumentItemModel> = [];
  #countryHotelsMap = new Map();
  #treeRepository = new UmbDocumentTreeRepository(this);
  #detailRepository = new UmbDocumentDetailRepository(this);
  #itemRepository = new UmbDocumentItemRepository(this);

  #countriesForHotels = new UmbArrayState<UmbDocumentItemModel>(
    [],
    (x) => x.unique
  );
  public readonly countriesForHotels = this.#countriesForHotels.asObservable();

  #hotelTreeItems = new UmbArrayState<UmbDocumentTreeItemModel>(
    [],
    (x) => x.unique
  );
  public readonly hotelTreeItems = this.#hotelTreeItems.asObservable();

  #hotelDetails = new UmbArrayState<UmbDocumentDetailModel>(
    [],
    (x) => x.unique
  );
  public readonly hotelDetailItems = this.#hotelDetails.asObservable();

  constructor(host: UmbControllerHost) {
    super(host);
    this.#loadHotels();
  }

  async #loadHotels() {
    await this.#loadCountriesForHotels();
    await this.#loadHotelTreeItems();
    await this.#loadHotelDetails();
  }

  async #loadCountriesForHotels() {
    await this.#loadHotelContainers();

    this.#hotelsContainers.forEach((containers) => {
      // get the country unique from the parent
      const countryUnique = containers.parent?.unique;
      // store the container/country relationship as we need it for filtering when rendering
      this.#countryHotelsMap.set(countryUnique, containers.unique);
    });

    const countryUniques = this.#hotelsContainers
      .map((item) => item.parent!.unique)
      .filter(Boolean) as Array<string>;

    const { data: itemData } = await this.#itemRepository.requestItems(
      countryUniques
    );

    this.#countriesForHotels.setValue(itemData ?? []);
  }

  async #loadHotelContainers() {
    const searchProvider = await createExtensionApiByAlias<
      UmbSearchProvider<any, any>
    >(this, UMB_DOCUMENT_SEARCH_PROVIDER_ALIAS);

    if (!searchProvider) {
      throw new Error("Document search repository is not initialized.");
    }

    const HOTEL_CONTAINER_DOCUMENT_TYPE_UNIQUE =
      "f0bcd3c0-78f6-42f4-bd9b-f0bcd3c034bf";

    const { data } = await searchProvider.search({
      allowedContentTypes: [{ unique: HOTEL_CONTAINER_DOCUMENT_TYPE_UNIQUE }],
      query: "Hotels",
    });

    this.#hotelsContainers = data?.items ?? [];
  }

  async #loadHotelTreeItems() {
    const promises = this.#hotelsContainers.map((item) =>
      this.#treeRepository.requestTreeItemsOf({
        parent: {
          entityType: item.entityType,
          unique: item.unique,
        },
      })
    );

    const treeItemResults = await Promise.all(promises);

    const hotelTreeItems = treeItemResults
      .flatMap((result) => result.data ?? [])
      .flatMap((data) => data.items ?? []);

    this.#hotelTreeItems.setValue(hotelTreeItems);
  }

  async #loadHotelDetails() {
    const detailPromises = this.#hotelTreeItems
      .getValue()
      .map((treeItem) =>
        this.#detailRepository?.requestByUnique(treeItem.unique)
      );
    const detailResults = await Promise.all(detailPromises);
    const hotelDetails = detailResults
      .map((result) => result.data)
      .filter(Boolean) as Array<UmbDocumentDetailModel>;

    this.#hotelDetails.setValue(hotelDetails);
  }

  public getHotelContainerForCountry(countryUnique: string) {
    return this.#countryHotelsMap.get(countryUnique);
  }
}
