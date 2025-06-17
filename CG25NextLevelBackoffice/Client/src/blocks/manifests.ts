import { manifests as paragraph } from "./paragraph-block/manifests.js";
import { manifests as image } from "./image-block/manifests.js";
import { manifests as quote } from "./quote-block/manifests.js";
import { manifests as discount } from "./discount-block/manifests.js";
import { manifests as oneColumn } from "./one-column-block/manifests.js";
import { manifests as twoColumn } from "./two-column-block/manifests.js";

// Job of the bundle is to collate all the manifests from different parts of the extension and load other manifests
// We load this bundle from umbraco-package.json
export const manifests: Array<UmbExtensionManifest> = [
  ...paragraph,
  ...image,
  ...quote,
  ...discount,
  ...oneColumn,
  ...twoColumn,
];
