import { LitElement as u, html as f, property as c, state as p, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as g } from "@umbraco-cms/backoffice/element-api";
var m = Object.defineProperty, d = Object.getOwnPropertyDescriptor, s = (r, t, n, l) => {
  for (var e = l > 1 ? void 0 : l ? d(t, n) : t, a = r.length - 1, i; a >= 0; a--)
    (i = r[a]) && (e = (l ? i(t, n, e) : i(e)) || e);
  return l && e && m(t, n, e), e;
};
let o = class extends g(u) {
  willUpdate(r) {
    var t;
    super.willUpdate(r), r.has("settings") && (this._backgroundColor = ((t = this.settings) == null ? void 0 : t.backgroundColor) ?? "");
  }
  render() {
    return f`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <section
        style="background-color': ${this._backgroundColor}"
        ng-attr-nobackgroundcolor="{{block.settingsData.backgroundColor.value === '' || undefined}}"
        ng-attr-bright-contrast="{{block.settingsData.contrast.value === 'ffffff' || undefined}}"
      >
        <umb-block-grid-areas-container
          draggable="false"
        ></umb-block-grid-areas-container>
      </section>`;
  }
};
s([
  c({ attribute: !1 })
], o.prototype, "content", 2);
s([
  c({ attribute: !1 })
], o.prototype, "settings", 2);
s([
  p()
], o.prototype, "_backgroundColor", 2);
o = s([
  b("one-column-layout-block-custom-view")
], o);
const _ = o;
export {
  o as ExampleBlockCustomView,
  _ as default
};
//# sourceMappingURL=one-column-layout-block-custom-view-YL3yyy6l.js.map
