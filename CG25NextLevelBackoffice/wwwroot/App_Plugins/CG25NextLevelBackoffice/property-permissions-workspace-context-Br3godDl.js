var B = (s) => {
  throw TypeError(s);
};
var T = (s, r, e) => r.has(s) || B("Cannot " + e);
var t = (s, r, e) => (T(s, r, "read from private field"), e ? e.call(s) : r.get(s)), o = (s, r, e) => r.has(s) ? B("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(s) : r.set(s, e), a = (s, r, e, i) => (T(s, r, "write to private field"), i ? i.call(s, e) : r.set(s, e), e), U = (s, r, e) => (T(s, r, "access private method"), e);
import { UmbContextToken as S } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as I, UmbContextBase as O } from "@umbraco-cms/backoffice/class-api";
import { UMB_CONTENT_WORKSPACE_CONTEXT as v } from "@umbraco-cms/backoffice/content";
import { UmbVariantId as P } from "@umbraco-cms/backoffice/variant";
import { UmbId as R } from "@umbraco-cms/backoffice/id";
import { observeMultiple as V } from "@umbraco-cms/backoffice/observable-api";
var m, l, C, b, c, A, w;
class _ extends I {
  constructor(e, i, p, f) {
    super(e);
    o(this, A);
    //
    o(this, m);
    o(this, l);
    //#propertyTypeToObserve: UmbPropertyTypeModel;
    o(this, C);
    o(this, b);
    o(this, c);
    a(this, C, p), a(this, b, f), a(this, l, R.new()), this.consumeContext(v, async (u) => {
      a(this, m, u), this.observe(
        await (u == null ? void 0 : u.propertyValueByAlias(
          i.alias,
          t(this, b)
        )),
        (y) => {
          a(this, c, y), U(this, A, w).call(this);
        }
      );
    });
  }
}
m = new WeakMap(), l = new WeakMap(), C = new WeakMap(), b = new WeakMap(), c = new WeakMap(), A = new WeakSet(), w = function() {
  if (!t(this, C) || !t(this, m))
    return;
  const e = t(this, c) && t(this, c).length > 0;
  if (t(this, m))
    if (e)
      t(this, m).propertyWriteGuard.removeRule(
        t(this, l)
      );
    else {
      const i = {
        unique: t(this, l),
        permitted: !1,
        message: "The property is not writable because of my custom restriction.",
        propertyType: {
          unique: t(this, C).unique
        },
        variantId: t(this, b)
      };
      t(this, m).propertyWriteGuard.addRule(i);
    }
};
const k = "facilities", L = "hotels";
var h;
class N extends O {
  constructor(e) {
    super(e, W);
    o(this, h);
    this.consumeContext(v, async (i) => {
      if (!i) {
        this.removeUmbControllerByAlias("observePropertyTypes"), this.removeUmbControllerByAlias("observeVariantOptions");
        return;
      }
      this.observe(
        V([
          await i.structure.propertyStructureByAlias(
            k
          ),
          await i.structure.propertyStructureByAlias(
            L
          )
        ]),
        ([p, f]) => {
          var u, y;
          if (!p || !f) {
            this.removeUmbControllerByAlias("observeVariantOptions"), (u = t(this, h)) == null || u.forEach((n) => n.destroy());
            return;
          }
          p.variesByCulture ? this.observe(
            i == null ? void 0 : i.variantOptions,
            (n) => {
              var d;
              (d = t(this, h)) == null || d.forEach((E) => E.destroy()), a(this, h, n == null ? void 0 : n.map((E) => new _(
                this,
                p,
                f,
                P.Create(E)
              )));
            },
            "observeVariantOptions"
          ) : ((y = t(this, h)) == null || y.forEach((n) => n.destroy()), a(this, h, [
            new _(
              this,
              p,
              f
            )
          ]));
        },
        "observePropertyTypes"
      );
    });
  }
}
h = new WeakMap();
const K = N, W = new S(
  "UmbWorkspaceContext",
  "example.workspaceContext.propertyPermissions"
);
export {
  N as CustomPropertyPermissionWorkspaceContext,
  W as EXAMPLE_CUSTOM_VALIDATION_CONTEXT,
  K as api
};
//# sourceMappingURL=property-permissions-workspace-context-Br3godDl.js.map
