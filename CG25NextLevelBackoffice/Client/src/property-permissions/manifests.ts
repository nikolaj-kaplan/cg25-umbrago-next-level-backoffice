import { UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS } from "@umbraco-cms/backoffice/content-type";

export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "workspaceContext",
    name: "Example Custom Property Permissions Workspace Context",
    alias: "example.workspaceContext.customPropertyPermissions",
    api: () => import("./property-permissions-workspace-context.js"),
    conditions: [
      {
        alias: UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS,
        match: "facilityPromotionArticle",
      },
    ],
  },
];
