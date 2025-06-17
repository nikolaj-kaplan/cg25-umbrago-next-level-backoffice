import { UmbTextStyles as u } from "@umbraco-cms/backoffice/style";
import { LitElement as v, html as _, css as d, property as g, state as y, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as b } from "@umbraco-cms/backoffice/element-api";
import { UmbImagingRepository as C } from "@umbraco-cms/backoffice/imaging";
var k = Object.defineProperty, w = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, n = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? w(t, r) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (s = (i ? l(t, r, s) : l(s)) || s);
  return i && s && k(t, r, s), s;
}, x = (e, t, r) => t.has(e) || h("Cannot " + r), E = (e, t, r) => (x(e, t, "read from private field"), r ? r.call(e) : t.get(e)), O = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), c;
let o = class extends b(v) {
  constructor() {
    super(...arguments), O(this, c, new C(this));
  }
  willUpdate(e) {
    var t, r, i, s;
    if (super.willUpdate(e), e.has("content")) {
      const a = (r = (t = this.content) == null ? void 0 : t.image) == null ? void 0 : r[0], l = a == null ? void 0 : a.mediaKey;
      l && E(this, c).requestThumbnailUrls([l], 1e3, 1e3).then((f) => {
        var m;
        const p = (m = f.data[0]) == null ? void 0 : m.url;
        p && (this._imageUrl = p);
      });
    }
    e.has("settings") && (this.style.backgroundColor = ((i = this.settings) == null ? void 0 : i.backgroundColor) ?? "#544", this.style.color = ((s = this.settings) == null ? void 0 : s.textColor) ?? "#fff");
  }
  render() {
    return _`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <img class="image" src=${this._imageUrl ?? ""} />`;
  }
};
c = /* @__PURE__ */ new WeakMap();
o.styles = [
  u,
  d`
      :host {
        position: relative;
        display: block;
        height: 100%;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
      }
    `
];
n([
  g({ attribute: !1 })
], o.prototype, "content", 2);
n([
  g({ attribute: !1 })
], o.prototype, "settings", 2);
n([
  y()
], o.prototype, "_imageUrl", 2);
o = n([
  U("cg25-image-block-custom-view")
], o);
const q = o;
export {
  o as Cg25ImageBlockElement,
  q as default
};
//# sourceMappingURL=image-block-custom-view-CZ7vd7wK.js.map
