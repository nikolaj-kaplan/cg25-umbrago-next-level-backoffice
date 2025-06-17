import type { UMBRAGO_ENTITY_UNIQUE_CONDITION_ALIAS } from "./constants.js";
import type { UmbConditionConfigBase } from "@umbraco-cms/backoffice/extension-api";

export type UmbraGoEntityUniqueConditionConfig = UmbConditionConfigBase<
  typeof UMBRAGO_ENTITY_UNIQUE_CONDITION_ALIAS
> & {
  match: string;
};

declare global {
  interface UmbExtensionConditionConfigMap {
    UmbraGoEntityUniqueConditionConfig: UmbraGoEntityUniqueConditionConfig;
  }
}
