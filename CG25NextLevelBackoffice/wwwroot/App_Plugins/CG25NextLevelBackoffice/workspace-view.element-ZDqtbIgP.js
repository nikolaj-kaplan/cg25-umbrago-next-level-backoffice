import { LitElement as b, when as n, html as c, css as m, state as r, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as y } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as d } from "@umbraco-cms/backoffice/property";
import { UUITextStyles as _ } from "@umbraco-cms/backoffice/external/uui";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, o = (s, t, p, a) => {
  for (var e = a > 1 ? void 0 : a ? v(t, p) : t, u = s.length - 1, l; u >= 0; u--)
    (l = s[u]) && (e = (a ? l(t, p, e) : l(e)) || e);
  return a && e && f(t, p, e), e;
};
let i = class extends y(
  b
) {
  constructor() {
    super(), this._step = 1, this._enableStep2 = !1, this.consumeContext(d, async (s) => {
      this.observe(
        await (s == null ? void 0 : s.propertyValueByAlias("facilities")),
        (t) => {
          t && t.length > 0 && (this._enableStep2 = !0);
        }
      );
    });
  }
  render() {
    return c`
      <umb-body-layout>
        <uui-box>
          ${n(
      this._step === 1,
      () => c`
              <h1 class="uui-h3">Pick facilities to promote:</h1>

              <umb-content-workspace-property alias="facilities">
              </umb-content-workspace-property>
            `
    )}
          ${n(
      this._step === 2,
      () => c`
              <h1 class="uui-h3">Pick hotels to highlight:</h1>
              <umb-content-workspace-property alias="hotels">
              </umb-content-workspace-property>
            `
    )}
        </uui-box>
        <div class="actions">
          <uui-button
            look="primary"
            label="Back"
            ?disabled=${this._step === 1}
            @click=${() => {
      this._step === 2 && (this._step = 1);
    }}
          ></uui-button>
          <span class="uui-text uui-text--muted">
            Step ${this._step} of 2
          </span>
          <uui-button
            look="primary"
            color="positive"
            label="Next"
            ?disabled=${!this._enableStep2}
            @click=${() => {
      this._step === 1 && (this._step = 2);
    }}
            .href=${this._step === 2 ? "/umbraco/section/content/workspace/document/create/parent/document/9d8d3a53-14c4-433b-b58e-9c18a95c79a4/04568c0a-b35c-4bdb-9d4c-6fdde6b3ccd4/en-US/view/content" : void 0}
          ></uui-button>
        </div>
      </umb-body-layout>
    `;
  }
};
i.styles = [
  _,
  m`
      umb-body-layout {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }

      uui-box {
        --uui-box-default-padding: var(--uui-size-layout-4)
          var(--uui-size-layout-2);
      }
      .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }
    `
];
o([
  r()
], i.prototype, "_variantId", 2);
o([
  r()
], i.prototype, "_propertyType", 2);
o([
  r()
], i.prototype, "_step", 2);
o([
  r()
], i.prototype, "_enableStep2", 2);
i = o([
  h("umbrago-create-article-workspace-view")
], i);
export {
  i as UmbraGoCreateArticleWorkspaceViewElement,
  i as element
};
//# sourceMappingURL=workspace-view.element-ZDqtbIgP.js.map
