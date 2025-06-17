import {
  LitElement,
  css,
  html,
  customElement,
  state,
  nothing,
  repeat,
  property,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT } from "@umbraco-cms/backoffice/property";
import { UmbDocumentDetailModel } from "@umbraco-cms/backoffice/document";
import { UmbraGoHotelPickerContext } from "./input-hotel-picker.context";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";

import "../umbrago-hotel-detail-card/umbrago-hotel-detail-card.element.js";

export type UmbContentPickerValueModel = Array<UmbContentPickerValueEntryModel>;

export interface UmbContentPickerValueEntryModel {
  type: "document" | "media" | "member";
  unique: string;
}

@customElement("umbrago-hotel-picker-property-editor-ui")
export class UmbraGoHotelPickerPropertyEditorUiElement extends UmbElementMixin(
  LitElement
) {
  #datasetContext?: typeof UMB_PROPERTY_DATASET_CONTEXT.TYPE;

  @property({ type: Array })
  public get value(): UmbContentPickerValueModel | undefined {
    return this.#value;
  }
  public set value(value: UmbContentPickerValueModel | undefined) {
    this.#value = value;
    const uniques = value?.map((entry) => entry.unique) ?? [];
    this.#inputPickerContext.setSelection(uniques);
  }

  /**
   * Sets the input to readonly mode, meaning value cannot be changed but still able to read and select its content.
   * @type {boolean}
   * @attr
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  readonly = false;

  @state()
  _facilityValue: UmbContentPickerValueModel = [];

  @state()
  _items: Array<UmbDocumentDetailModel> = [];

  #value?: UmbContentPickerValueModel | undefined;
  #inputPickerContext = new UmbraGoHotelPickerContext(this);

  constructor() {
    super();
    this.consumeContext(UMB_PROPERTY_DATASET_CONTEXT, (dataset) => {
      this.#datasetContext = dataset;
      this.#observeFacilityPickerValue();
    });

    this.observe(
      this.#inputPickerContext.itemsWithDetails,
      (selectedItems) => {
        this._items = selectedItems;
        const value = selectedItems
          ?.filter((item) => item)
          .map((item) => {
            const entry: UmbContentPickerValueEntryModel = {
              type: "document",
              unique: item.unique,
            };
            return entry;
          });
        this.#setValue(value);
      },
      "uopObserveSelectedItems"
    );
  }

  async #observeFacilityPickerValue() {
    this.observe(
      await this.#datasetContext?.propertyValueByAlias("facilities"),
      (value) => {
        this._facilityValue = (value as UmbContentPickerValueModel) || [];
      }
    );
  }

  #setValue(value: UmbContentPickerValueModel) {
    this.value = value;
    this.dispatchEvent(new UmbChangeEvent());
  }

  override render() {
    return html`${this.#renderItems()}`;
  }

  #openPicker() {
    this.#inputPickerContext.openPicker({
      facilityDocuments: this._facilityValue.map((item) => item.unique),
    });
  }

  #removeItem(itemUnique: string) {
    if (!itemUnique) return;
    this.#inputPickerContext.requestRemoveItem(itemUnique);
  }

  #renderItems() {
    if (!this._items) return nothing;

    return html`
      <div id="card-grid">
        ${repeat(
          this._items,
          (item) => item.unique,
          (item) => this.#renderItem(item)
        )}
        ${this.#renderAddButton()}
      </div>
    `;
  }

  #renderItem(item: UmbDocumentDetailModel) {
    if (!item.unique) return nothing;
    return html`
      <umbrago-hotel-detail-card .item=${item} id=${item.unique}>
        <uui-action-bar slot="actions">
          ${this.#renderRemoveButton(item)}
        </uui-action-bar>
      </umbrago-hotel-detail-card>
    `;
  }

  #renderRemoveButton(item: UmbDocumentDetailModel) {
    if (this.readonly) return nothing;

    return html`
      <uui-button
        look="secondary"
        label=${this.localize.term("general_remove")}
        @click=${() => this.#removeItem(item.unique)}
      ></uui-button>
    `;
  }

  #renderAddButton() {
    return html`
      <uui-button
        id="btn-add"
        look="placeholder"
        label=${this.localize.term("general_choose")}
        @click=${this.#openPicker}
        ?disabled=${this.readonly}
      ></uui-button>
    `;
  }

  static styles = [
    css`
      :host {
        width: 100%;
      }

      #card-grid {
        display: grid;
        gap: var(--uui-size-space-5);
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: 250px;
      }

      #btn-add {
        width: 100%;
      }
    `,
  ];
}

export { UmbraGoHotelPickerPropertyEditorUiElement as element };

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-hotel-picker-property-editor-ui": UmbraGoHotelPickerPropertyEditorUiElement;
  }
}
