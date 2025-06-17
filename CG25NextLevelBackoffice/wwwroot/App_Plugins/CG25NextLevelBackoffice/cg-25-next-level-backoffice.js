import { UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS as o } from "@umbraco-cms/backoffice/content-type";
import { UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as e } from "@umbraco-cms/backoffice/workspace";
const i = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.ParagraphBlock",
    name: "Paragraph Block Editor Custom View",
    element: () => import("./paragraph-block-custom-view-DiJwuNnw.js"),
    forContentTypeAlias: "paragraphBlock"
  }
], a = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.ImageBlock",
    name: "Image Block Custom View",
    element: () => import("./image-block-custom-view-CZ7vd7wK.js"),
    forContentTypeAlias: "imageBlock"
  }
], n = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.QuoteBlock",
    name: "Quote Block Editor Custom View",
    element: () => import("./quote-block-custom-view-BwlI5S0p.js"),
    forContentTypeAlias: "quoteBlock"
  }
], r = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.Discount",
    name: "Discount Custom View",
    element: () => import("./discount-block-custom-view-r8dTg1XV.js"),
    forContentTypeAlias: "discountCodeBlock"
  }
], m = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.OneColumnLayoutBlock",
    name: "One Column Layout Block Editor Custom View",
    element: () => import("./one-column-layout-block-custom-view-YL3yyy6l.js"),
    forContentTypeAlias: "oneColumnLayoutBlock"
  }
], s = [
  {
    type: "blockEditorCustomView",
    alias: "Umb.blockEditorCustomView.TwoColumnLayoutBlock",
    name: "Two Column Layout Block Editor Custom View",
    element: () => import("./two-column-layout-block-custom-view-CYDgQ7R2.js"),
    forContentTypeAlias: "twoColumnLayoutBlock"
  }
], c = [
  ...i,
  ...a,
  ...n,
  ...r,
  ...m,
  ...s
], l = [
  {
    type: "workspaceContext",
    name: "Example Custom Property Permissions Workspace Context",
    alias: "example.workspaceContext.customPropertyPermissions",
    api: () => import("./property-permissions-workspace-context-Br3godDl.js"),
    conditions: [
      {
        alias: o,
        match: "facilityPromotionArticle"
      }
    ]
  }
], p = [
  {
    type: "workspaceContext",
    name: "Example Custom Validation Workspace Context",
    alias: "example.workspaceCounter.customValidation",
    api: () => import("./custom-validation-workspace-context-r3TG_xp2.js"),
    conditions: [
      {
        alias: o,
        match: "hotel"
      }
    ]
  }
], t = "Umbrago.Condition.Entity.Unique", d = {
  type: "entityAction",
  kind: "default",
  name: "UmbraGo — Article Create Options Entity Action",
  alias: "umbrago.entityAction.createArticle",
  api: () => import("./create-options.api-HIgweCtY.js"),
  weight: -100,
  forEntityTypes: ["document"],
  meta: {
    label: "Create article",
    icon: "icon-add"
  }
}, C = {
  ...d,
  alias: "umbrago.entityAction.createArticle.withOverwriteAndCondition",
  weight: 2e3,
  overwrites: "Umb.EntityAction.Document.Create",
  conditions: [
    {
      alias: t,
      match: "9d8d3a53-14c4-433b-b58e-9c18a95c79a4"
    }
  ]
}, u = {
  type: "modal",
  name: "UmbraGo — Article Create Options Entity Action Modal",
  alias: "umbrago.modal.articleCreateOptions",
  element: () => import("./create-modal.element-CA1XQdj-.js")
}, b = [
  {
    type: "condition",
    name: "Umbrago Entity Unique Condition",
    alias: t,
    api: () => import("./entity-unique.condition-B-mtnP6A.js")
  }
], y = [
  {
    type: "propertyEditorUi",
    alias: "UmbraGo.PropertyEditorUi.HotelPicker",
    name: "UmbraGo Hotel Picker Property Editor UI",
    element: () => import("./hotel-picker-property-editor-ui.element-Dl0ymjue.js"),
    meta: {
      label: "UmbraGo Hotel Picker",
      icon: "icon-page-add",
      group: "pickers",
      propertyEditorSchemaAlias: "Umbraco.MultiNodeTreePicker",
      supportsReadOnly: !0
    }
  },
  {
    type: "modal",
    alias: "UmbraGo.Modal.HotelPicker",
    name: "UmbraGo Hotel Picker Modal",
    js: () => import("./hotel-picker-modal.element-D0rBPfAv.js")
  }
], k = {
  name: "UmbraGo Address Property Editor UI",
  alias: "umbraGo.propertyEditorUI.Address",
  type: "propertyEditorUi",
  element: () => import("./address-property-editor.element-BkIlbfOs.js"),
  meta: {
    propertyEditorSchemaAlias: "Umbraco.Plain.Json",
    label: "Address",
    icon: "icon-pin-location",
    group: "common"
  }
}, E = "Umbrago.Condition.NotOnCreateWorkspaceView", A = {
  type: "condition",
  name: "Umbrago Not On Create Workspace View Condition",
  alias: E,
  api: () => import("./not-create-workspace-view.condition-BW5cy3Q_.js")
}, w = {
  name: "Example Workspace View Create Form",
  alias: "example.workspaceView.customCreateForm",
  type: "workspaceView",
  element: () => import("./workspace-view.element-ZDqtbIgP.js"),
  weight: 2e3,
  meta: {
    label: "Create",
    pathname: "create",
    icon: "icon-edit"
  },
  conditions: [
    {
      alias: o,
      match: "facilityPromotionArticle"
    },
    {
      alias: e
    }
  ]
}, U = {
  name: "UmbraGo — Welcome Dashboard",
  alias: "umbrago.dashboard.welcome",
  type: "dashboard",
  element: () => import("./dashboard.element-CpqmWxMJ.js"),
  weight: 1e4,
  meta: {
    label: "Welcome",
    pathname: "welcome"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Content"
    }
  ]
}, O = [
  ...b,
  ...l,
  ...c,
  w,
  ...y,
  ...p,
  k,
  A,
  u,
  C,
  U
  // Currently missing a few! that is only registered via steps, move them here for the final version
];
export {
  O as manifests
};
//# sourceMappingURL=cg-25-next-level-backoffice.js.map
