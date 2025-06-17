import { UMBRAGO_ENTITY_UNIQUE_CONDITION_ALIAS } from "./constants.js";

export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "condition",
    name: "Umbrago Entity Unique Condition",
    alias: UMBRAGO_ENTITY_UNIQUE_CONDITION_ALIAS,
    api: () => import("./entity-unique.condition.js"),
  },
];
