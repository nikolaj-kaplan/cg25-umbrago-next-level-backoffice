export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "propertyEditorUi",
    alias: "UmbraGo.PropertyEditorUi.HotelPicker",
    name: "UmbraGo Hotel Picker Property Editor UI",
    element: () => import("./hotel-picker-property-editor-ui.element.js"),
    meta: {
      label: "UmbraGo Hotel Picker",
      icon: "icon-page-add",
      group: "pickers",
      propertyEditorSchemaAlias: "Umbraco.MultiNodeTreePicker",
      supportsReadOnly: true,
    },
  },
  {
    type: "modal",
    alias: "UmbraGo.Modal.HotelPicker",
    name: "UmbraGo Hotel Picker Modal",
    js: () => import("./hotel-picker-modal.element"),
  },
];
