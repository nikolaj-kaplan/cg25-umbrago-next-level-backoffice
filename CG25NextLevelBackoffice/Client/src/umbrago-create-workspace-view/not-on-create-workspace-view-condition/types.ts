import type { UmbConditionConfigBase } from "@umbraco-cms/backoffice/extension-api";
import type { UMBRAGO_NOT_CREATE_WORKSPACE_VIEW_CONDITION_ALIAS } from "./constants.js";

export type UmbraGoNotCreateWorkspaceViewConditionConfig =
  UmbConditionConfigBase<
    typeof UMBRAGO_NOT_CREATE_WORKSPACE_VIEW_CONDITION_ALIAS
  >;

declare global {
  interface UmbExtensionConditionConfigMap {
    UmbraGoNotCreateWorkspaceViewConditionConfig: UmbraGoNotCreateWorkspaceViewConditionConfig;
  }
}
