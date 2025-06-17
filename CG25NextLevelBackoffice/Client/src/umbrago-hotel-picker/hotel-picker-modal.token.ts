import { UmbDocumentItemModel } from "@umbraco-cms/backoffice/document";
import {
  UmbModalToken,
  UmbPickerModalData,
} from "@umbraco-cms/backoffice/modal";

export interface UmbraGoHotelPickerModalData
  extends UmbPickerModalData<UmbDocumentItemModel> {
  facilityDocuments: Array<string>;
}

export interface UmbraGoHotelPickerModalValue {
  selection: Array<string | null>;
}

export const UMBRAGO_HOTEL_PICKER_MODAL = new UmbModalToken<
  UmbraGoHotelPickerModalData,
  UmbraGoHotelPickerModalValue
>("UmbraGo.Modal.HotelPicker", {
  modal: {
    type: "sidebar",
    size: "small",
  },
});
