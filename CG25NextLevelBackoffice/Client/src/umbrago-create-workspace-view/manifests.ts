import { UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS } from "@umbraco-cms/backoffice/content-type";
import { UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS } from "@umbraco-cms/backoffice/workspace";

export const createArticleWorkspaceViewManifest: UmbExtensionManifest = {
  name: "Example Workspace View Create Form",
  alias: "example.workspaceView.customCreateForm",
  type: "workspaceView",
  element: () => import("./workspace-view.element.js"),
  weight: 2000,
  meta: {
    label: "Create",
    pathname: "create",
    icon: "icon-edit",
  },
  conditions: [
    {
      alias: UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS,
      match: "facilityPromotionArticle",
    },
    {
      alias: UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS,
    },
  ],
};
