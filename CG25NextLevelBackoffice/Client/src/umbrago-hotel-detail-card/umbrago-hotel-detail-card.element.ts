import {
  UmbDocumentDetailModel,
  UmbDocumentItemDataResolver,
} from "@umbraco-cms/backoffice/document";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { ifDefined } from "@umbraco-cms/backoffice/external/lit";
import { UUICardElement } from "@umbraco-cms/backoffice/external/uui";
import { css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface MediaValueEntry {
  crops: Array<any>;
  focalPoint: null;
  key: string;
  mediaKey: string;
  mediaTypeAlias: string;
}

type MediaValue = Array<MediaValueEntry>;

@customElement("umbrago-hotel-detail-card")
export class UmbraGoHotelDetailCardElement extends UmbElementMixin(
  UUICardElement
) {
  private _item?: UmbDocumentDetailModel | undefined;

  @property({ type: Object })
  public get item(): UmbDocumentDetailModel | undefined {
    return this._item;
  }
  public set item(value: UmbDocumentDetailModel | undefined) {
    this._item = value;
    // @ts-ignore
    this.#itemDataResolver.setData(value);
  }

  @state()
  private _name = "";

  #itemDataResolver = new UmbDocumentItemDataResolver(this);

  constructor() {
    super();
    this.observe(
      this.#itemDataResolver.name,
      (name) => (this._name = name ?? "")
    );
  }

  #getMediaUnique() {
    const picturePropertyValue = this._item?.values.find(
      (value) => value.alias === "picture"
    )?.value as MediaValue;
    const firsEntry = picturePropertyValue?.[0];
    return firsEntry?.mediaKey;
  }

  protected renderMedia() {
    const unique = this.#getMediaUnique();
    return html`<umb-imaging-thumbnail
      id="media"
      unique=${unique}
    ></umb-imaging-thumbnail>`;
  }

  #renderTagline() {
    const tagline = this._item?.values.find(
      (value) => value.alias === "tagline"
    )?.value;
    return tagline ? html`<div id="detail">${tagline}</div>` : nothing;
  }

  #renderButton() {
    return html`
      <button
        id="open-part"
        tabindex=${this.disabled ? (nothing as any) : "0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
      >
        ${this.#renderContent()}
      </button>
    `;
  }

  #renderLink() {
    return html`
      <a
        id="open-part"
        tabindex=${this.disabled ? (nothing as any) : "0"}
        href=${ifDefined(!this.disabled ? this.href : undefined)}
        target=${ifDefined(this.target || undefined)}
        rel=${ifDefined(
          this.rel ||
            ifDefined(
              this.target === "_blank" ? "noopener noreferrer" : undefined
            )
        )}
      >
        ${this.#renderContent()}
      </a>
    `;
  }

  #renderContent() {
    return html`
      <div id="content" class="uui-text">
        <span id="name" title="${this._name}">${this._name}</span>
        ${this.#renderTagline()}
      </div>
    `;
  }

  public render() {
    return html` ${this.renderMedia()}
      ${this.href ? this.#renderLink() : this.#renderButton()}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>`;
  }

  static styles = [
    ...UUICardElement.styles,
    css`
      slot[name="tag"] {
        position: absolute;
        top: var(--uui-size-4);
        right: var(--uui-size-4);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name="actions"] {
        position: absolute;
        top: var(--uui-size-4);
        right: var(--uui-size-4);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name="actions"],
      :host(:focus-within) slot[name="actions"],
      :host(:hover) slot[name="actions"] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #media {
        border-radius: var(--uui-border-radius);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=""])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding: var(--uui-size-space-5);
        margin: var(--uui-size-space-5);
      }

      #content::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: var(--uui-border-radius);
        background-color: var(--uui-color-surface);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image=""]):hover,
          [image]:not([image=""]):focus,
          [image]:not([image=""]):focus-within,
          [selected][image]:not([image=""]),
          [error][image]:not([image=""])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3) var(--uui-size-space-4);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3) var(--uui-size-space-4);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3) * -1)
          calc(var(--uui-size-space-4) * -1);
        top: 0;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-hotel-detail-card": UmbraGoHotelDetailCardElement;
  }
}
