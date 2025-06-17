import { UmbEntityActionBase as t } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as a, umbOpenModal as o } from "@umbraco-cms/backoffice/modal";
const e = new a("umbrago.modal.articleCreateOptions");
class i extends t {
  async execute() {
    await o(this, e, {
      data: {
        unique: this.args.unique
      }
    });
  }
}
const r = i;
export {
  i as CustomValidationWorkspaceContext,
  r as api
};
//# sourceMappingURL=create-options.api-HIgweCtY.js.map
