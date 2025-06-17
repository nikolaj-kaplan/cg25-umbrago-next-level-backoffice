import { UmbTextStyles as c } from "@umbraco-cms/backoffice/style";
import { LitElement as m, html as g, css as u, property as a, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
var h = Object.defineProperty, x = Object.getOwnPropertyDescriptor, p = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? x(t, s) : t, n = e.length - 1, r; n >= 0; n--)
    (r = e[n]) && (o = (i ? r(t, s, o) : r(o)) || o);
  return i && o && h(t, s, o), o;
};
let l = class extends f(m) {
  willUpdate(e) {
    var t, s, i, o;
    super.willUpdate(e), console.log("this.settings", this.settings), e.has("settings") && (this.style.backgroundColor = ((s = (t = this.settings) == null ? void 0 : t.backgroundColor) == null ? void 0 : s.value) ?? "", this.style.color = ((o = (i = this.settings) == null ? void 0 : i.textColor) == null ? void 0 : o.value) ?? "");
  }
  render() {
    var e, t;
    return g`<blockquote>
        ${(e = this.content) == null ? void 0 : e.quote}
      </blockquote>
      <p>${(t = this.content) == null ? void 0 : t.author}</p>`;
  }
};
l.styles = [
  c,
  u`
      :host {
        position: relative;
        display: block;
        height: 100%;
        box-sizing: border-box;
        border-radius: 9px;
        padding: 12px 32px;
      }

      blockquote {
        margin: 20px;
        margin-bottom: 0;
        padding: 0;
        font-style: italic;
        color: inherit;
        font-family: "PlayFiar Display", sans-serif;
        font-size: 30px;
        font-weight: 500;
        line-height: 1;
      }

      blockquote::before {
        content: open-quote;
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        font-size: 40px;
        font-weight: 300;
        margin-left: -22px;
        margin-top: -30px;
        margin-bottom: -5px;
      }

      blockquote::after {
        content: close-quote;
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        font-size: 40px;
        font-weight: 300;
        margin-right: -10px;
        margin-top: -30px;
        margin-bottom: -10px;
      }

      p {
        margin-left: 20px;
      }
    `
];
p([
  a({ attribute: !1 })
], l.prototype, "content", 2);
p([
  a({ attribute: !1 })
], l.prototype, "settings", 2);
l = p([
  b("cg25-quote-block-custom-view")
], l);
const w = l;
export {
  l as CG25QuoteBlockCustomView,
  w as default
};
//# sourceMappingURL=quote-block-custom-view-BwlI5S0p.js.map
