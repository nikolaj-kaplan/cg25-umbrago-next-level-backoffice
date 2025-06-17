export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.HotelDiscount",
    name: "HotelDiscount Custom View",
    element: () => import("./hotel-discount-block-custom-view.js"),
    forContentTypeAlias: "hotelDiscountCodeBlock",
  },
];
