export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.OneColumnLayoutBlock",
    name: "One Column Layout Block Editor Custom View",
    element: () => import("./one-column-layout-block-custom-view.js"),
    forContentTypeAlias: "oneColumnLayoutBlock",
  },
];
