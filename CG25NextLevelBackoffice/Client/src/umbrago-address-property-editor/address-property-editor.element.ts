import {
  LitElement,
  css,
  html,
  customElement,
  property,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  ManifestPropertyEditorUi,
  UmbPropertyEditorUiElement,
} from "@umbraco-cms/backoffice/property-editor";
import {
  UUIInputEvent,
  UUISelectElement,
} from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";

type PropertyEditorValueType = {
  street?: string;
  houseNumber?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
};

// Notice: get your language from a trusted source, not this hardcoded AI generated one:
const CountryOptions = [
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
  { value: "ZW", name: "Zimbabwe" },
];

@customElement("umbrago-address-property-editor")
export class umbragoAddressPropertyEditorElement
  extends UmbElementMixin(LitElement)
  implements UmbPropertyEditorUiElement
{
  @property({ type: Object, attribute: false })
  manifest?: ManifestPropertyEditorUi;

  @property({ type: Object, attribute: false })
  value?: PropertyEditorValueType;

  #onSelectCountry = (event: CustomEvent) => {
    const select = event.target as UUISelectElement;
    const selectedCountry = select.value;
    this.#setValueProperty("country", selectedCountry as string);
  };

  #setValueProperty(property: keyof PropertyEditorValueType, value: string) {
    const newValue = { ...this.value }; // Create a shallow copy of the value, it is necessary as the given value is frozen.
    newValue[property] = value;
    this.value = newValue;
    this.dispatchEvent(new UmbChangeEvent());
  }

  render() {
    return html`
      <div>
        <uui-label for="street">Street</uui-label>
        <uui-input
          id="street"
          .value=${this.value?.street ?? ""}
          @input=${(e: UUIInputEvent) =>
            this.#setValueProperty("street", e.target.value as string)}
        ></uui-input>
      </div>
      <div>
        <uui-label for="housenumber">House Number</uui-label>
        <uui-input
          id="houseNumber"
          .value=${this.value?.houseNumber ?? ""}
          @input=${(e: UUIInputEvent) =>
            this.#setValueProperty("houseNumber", e.target.value as string)}
        ></uui-input>
      </div>
      <div class="span-across">
        <uui-label for="addressLine2">Address line 2</uui-label>
        <uui-input
          id="addressLine2"
          .value=${this.value?.addressLine2 ?? ""}
          @input=${(e: UUIInputEvent) =>
            this.#setValueProperty("addressLine2", e.target.value as string)}
        ></uui-input>
      </div>

      <div>
        <uui-label for="city">City</uui-label>
        <uui-input
          id="city"
          .value=${this.value?.city ?? ""}
          @input=${(e: UUIInputEvent) =>
            this.#setValueProperty("city", e.target.value as string)}
        ></uui-input>
      </div>
      <div>
        <uui-label for="state">State</uui-label>
        <uui-input
          id="state"
          .value=${this.value?.state ?? ""}
          @input=${(e: UUIInputEvent) =>
            this.#setValueProperty("state", e.target.value as string)}
        ></uui-input>
      </div>

      <div>
        <uui-label for="postalCode">Postal Code</uui-label>
        <uui-input
          id="postalCode"
          .value=${this.value?.postalCode ?? ""}
          @input=${(e: UUIInputEvent) =>
            this.#setValueProperty("postalCode", e.target.value as string)}
        ></uui-input>
      </div>
      <div>
        <uui-label for="country">Country</uui-label>
        <uui-select
          label="Select country"
          placeholder="Select country..."
          value=${this.value?.country ?? ""}
          .options=${
            // Notice: this fix should not be nesecary, future version of UI Library should handle accepting a value.
            CountryOptions.map((e) => ({
              ...e,
              selected: e.value == this.value?.country,
            }))
          }
          @change=${this.#onSelectCountry}
        ></uui-select>
      </div>
    `;
  }

  static styles = [
    css`
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
    `,
  ];
}

export default umbragoAddressPropertyEditorElement;

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-address-property-editor": umbragoAddressPropertyEditorElement;
  }
}
