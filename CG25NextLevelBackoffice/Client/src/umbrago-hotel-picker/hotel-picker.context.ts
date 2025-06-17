import {
  UmbArrayState,
  UmbBooleanState,
} from "@umbraco-cms/backoffice/observable-api";
import {
  UmbCollectionItemPickerContext,
  UmbCollectionRepository,
} from "@umbraco-cms/backoffice/collection";
import {
  UMB_DOCUMENT_COLLECTION_REPOSITORY_ALIAS,
  UmbDocumentCollectionItemModel,
} from "@umbraco-cms/backoffice/document";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { createExtensionApiByAlias } from "@umbraco-cms/backoffice/extension-registry";

export class UOPHotelPickerContext extends UmbCollectionItemPickerContext {
  public getUnique = (item: UmbDocumentCollectionItemModel) => item.unique;

  #items = new UmbArrayState<UmbDocumentCollectionItemModel>(
    [],
    (x) => x.unique
  );
  public items = this.#items.asObservable();

  #hasMoreItem = new UmbBooleanState(false);
  public hasMoreItem = this.#hasMoreItem.asObservable();

  #take = 1000;
  #repository?: UmbCollectionRepository;

  constructor(host: UmbControllerHost) {
    super(host);
    this.#initRepository();
  }

  async #initRepository() {
    this.#repository = await createExtensionApiByAlias(
      this,
      UMB_DOCUMENT_COLLECTION_REPOSITORY_ALIAS
    );
  }

  //Need to make this one generic
  async loadData(loadMore = false) {
    if (!this.#repository) {
      throw new Error("Repository is not initialized.");
    }

    const { data, error } = await this.#repository.requestCollection({
      take: this.#take,
    });

    if (error) {
      this.#hasMoreItem.setValue(false);
      this.#items.setValue([]);
    }

    if (data) {
      if (loadMore) {
        this.#items.append(data.items);
      } else {
        this.#items.setValue(data.items);
      }
    }
  }

  public loadMore() {
    this.loadData(true);
  }
}
