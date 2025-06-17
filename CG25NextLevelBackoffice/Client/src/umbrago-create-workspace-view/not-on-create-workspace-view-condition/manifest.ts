import { UMBRAGO_NOT_CREATE_WORKSPACE_VIEW_CONDITION_ALIAS } from "./constants.js";

export const notWhenCreateWorkspaceViewConditionManifest: UmbExtensionManifest =
  {
    type: "condition",
    name: "Umbrago Not On Create Workspace View Condition",
    alias: UMBRAGO_NOT_CREATE_WORKSPACE_VIEW_CONDITION_ALIAS,
    api: () => import("./not-create-workspace-view.condition.js"),
  };
