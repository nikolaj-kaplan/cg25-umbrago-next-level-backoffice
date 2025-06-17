import { UmbModalToken } from "@umbraco-cms/backoffice/modal";

export type UmbraGoCreateOptionsModalData = {
  unique: string | null;
};

export const UMBRAGO_CREATE_OPTIONS_MODAL = new UmbModalToken<
  UmbraGoCreateOptionsModalData,
  never
>("umbrago.modal.articleCreateOptions");
