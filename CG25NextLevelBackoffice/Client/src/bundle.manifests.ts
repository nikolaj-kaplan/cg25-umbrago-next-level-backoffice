import { manifests as umbraGoBlocks } from "./blocks/manifests.js";
import { manifests as propertyPermissions } from "./property-permissions/manifests.js";
import { manifests as validations } from "./umbrago-custom-validation/manifests.js";
import {
  umbraGoArticleCreateOptionsFinalManifest,
  umbraGoArticleCreateOptionsModalManifest,
} from "./umbrago-article-create-options/manifests.js";
import { manifests as entityConditionManifests } from "./umbrago-article-create-options/entity-context-condition/manifests.js";
import { manifests as umbraGoHotelPickerManifests } from "./umbrago-hotel-picker/manifests.js";
import { addressEditorManifest } from "./umbrago-address-property-editor/manifest.js";
import { notWhenCreateWorkspaceViewConditionManifest } from "./umbrago-create-workspace-view/not-on-create-workspace-view-condition/manifest.js";
import { createArticleWorkspaceViewManifest } from "./umbrago-create-workspace-view/manifests.js";
import { umbraGoDashboardManifest } from "./umbrago-dashboard/manifests.js";

// Job of the bundle is to collate all the manifests from different parts of the extension and load other manifests
// We load this bundle from umbraco-package.json
export const manifests: Array<UmbExtensionManifest> = [
  ...entityConditionManifests,
  ...propertyPermissions,
  ...umbraGoBlocks,
  createArticleWorkspaceViewManifest,
  ...umbraGoHotelPickerManifests,
  ...validations,
  addressEditorManifest,
  notWhenCreateWorkspaceViewConditionManifest,
  umbraGoArticleCreateOptionsModalManifest,
  umbraGoArticleCreateOptionsFinalManifest,
  umbraGoDashboardManifest,
  // Currently missing a few! that is only registered via steps, move them here for the final version
];
