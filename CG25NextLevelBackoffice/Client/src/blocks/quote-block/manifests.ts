export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.QuoteBlock",
    name: "Quote Block Editor Custom View",
    element: () => import("./quote-block-custom-view.js"),
    forContentTypeAlias: "quoteBlock",
  },
];
