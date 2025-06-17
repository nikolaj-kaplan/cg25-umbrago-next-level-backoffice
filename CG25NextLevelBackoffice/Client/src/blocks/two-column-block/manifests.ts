export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.TwoColumnLayoutBlock",
    name: "Two Column Layout Block Editor Custom View",
    element: () => import("./two-column-layout-block-custom-view.js"),
    forContentTypeAlias: "twoColumnLayoutBlock",
  },
];
