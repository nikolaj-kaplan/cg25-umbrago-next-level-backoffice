export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.ParagraphBlock",
    name: "Paragraph Block Editor Custom View",
    element: () => import("./paragraph-block-custom-view.js"),
    forContentTypeAlias: "paragraphBlock",
  },
];
