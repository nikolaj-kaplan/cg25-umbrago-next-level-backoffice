import { ManifestEntityActionDefaultKind } from "@umbraco-cms/backoffice/entity-action";
import { UMBRAGO_ENTITY_UNIQUE_CONDITION_ALIAS } from "./entity-context-condition/constants.js";

export const umbraGoArticleCreateOptionsManifest: ManifestEntityActionDefaultKind =
  {
    type: "entityAction",
    kind: "default",
    name: "UmbraGo — Article Create Options Entity Action",
    alias: "umbrago.entityAction.createArticle",
    api: () => import("./create-options.api.js"),
    weight: -100,
    forEntityTypes: ["document"],
    meta: {
      label: "Create article",
      icon: "icon-add",
    },
  };
export const umbraGoArticleCreateOptionsFinalManifest: ManifestEntityActionDefaultKind =
  {
    ...umbraGoArticleCreateOptionsManifest,
    alias: "umbrago.entityAction.createArticle.withOverwriteAndCondition",
    weight: 2000,
    overwrites: "Umb.EntityAction.Document.Create",
    conditions: [
      {
        alias: UMBRAGO_ENTITY_UNIQUE_CONDITION_ALIAS,
        match: "9d8d3a53-14c4-433b-b58e-9c18a95c79a4",
      },
    ],
  } as ManifestEntityActionDefaultKind;

export const umbraGoArticleCreateOptionsModalManifest: UmbExtensionManifest = {
  type: "modal",
  name: "UmbraGo — Article Create Options Entity Action Modal",
  alias: "umbrago.modal.articleCreateOptions",
  element: () => import("./create-modal.element.js"),
};
