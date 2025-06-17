import { UMB_ENTITY_CONTEXT as t } from "@umbraco-cms/backoffice/entity";
import { UmbConditionBase as e } from "@umbraco-cms/backoffice/extension-registry";
class a extends e {
  constructor(r, s) {
    super(r, s), this.consumeContext(t, (i) => {
      this.observe(
        i == null ? void 0 : i.unique,
        (o) => {
          this.permitted = o === this.config.match;
        },
        "umbraGoEntityUniqueObserver"
      );
    });
  }
}
export {
  a as UmbraGoEntityUniqueCondition,
  a as api
};
//# sourceMappingURL=entity-unique.condition-B-mtnP6A.js.map
