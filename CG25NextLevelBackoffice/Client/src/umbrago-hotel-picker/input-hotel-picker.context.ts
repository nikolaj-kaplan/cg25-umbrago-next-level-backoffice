import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import {
  UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS,
  UmbDocumentDetailModel,
  UmbDocumentDetailRepository,
  UmbDocumentItemModel,
} from "@umbraco-cms/backoffice/document";
import { UmbPickerInputContext } from "@umbraco-cms/backoffice/picker-input";
import {
  UMBRAGO_HOTEL_PICKER_MODAL,
  UmbraGoHotelPickerModalData,
} from "./hotel-picker-modal.token";
import { UmbArrayState } from "@umbraco-cms/backoffice/observable-api";

// @ts-ignore
export class UmbraGoHotelPickerContext extends UmbPickerInputContext<
  UmbDocumentItemModel,
  UmbDocumentItemModel,
  UmbraGoHotelPickerModalData
> {
  #itemsWithDetails = new UmbArrayState<UmbDocumentDetailModel>(
    [],
    (x) => x.unique
  );
  public readonly itemsWithDetails = this.#itemsWithDetails.asObservable();

  #detailRepository = new UmbDocumentDetailRepository(this);

  constructor(host: UmbControllerHost) {
    super(host, UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS, UMBRAGO_HOTEL_PICKER_MODAL);

    this.observe(this.selection, (selection) => {
      this.#loadDetails(selection);
    });
  }

  async #loadDetails(selection: Array<string>) {
    if (selection.length === 0) {
      this.#itemsWithDetails.setValue([]);
      return;
    }

    const promises = selection.map((unique) =>
      this.#detailRepository?.requestByUnique(unique)
    );

    const results = await Promise.all(promises);
    const details = results
      .map((result) => result.data)
      .filter(Boolean) as UmbDocumentDetailModel[];
    this.#itemsWithDetails.setValue(details);
  }
}
