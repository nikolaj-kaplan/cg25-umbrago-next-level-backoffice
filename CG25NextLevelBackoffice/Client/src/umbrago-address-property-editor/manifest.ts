import { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/property-editor";

export const addressEditorManifest: ManifestPropertyEditorUi = {
  name: "UmbraGo Address Property Editor UI",
  alias: "umbraGo.propertyEditorUI.Address",
  type: "propertyEditorUi",
  element: () => import("./address-property-editor.element.js"),
  meta: {
    propertyEditorSchemaAlias: "Umbraco.Plain.Json",
    label: "Address",
    icon: "icon-pin-location",
    group: "common",
  },
};
