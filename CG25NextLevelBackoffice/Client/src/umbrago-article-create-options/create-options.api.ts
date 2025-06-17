import {
  MetaEntityActionDefaultKind,
  UmbEntityActionBase,
} from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal } from "@umbraco-cms/backoffice/modal";
import { UMBRAGO_CREATE_OPTIONS_MODAL } from "./constants";

export class CustomValidationWorkspaceContext extends UmbEntityActionBase<MetaEntityActionDefaultKind> {
  override async execute() {
    await umbOpenModal(this, UMBRAGO_CREATE_OPTIONS_MODAL, {
      data: {
        unique: this.args.unique,
      },
    });
  }
}

// Declare a api export, so Extension Registry can initialize this class:
export const api = CustomValidationWorkspaceContext;
