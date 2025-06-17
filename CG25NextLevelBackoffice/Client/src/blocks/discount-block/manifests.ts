export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.Discount",
    name: "Discount Custom View",
    element: () => import("./discount-block-custom-view.js"),
    forContentTypeAlias: "discountCodeBlock",
  },
];
