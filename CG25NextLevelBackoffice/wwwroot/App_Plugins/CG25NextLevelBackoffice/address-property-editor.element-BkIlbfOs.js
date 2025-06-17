import { LitElement as A, html as C, css as S, property as y, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as M } from "@umbraco-cms/backoffice/event";
var L = Object.defineProperty, T = Object.getOwnPropertyDescriptor, b = (a) => {
  throw TypeError(a);
}, p = (a, e, u, v) => {
  for (var l = v > 1 ? void 0 : v ? T(e, u) : e, m = a.length - 1, s; m >= 0; m--)
    (s = a[m]) && (l = (v ? s(e, u, l) : s(l)) || l);
  return v && l && L(e, u, l), l;
}, g = (a, e, u) => e.has(a) || b("Cannot " + u), P = (a, e, u) => (g(a, e, "read from private field"), u ? u.call(a) : e.get(a)), h = (a, e, u) => e.has(a) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, u), r = (a, e, u) => (g(a, e, "access private method"), u), d, t, i;
const _ = [
  { value: "AD", name: "Andorra" },
  { value: "AE", name: "United Arab Emirates" },
  { value: "AL", name: "Albania" },
  { value: "AM", name: "Armenia" },
  { value: "AR", name: "Argentina" },
  { value: "AT", name: "Austria" },
  { value: "AU", name: "Australia" },
  { value: "AZ", name: "Azerbaijan" },
  { value: "BA", name: "Bosnia and Herzegovina" },
  { value: "BA", name: "Bosnia and Herzegovina" },
  { value: "BD", name: "Bangladesh" },
  { value: "BE", name: "Belgium" },
  { value: "BG", name: "Bulgaria" },
  { value: "BR", name: "Brazil" },
  { value: "BT", name: "Bhutan" },
  { value: "BY", name: "Belarus" },
  { value: "CA", name: "Canada" },
  { value: "CH", name: "Switzerland" },
  { value: "CL", name: "Chile" },
  { value: "CN", name: "China" },
  { value: "CO", name: "Colombia" },
  { value: "CY", name: "Cyprus" },
  { value: "CZ", name: "Czech Republic" },
  { value: "DE", name: "Germany" },
  { value: "DK", name: "Denmark" },
  { value: "DZ", name: "Algeria" },
  { value: "EE", name: "Estonia" },
  { value: "EG", name: "Egypt" },
  { value: "ES", name: "Spain" },
  { value: "FI", name: "Finland" },
  { value: "FR", name: "France" },
  { value: "GB", name: "United Kingdom" },
  { value: "GE", name: "Georgia" },
  { value: "GH", name: "Ghana" },
  { value: "GR", name: "Greece" },
  { value: "HR", name: "Croatia" },
  { value: "HU", name: "Hungary" },
  { value: "ID", name: "Indonesia" },
  { value: "IE", name: "Ireland" },
  { value: "IN", name: "India" },
  { value: "IQ", name: "Iraq" },
  { value: "IR", name: "Iran" },
  { value: "IS", name: "Iceland" },
  { value: "IT", name: "Italy" },
  { value: "JP", name: "Japan" },
  { value: "KE", name: "Kenya" },
  { value: "KG", name: "Kyrgyzstan" },
  { value: "KH", name: "Cambodia" },
  { value: "KR", name: "South Korea" },
  { value: "KZ", name: "Kazakhstan" },
  { value: "LA", name: "Laos" },
  { value: "LI", name: "Liechtenstein" },
  { value: "LK", name: "Sri Lanka" },
  { value: "LT", name: "Lithuania" },
  { value: "LU", name: "Luxembourg" },
  { value: "LV", name: "Latvia" },
  { value: "LY", name: "Libya" },
  { value: "MA", name: "Morocco" },
  { value: "MC", name: "Monaco" },
  { value: "MD", name: "Moldova" },
  { value: "MK", name: "North Macedonia" },
  { value: "MM", name: "Myanmar" },
  { value: "MN", name: "Mongolia" },
  { value: "MT", name: "Malta" },
  { value: "MV", name: "Maldives" },
  { value: "MX", name: "Mexico" },
  { value: "MY", name: "Malaysia" },
  { value: "NG", name: "Nigeria" },
  { value: "NL", name: "Netherlands" },
  { value: "NO", name: "Norway" },
  { value: "NP", name: "Nepal" },
  { value: "PE", name: "Peru" },
  { value: "PH", name: "Philippines" },
  { value: "PK", name: "Pakistan" },
  { value: "PL", name: "Poland" },
  { value: "PT", name: "Portugal" },
  { value: "RO", name: "Romania" },
  { value: "RO", name: "Romania" },
  { value: "RS", name: "Serbia" },
  { value: "RU", name: "Russia" },
  { value: "RW", name: "Rwanda" },
  { value: "SA", name: "Saudi Arabia" },
  { value: "SD", name: "Sudan" },
  { value: "SE", name: "Sweden" },
  { value: "SG", name: "Singapore" },
  { value: "SI", name: "Slovenia" },
  { value: "SM", name: "San Marino" },
  { value: "TH", name: "Thailand" },
  { value: "TJ", name: "Tajikistan" },
  { value: "TL", name: "Timor-Leste" },
  { value: "TM", name: "Turkmenistan" },
  { value: "TN", name: "Tunisia" },
  { value: "TR", name: "Turkey" },
  { value: "TZ", name: "Tanzania" },
  { value: "UA", name: "Ukraine" },
  { value: "UG", name: "Uganda" },
  { value: "US", name: "United States" },
  { value: "UZ", name: "Uzbekistan" },
  { value: "VA", name: "Vatican City" },
  { value: "VA", name: "Vatican City" },
  { value: "VE", name: "Venezuela" },
  { value: "VN", name: "Vietnam" },
  { value: "ZA", name: "South Africa" },
  { value: "ZM", name: "Zambia" },
  { value: "ZW", name: "Zimbabwe" }
];
let o = class extends E(A) {
  constructor() {
    super(...arguments), h(this, t), h(this, d, (a) => {
      const u = a.target.value;
      r(this, t, i).call(this, "country", u);
    });
  }
  render() {
    var a, e, u, v, l, m, s;
    return C`
      <div>
        <uui-label for="street">Street</uui-label>
        <uui-input
          id="street"
          .value=${((a = this.value) == null ? void 0 : a.street) ?? ""}
          @input=${(n) => r(this, t, i).call(this, "street", n.target.value)}
        ></uui-input>
      </div>
      <div>
        <uui-label for="housenumber">House Number</uui-label>
        <uui-input
          id="houseNumber"
          .value=${((e = this.value) == null ? void 0 : e.houseNumber) ?? ""}
          @input=${(n) => r(this, t, i).call(this, "houseNumber", n.target.value)}
        ></uui-input>
      </div>
      <div class="span-across">
        <uui-label for="addressLine2">Address line 2</uui-label>
        <uui-input
          id="addressLine2"
          .value=${((u = this.value) == null ? void 0 : u.addressLine2) ?? ""}
          @input=${(n) => r(this, t, i).call(this, "addressLine2", n.target.value)}
        ></uui-input>
      </div>

      <div>
        <uui-label for="city">City</uui-label>
        <uui-input
          id="city"
          .value=${((v = this.value) == null ? void 0 : v.city) ?? ""}
          @input=${(n) => r(this, t, i).call(this, "city", n.target.value)}
        ></uui-input>
      </div>
      <div>
        <uui-label for="state">State</uui-label>
        <uui-input
          id="state"
          .value=${((l = this.value) == null ? void 0 : l.state) ?? ""}
          @input=${(n) => r(this, t, i).call(this, "state", n.target.value)}
        ></uui-input>
      </div>

      <div>
        <uui-label for="postalCode">Postal Code</uui-label>
        <uui-input
          id="postalCode"
          .value=${((m = this.value) == null ? void 0 : m.postalCode) ?? ""}
          @input=${(n) => r(this, t, i).call(this, "postalCode", n.target.value)}
        ></uui-input>
      </div>
      <div>
        <uui-label for="country">Country</uui-label>
        <uui-select
          label="Select country"
          placeholder="Select country..."
          value=${((s = this.value) == null ? void 0 : s.country) ?? ""}
          .options=${// Notice: this fix should not be nesecary, future version of UI Library should handle accepting a value.
    _.map((n) => {
      var c;
      return {
        ...n,
        selected: n.value == ((c = this.value) == null ? void 0 : c.country)
      };
    })}
          @change=${P(this, d)}
        ></uui-select>
      </div>
    `;
  }
};
d = /* @__PURE__ */ new WeakMap();
t = /* @__PURE__ */ new WeakSet();
i = function(a, e) {
  const u = { ...this.value };
  u[a] = e, this.value = u, this.dispatchEvent(new M());
};
o.styles = [
  S`
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two equal columns */
        grid-template-rows: auto auto;
        gap: 1rem;
      }

      :host > div {
        grid-column: span 1;
        grid-row: span 1;
        display: flex;
        flex-direction: column;
      }

      :host > div.span-across {
        grid-column: span 2;
      }
    `
];
p([
  y({ type: Object, attribute: !1 })
], o.prototype, "manifest", 2);
p([
  y({ type: Object, attribute: !1 })
], o.prototype, "value", 2);
o = p([
  f("umbrago-address-property-editor")
], o);
const I = o;
export {
  I as default,
  o as umbragoAddressPropertyEditorElement
};
//# sourceMappingURL=address-property-editor.element-BkIlbfOs.js.map
