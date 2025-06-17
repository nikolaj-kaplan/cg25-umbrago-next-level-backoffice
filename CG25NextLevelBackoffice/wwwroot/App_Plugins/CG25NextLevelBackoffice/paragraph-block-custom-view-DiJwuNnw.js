import { LitElement as c, unsafeHTML as m, html as u, property as n, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as h } from "@umbraco-cms/backoffice/element-api";
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, a = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? x(t, r) : t, i = e.length - 1, p; i >= 0; i--)
    (p = e[i]) && (s = (o ? p(t, r, s) : p(s)) || s);
  return o && s && v(t, r, s), s;
};
let l = class extends h(c) {
  willUpdate(e) {
    var t, r;
    super.willUpdate(e), e.has("settings") && (this.style.backgroundColor = ((t = this.settings) == null ? void 0 : t.backgroundColor) ?? "", this.style.color = ((r = this.settings) == null ? void 0 : r.textColor) ?? "");
  }
  render() {
    var e, t;
    return u`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <div class="rich-text">
        ${m(
      ((t = (e = this.content) == null ? void 0 : e.paragraph) == null ? void 0 : t.markup) ?? "No text"
    )}
      </div>`;
  }
  /*
    static override styles = [
      UmbTextStyles,
      css`
        :host {
          position: relative;
          display: block;
          height: 100%;
          box-sizing: border-box;
          border-radius: 9px;
          padding: 12px 32px;
  
          font-family: "PlayFiar Display", sans-serif;
          font-size: 1vw;
          line-height: 1.2;
        }
      `,
    ];
    */
};
a([
  n({ attribute: !1 })
], l.prototype, "content", 2);
a([
  n({ attribute: !1 })
], l.prototype, "settings", 2);
l = a([
  f("example-block-custom-view")
], l);
const d = l;
export {
  l as ExampleBlockCustomView,
  d as default
};
//# sourceMappingURL=paragraph-block-custom-view-DiJwuNnw.js.map
