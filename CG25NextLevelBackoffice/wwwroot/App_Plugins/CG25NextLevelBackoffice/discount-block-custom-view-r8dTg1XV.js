import { UmbTextStyles as a } from "@umbraco-cms/backoffice/style";
import { LitElement as c, html as d, css as g, property as m, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as h } from "@umbraco-cms/backoffice/element-api";
var x = Object.defineProperty, u = Object.getOwnPropertyDescriptor, l = (o, e, i, n) => {
  for (var t = n > 1 ? void 0 : n ? u(e, i) : e, s = o.length - 1, p; s >= 0; s--)
    (p = o[s]) && (t = (n ? p(e, i, t) : p(t)) || t);
  return n && t && x(e, i, t), t;
};
let r = class extends h(c) {
  render() {
    var o, e, i;
    return d`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <h3>${(o = this.content) == null ? void 0 : o.headline}</h3>
      <p>${(e = this.content) == null ? void 0 : e.description}</p>
      <div class="code">${(i = this.content) == null ? void 0 : i.discountCode}</div>`;
  }
};
r.styles = [
  a,
  g`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
        border-radius: 9px;
        background-color: var(--uui-color-background);

        font-family: "PlayFiar Display", sans-serif;
        padding: 10px;
        margin-bottom: 10px;
      }

      h3 {
        margin: 0 20px;
        margin-top: 10px;
        padding: 0;
        color: inherit;
        font-size: 32px;
        font-weight: 300;
        line-height: 1;
      }

      p {
        margin: 20px;
        margin-top: 0;
        font-weight: 300;
        padding-left: 2px;
      }

      .code {
        font-size: 32px;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        border: 2px dashed black;
        padding: 10px;
        margin: 10px;
        border-radius: 3px;
      }
    `
];
l([
  m({ attribute: !1 })
], r.prototype, "content", 2);
r = l([
  f("cg25-discount-block-custom-view")
], r);
const _ = r;
export {
  r as Cg25DiscountBlockElement,
  _ as default
};
//# sourceMappingURL=discount-block-custom-view-r8dTg1XV.js.map
