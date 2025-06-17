export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.ImageBlock",
    name: "Image Block Custom View",
    element: () => import("./image-block-custom-view.js"),
    forContentTypeAlias: "imageBlock",
  },
];
