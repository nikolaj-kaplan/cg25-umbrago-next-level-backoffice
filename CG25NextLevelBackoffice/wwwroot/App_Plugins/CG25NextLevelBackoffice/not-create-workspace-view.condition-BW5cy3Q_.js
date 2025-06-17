var r = (e) => {
  throw TypeError(e);
};
var c = (e, t, n) => t.has(e) || r("Cannot " + n);
var o = (e, t, n) => (c(e, t, "read from private field"), n ? n.call(e) : t.get(e)), a = (e, t, n) => t.has(e) ? r("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import { UmbConditionBase as d } from "@umbraco-cms/backoffice/extension-registry";
var s;
class m extends d {
  constructor(n, i) {
    super(n, i);
    a(this, s, () => {
      const i = window.location.pathname.endsWith("/view/create");
      this.permitted = !i;
    });
    window.addEventListener("navigationsuccess", o(this, s));
  }
  destroy() {
    super.destroy(), window.removeEventListener("navigationsuccess", o(this, s));
  }
}
s = new WeakMap();
export {
  m as UmbraGoNotCreateWorkspaceViewCondition,
  m as api
};
//# sourceMappingURL=not-create-workspace-view.condition-BW5cy3Q_.js.map
