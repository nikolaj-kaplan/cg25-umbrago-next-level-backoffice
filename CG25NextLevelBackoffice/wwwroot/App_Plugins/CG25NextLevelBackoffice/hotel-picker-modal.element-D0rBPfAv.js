var R = (e) => {
  throw TypeError(e);
};
var P = (e, t, i) => t.has(e) || R("Cannot " + i);
var n = (e, t, i) => (P(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), p = (e, t, i, s) => (P(e, t, "write to private field"), s ? s.call(e, i) : t.set(e, i), i), b = (e, t, i) => (P(e, t, "access private method"), i);
import { UmbDocumentTreeRepository as te, UmbDocumentDetailRepository as ie, UmbDocumentItemRepository as S, UMB_DOCUMENT_SEARCH_PROVIDER_ALIAS as se } from "@umbraco-cms/backoffice/document";
import { repeat as x, html as H, nothing as oe, css as ae, state as M, property as ne, customElement as re } from "@umbraco-cms/backoffice/external/lit";
import { UUITextStyles as le } from "@umbraco-cms/backoffice/external/uui";
import { UmbModalBaseElement as ue } from "@umbraco-cms/backoffice/modal";
import { UmbPickerContext as ce } from "@umbraco-cms/backoffice/picker";
import { UmbControllerBase as he } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApiByAlias as me } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as k } from "@umbraco-cms/backoffice/observable-api";
var _, C, D, T, U, I, y, q, u, F, A, B, G, V;
class pe extends he {
  constructor(i) {
    super(i);
    m(this, u);
    m(this, _);
    m(this, C);
    m(this, D);
    m(this, T);
    m(this, U);
    m(this, I);
    m(this, y);
    m(this, q);
    p(this, _, []), p(this, C, /* @__PURE__ */ new Map()), p(this, D, new te(this)), p(this, T, new ie(this)), p(this, U, new S(this)), p(this, I, new k(
      [],
      (s) => s.unique
    )), this.countriesForHotels = n(this, I).asObservable(), p(this, y, new k(
      [],
      (s) => s.unique
    )), this.hotelTreeItems = n(this, y).asObservable(), p(this, q, new k(
      [],
      (s) => s.unique
    )), this.hotelDetailItems = n(this, q).asObservable(), b(this, u, F).call(this);
  }
  getHotelContainerForCountry(i) {
    return n(this, C).get(i);
  }
}
_ = new WeakMap(), C = new WeakMap(), D = new WeakMap(), T = new WeakMap(), U = new WeakMap(), I = new WeakMap(), y = new WeakMap(), q = new WeakMap(), u = new WeakSet(), F = async function() {
  await b(this, u, A).call(this), await b(this, u, G).call(this), await b(this, u, V).call(this);
}, A = async function() {
  await b(this, u, B).call(this), n(this, _).forEach((o) => {
    var c;
    const a = (c = o.parent) == null ? void 0 : c.unique;
    n(this, C).set(a, o.unique);
  });
  const i = n(this, _).map((o) => o.parent.unique).filter(Boolean), { data: s } = await n(this, U).requestItems(
    i
  );
  n(this, I).setValue(s ?? []);
}, B = async function() {
  const i = await me(this, se);
  if (!i)
    throw new Error("Document search repository is not initialized.");
  const s = "f0bcd3c0-78f6-42f4-bd9b-f0bcd3c034bf", { data: o } = await i.search({
    allowedContentTypes: [{ unique: s }],
    query: "Hotels"
  });
  p(this, _, (o == null ? void 0 : o.items) ?? []);
}, G = async function() {
  const i = n(this, _).map(
    (a) => n(this, D).requestTreeItemsOf({
      parent: {
        entityType: a.entityType,
        unique: a.unique
      }
    })
  ), o = (await Promise.all(i)).flatMap((a) => a.data ?? []).flatMap((a) => a.items ?? []);
  n(this, y).setValue(o);
}, V = async function() {
  const i = n(this, y).getValue().map(
    (a) => {
      var c;
      return (c = n(this, T)) == null ? void 0 : c.requestByUnique(a.unique);
    }
  ), o = (await Promise.all(i)).map((a) => a.data).filter(Boolean);
  n(this, q).setValue(o);
};
var de = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, W = (e) => {
  throw TypeError(e);
}, v = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? fe(t, i) : t, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (o = (s ? c(t, i, o) : c(o)) || o);
  return s && o && de(t, i, o), o;
}, E = (e, t, i) => t.has(e) || W("Cannot " + i), r = (e, t, i) => (E(e, t, "read from private field"), i ? i.call(e) : t.get(e)), g = (e, t, i) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), _e = (e, t, i, s) => (E(e, t, "write to private field"), t.set(e, i), i), h = (e, t, i) => (E(e, t, "access private method"), i), O, $, d, w, l, N, z, L, Q, Y, J, K, X, Z, j, ee;
let f = class extends ue {
  constructor() {
    super(), g(this, l), this._facilities = [], this._selectionConfiguration = {
      multiple: !0,
      selectable: !0,
      selection: []
    }, g(this, O), g(this, $, new S(this)), g(this, d, new ce(this)), g(this, w, new pe(this)), this._countries = [], this._hotelTreeItems = [], this._hotelDetailItems = [], r(this, d).selection.setSelectable(!0), r(this, d).selection.setMultiple(!0), h(this, l, N).call(this), this.observe(
      r(this, w).countriesForHotels,
      (e) => {
        this._countries = e;
      },
      "umbraGoHotelPickerCountriesObserver"
    ), this.observe(
      r(this, w).hotelTreeItems,
      (e) => {
        this._hotelTreeItems = e;
      },
      "umbraGoHotelPickerHotelTreeItemsObserver"
    ), this.observe(
      r(this, w).hotelDetailItems,
      (e) => {
        this._hotelDetailItems = e;
      },
      "umbraGoHotelPickerHotelDetailItemsObserver"
    );
  }
  get data() {
    return r(this, O);
  }
  set data(e) {
    _e(this, O, e), h(this, l, z).call(this);
  }
  async updated(e) {
    var t, i;
    if (super.updated(e), e.has("data")) {
      const s = ((t = this.data) == null ? void 0 : t.multiple) ?? !1;
      r(this, d).selection.setMultiple(s), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        multiple: s
      };
    }
    if (e.has("value")) {
      const s = ((i = this.value) == null ? void 0 : i.selection) ?? [];
      r(this, d).selection.setSelection(s), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        selection: [...s]
      };
    }
  }
  render() {
    return H`<umb-body-layout headline="Choose Hotels">
      <uui-box>
        <div id="facilities">
          <h4>Facilities:</h4>
          ${this._facilities.map(
      (e) => H`<uui-tag look="secondary">${e.name}</uui-tag>`
    )}
        </div>
        <div id="divider"></div>
        ${x(
      this._countries,
      (e) => e.unique,
      (e) => h(this, l, X).call(this, e)
    )}
      </uui-box>
      ${h(this, l, ee).call(this)}
    </umb-body-layout>`;
  }
};
O = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
N = function() {
  this.observe(
    r(this, d).selection.selection,
    (e) => {
      this.updateValue({ selection: e }), this.requestUpdate();
    },
    "umbragoPickerSelectionObserver"
  );
};
z = async function() {
  var t;
  if (!((t = this.data) != null && t.facilityDocuments) || this.data.facilityDocuments.length === 0)
    return;
  const { data: e } = await r(this, $).requestItems(
    this.data.facilityDocuments
  );
  e && (this._facilities = e);
};
L = function(e, t) {
  e.stopPropagation(), r(this, d).selection.select(t.unique);
};
Q = function(e, t) {
  e.stopPropagation(), r(this, d).selection.deselect(t.unique);
};
Y = function(e) {
  const t = h(this, l, J).call(this, this._hotelTreeItems, e);
  return h(this, l, K).call(this, t);
};
J = function(e, t) {
  const i = r(this, w).getHotelContainerForCountry(t);
  return i ? e.filter(
    (s) => s.parent.unique === i
  ) : [];
};
K = function(e) {
  return this._facilities.length === 0 ? this._hotelTreeItems : e.filter((t) => {
    const i = this._hotelDetailItems.find(
      (s) => s.unique === t.unique
    );
    return i ? this._facilities.every(
      (s) => i.values.some((o) => {
        if (o.alias === "facilities")
          return o.value.some((c) => c.unique === s.unique);
      })
    ) : !1;
  });
};
X = function(e) {
  const t = h(this, l, Y).call(this, e.unique), i = t.length > 0;
  return i ? H`
      <uui-menu-item
        label=${e.name}
        ?has-children=${i}
        show-children
      >
        <uui-icon
          name=${e.documentType.icon}
          slot="icon"
        ></uui-icon>
        ${h(this, l, Z).call(this, t)}
      </uui-menu-item>
    ` : oe;
};
Z = function(e) {
  return H`
      ${x(
    e,
    (t) => t.unique,
    (t) => h(this, l, j).call(this, t)
  )}
    `;
};
j = function(e) {
  return H`
      <uui-menu-item
        label=${e.name}
        selectable
        ?selected=${r(this, d).selection.isSelected(e.unique)}
        @selected=${(t) => h(this, l, L).call(this, t, e)}
        @deselected=${(t) => h(this, l, Q).call(this, t, e)}
      >
        <uui-icon name=${e.documentType.icon} slot="icon"></uui-icon>
        ${e.name}
      </uui-menu-item>
    `;
};
ee = function() {
  return H`
      <div slot="actions">
        <uui-button label="Close" @click=${this._rejectModal}></uui-button>
        <uui-button
          label="Submit"
          look="primary"
          color="positive"
          @click=${this._submitModal}
        ></uui-button>
      </div>
    `;
};
f.styles = [
  le,
  ae`
      #facilities {
        display: inline-flex;
        gap: var(--uui-size-space-1);
        flex-wrap: wrap;

        h4 {
          margin: 0;
        }
      }

      #divider {
        width: 100%;
        height: 1px;
        background-color: var(--uui-color-divider);
        margin-top: var(--uui-size-space-3);
        margin-bottom: var(--uui-size-space-3);
      }
    `
];
v([
  M()
], f.prototype, "_facilities", 2);
v([
  M()
], f.prototype, "_selectionConfiguration", 2);
v([
  ne({ type: Object })
], f.prototype, "data", 1);
v([
  M()
], f.prototype, "_countries", 2);
v([
  M()
], f.prototype, "_hotelTreeItems", 2);
v([
  M()
], f.prototype, "_hotelDetailItems", 2);
f = v([
  re("umbrago-hotel-picker-modal")
], f);
export {
  f as UmbraGoHotelPickerModalElement,
  f as element
};
//# sourceMappingURL=hotel-picker-modal.element-D0rBPfAv.js.map
