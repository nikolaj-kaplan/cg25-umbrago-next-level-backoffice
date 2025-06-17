var U = (s) => {
  throw TypeError(s);
};
var A = (s, i, t) => i.has(s) || U("Cannot " + t);
var e = (s, i, t) => (A(s, i, "read from private field"), t ? t.call(s) : i.get(s)), o = (s, i, t) => i.has(s) ? U("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(s) : i.set(s, t), r = (s, i, t, a) => (A(s, i, "write to private field"), a ? a.call(s, t) : i.set(s, t), t), g = (s, i, t) => (A(s, i, "access private method"), t);
import { UmbControllerBase as B, UmbContextBase as M } from "@umbraco-cms/backoffice/class-api";
import { UMB_CONTENT_WORKSPACE_CONTEXT as O } from "@umbraco-cms/backoffice/content";
import { UmbDataPathPropertyValueQuery as N, UMB_VALIDATION_CONTEXT as P } from "@umbraco-cms/backoffice/validation";
import { UmbContextToken as k } from "@umbraco-cms/backoffice/context-api";
import { UmbVariantId as S } from "@umbraco-cms/backoffice/variant";
var u, C, p, T, n, _, m, y, V, w;
class I extends B {
  constructor(t, a, c) {
    var f, v, h;
    super(t);
    o(this, V);
    //
    o(this, u);
    o(this, C);
    o(this, p);
    o(this, T);
    o(this, n);
    o(this, _);
    o(this, m, !1);
    o(this, y);
    r(this, T, a), r(this, n, c), r(this, p, "custom_word_count_" + ((f = e(this, n)) == null ? void 0 : f.toString())), r(this, _, `$.values[${N({
      alias: e(this, T),
      culture: ((v = e(this, n)) == null ? void 0 : v.culture) ?? null,
      segment: ((h = e(this, n)) == null ? void 0 : h.segment) ?? null
    })}].value`), this.consumeContext(P, (l) => {
      r(this, u, l), g(this, V, w).call(this);
    }), this.consumeContext(O, async (l) => {
      r(this, C, l), this.observe(
        await (l == null ? void 0 : l.propertyValueByAlias(
          a,
          e(this, n)
        )),
        (b) => {
          r(this, y, b), g(this, V, w).call(this);
        }
      );
    });
  }
  async validate() {
  }
  get isValid() {
    return e(this, m);
  }
  reset() {
    r(this, m, !1);
  }
  /**
   * Focus the first invalid element.
   */
  focusFirstInvalidElement() {
    alert(
      "custom validation is invalid, you should implement a feature to focus the problematic element"
    );
  }
  destroy() {
    r(this, u, void 0), r(this, C, void 0), r(this, y, void 0), super.destroy();
  }
}
u = new WeakMap(), C = new WeakMap(), p = new WeakMap(), T = new WeakMap(), n = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), y = new WeakMap(), V = new WeakSet(), w = function() {
  var a;
  const t = ((a = e(this, y)) == null ? void 0 : a.split(/\s+/).filter((c) => c.length > 0).length) ?? 0;
  t > 10 ? r(this, m, !1) : r(this, m, !0), e(this, u) && e(this, C) && (e(this, m) ? e(this, u).messages.removeMessageByKey(e(this, p)) : e(this, u).messages.addMessage(
    "custom",
    e(this, _),
    `Must be less than <b>10 words</b>, exceeded by ${t - 10} words.`,
    e(this, p)
  ));
};
const E = "tagline";
var d;
class L extends M {
  constructor(t) {
    super(t, D);
    o(this, d);
    this.consumeContext(O, async (a) => {
      this.observe(
        await (a == null ? void 0 : a.structure.propertyStructureByAlias(
          E
        )),
        (c) => {
          var f, v;
          if (!c) {
            this.removeUmbControllerByAlias("observeVariantOptions"), (f = e(this, d)) == null || f.forEach((h) => h.destroy());
            return;
          }
          c.variesByCulture ? this.observe(
            a == null ? void 0 : a.variantOptions,
            (h) => {
              var l;
              (l = e(this, d)) == null || l.forEach((b) => b.destroy()), r(this, d, h == null ? void 0 : h.map((b) => new I(
                this,
                E,
                S.Create(b)
              )));
            },
            "observeVariantOptions"
          ) : ((v = e(this, d)) == null || v.forEach((h) => h.destroy()), r(this, d, [
            new I(
              this,
              E
            )
          ]));
        },
        "observePropertyType"
      );
    });
  }
}
d = new WeakMap();
const x = L, D = new k(
  "UmbWorkspaceContext",
  "example.workspaceContext.counter"
);
export {
  L as CustomValidationWorkspaceContext,
  D as EXAMPLE_CUSTOM_VALIDATION_CONTEXT,
  x as api
};
//# sourceMappingURL=custom-validation-workspace-context-r3TG_xp2.js.map
