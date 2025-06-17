import {
  UmbDocumentDetailModel,
  UmbDocumentItemModel,
  UmbDocumentItemRepository,
  UmbDocumentTreeItemModel,
} from "@umbraco-cms/backoffice/document";
import {
  css,
  html,
  customElement,
  state,
  property,
  PropertyValueMap,
  repeat,
  nothing,
} from "@umbraco-cms/backoffice/external/lit";
import {
  UUISelectEvent,
  UUITextStyles,
} from "@umbraco-cms/backoffice/external/uui";
import { UmbModalBaseElement } from "@umbraco-cms/backoffice/modal";
import {
  UmbraGoHotelPickerModalData,
  UmbraGoHotelPickerModalValue,
} from "./hotel-picker-modal.token";
import { UmbPickerContext } from "@umbraco-cms/backoffice/picker";
import { UmbTreeSelectionConfiguration } from "@umbraco-cms/backoffice/tree";
import { UmbraGoHotelDocumentDataManager } from "./hotel-document-data.manager";
import { UmbContentPickerValueModel } from "./hotel-picker-property-editor-ui.element";

@customElement("umbrago-hotel-picker-modal")
export class UmbraGoHotelPickerModalElement extends UmbModalBaseElement<
  UmbraGoHotelPickerModalData,
  UmbraGoHotelPickerModalValue
> {
  @state()
  _facilities: Array<UmbDocumentItemModel> = [];

  @state()
  _selectionConfiguration: UmbTreeSelectionConfiguration = {
    multiple: true,
    selectable: true,
    selection: [],
  };

  @property({ type: Object })
  public get data(): UmbraGoHotelPickerModalData | undefined {
    return this.#data;
  }
  public set data(value: UmbraGoHotelPickerModalData | undefined) {
    this.#data = value;
    this.#loadFacilities();
  }

  #data: UmbraGoHotelPickerModalData | undefined;
  #documentItemRepository = new UmbDocumentItemRepository(this);
  #pickerContext = new UmbPickerContext(this);
  /* Note: POC code. Data requests for the picker is handled by this manager. It currently makes more requests than ideal. 
  A better solution would be a custom endpoint or a more flexible "filter"-style endpoint in the Management API for document. */
  #hotelDocumentDataManager = new UmbraGoHotelDocumentDataManager(this);

  @state()
  _countries: Array<UmbDocumentItemModel> = [];

  @state()
  _hotelTreeItems: Array<UmbDocumentTreeItemModel> = [];

  @state()
  _hotelDetailItems: Array<UmbDocumentDetailModel> = [];

  constructor() {
    super();
    this.#pickerContext.selection.setSelectable(true);
    this.#pickerContext.selection.setMultiple(true);
    this.#observePickerSelection();

    this.observe(
      this.#hotelDocumentDataManager.countriesForHotels,
      (countries) => {
        this._countries = countries;
      },
      "umbraGoHotelPickerCountriesObserver"
    );

    this.observe(
      this.#hotelDocumentDataManager.hotelTreeItems,
      (hotelTreeItems) => {
        this._hotelTreeItems = hotelTreeItems;
      },
      "umbraGoHotelPickerHotelTreeItemsObserver"
    );

    this.observe(
      this.#hotelDocumentDataManager.hotelDetailItems,
      (hotelDetailItems) => {
        this._hotelDetailItems = hotelDetailItems;
      },
      "umbraGoHotelPickerHotelDetailItemsObserver"
    );
  }

  protected override async updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    super.updated(_changedProperties);

    if (_changedProperties.has("data")) {
      const multiple = this.data?.multiple ?? false;
      this.#pickerContext.selection.setMultiple(multiple);

      this._selectionConfiguration = {
        ...this._selectionConfiguration,
        multiple,
      };
    }

    if (_changedProperties.has("value")) {
      const selection = this.value?.selection ?? [];
      this.#pickerContext.selection.setSelection(selection);
      this._selectionConfiguration = {
        ...this._selectionConfiguration,
        selection: [...selection],
      };
    }
  }

  #observePickerSelection() {
    this.observe(
      this.#pickerContext.selection.selection,
      (selection) => {
        this.updateValue({ selection });
        this.requestUpdate();
      },
      "umbragoPickerSelectionObserver"
    );
  }

  async #loadFacilities() {
    if (
      !this.data?.facilityDocuments ||
      this.data.facilityDocuments.length === 0
    ) {
      return;
    }

    const { data } = await this.#documentItemRepository.requestItems(
      this.data.facilityDocuments
    );

    if (data) {
      this._facilities = data;
    }
  }

  #onItemSelected(event: UUISelectEvent, item: UmbDocumentTreeItemModel) {
    event.stopPropagation();
    this.#pickerContext.selection.select(item.unique);
  }

  #onItemDeselected(event: UUISelectEvent, item: UmbDocumentTreeItemModel) {
    event.stopPropagation();
    this.#pickerContext.selection.deselect(item.unique);
  }

  #getFilteredHotels(countryUnique: string) {
    const hotelsForCountry = this.#filterHotelsByCountry(
      this._hotelTreeItems,
      countryUnique
    );

    return this.#filterHotelsByFacilities(hotelsForCountry);
  }

  #filterHotelsByCountry(
    hotels: Array<UmbDocumentTreeItemModel>,
    countryUnique: string
  ) {
    const hotelContainerUnique =
      this.#hotelDocumentDataManager.getHotelContainerForCountry(countryUnique);
    if (!hotelContainerUnique) return [];

    return hotels.filter(
      (hotel) => hotel.parent.unique === hotelContainerUnique
    );
  }

  #filterHotelsByFacilities(hotels: Array<UmbDocumentTreeItemModel>) {
    if (this._facilities.length === 0) {
      return this._hotelTreeItems;
    }

    return hotels.filter((hotel) => {
      const hotelDetails = this._hotelDetailItems.find(
        (detail) => detail.unique === hotel.unique
      );
      if (!hotelDetails) return false;

      // Check if the hotel has all the facilities
      return this._facilities.every((facility) =>
        hotelDetails.values.some((property) => {
          if (property.alias === "facilities") {
            const value = property.value as UmbContentPickerValueModel;
            // Check if the facility is in the hotel details
            return value.some((value) => value.unique === facility.unique);
          }
        })
      );
    });
  }

  render() {
    return html`<umb-body-layout headline="Choose Hotels">
      <uui-box>
        <div id="facilities">
          <h4>Facilities:</h4>
          ${this._facilities.map(
            (facility) =>
              html`<uui-tag look="secondary">${facility.name}</uui-tag>`
          )}
        </div>
        <div id="divider"></div>
        ${repeat(
          this._countries,
          (item) => item.unique,
          (item) => this.#renderCountry(item)
        )}
      </uui-box>
      ${this.#renderActions()}
    </umb-body-layout>`;
  }

  #renderCountry(countryDocument: UmbDocumentItemModel) {
    // We skip a level in the tree structure so we look up the relationship in the map
    const filteredHotels = this.#getFilteredHotels(countryDocument.unique);
    const hasHotels = filteredHotels.length > 0;
    if (!hasHotels) return nothing;

    return html`
      <uui-menu-item
        label=${countryDocument.name}
        ?has-children=${hasHotels}
        show-children
      >
        <uui-icon
          name=${countryDocument.documentType.icon}
          slot="icon"
        ></uui-icon>
        ${this.#renderHotels(filteredHotels)}
      </uui-menu-item>
    `;
  }

  #renderHotels(hotels: Array<UmbDocumentTreeItemModel>) {
    return html`
      ${repeat(
        hotels,
        (item) => item.unique,
        (item) => this.#renderHotel(item)
      )}
    `;
  }

  #renderHotel(hotel: UmbDocumentTreeItemModel) {
    return html`
      <uui-menu-item
        label=${hotel.name}
        selectable
        ?selected=${this.#pickerContext.selection.isSelected(hotel.unique)}
        @selected=${(e: UUISelectEvent) => this.#onItemSelected(e, hotel)}
        @deselected=${(e: UUISelectEvent) => this.#onItemDeselected(e, hotel)}
      >
        <uui-icon name=${hotel.documentType.icon} slot="icon"></uui-icon>
        ${hotel.name}
      </uui-menu-item>
    `;
  }

  #renderActions() {
    return html`
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
  }

  static styles = [
    UUITextStyles,
    css`
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
    `,
  ];
}

export { UmbraGoHotelPickerModalElement as element };

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-hotel-picker-modal": UmbraGoHotelPickerModalElement;
  }
}
