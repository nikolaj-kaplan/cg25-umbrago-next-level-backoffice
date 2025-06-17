import { UmbTextStyles } from "@umbraco-cms/backoffice/style";
import {
  customElement,
  LitElement,
  property,
  css,
  html,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbBlockDataType } from "@umbraco-cms/backoffice/block";
import type { UmbBlockEditorCustomViewElement } from "@umbraco-cms/backoffice/block-custom-view";

@customElement("cg25-discount-block-custom-view")
export class Cg25DiscountBlockElement
  extends UmbElementMixin(LitElement)
  implements UmbBlockEditorCustomViewElement
{
  @property({ attribute: false })
  content?: UmbBlockDataType;

  protected render() {
    return html`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <h3>${this.content?.headline}</h3>
      <p>${this.content?.description}</p>
      <div class="code">${this.content?.discountCode}</div>`;
  }

  static override styles = [
    UmbTextStyles,
    css`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
        border-radius: 9px;
        background-color: var(--uui-color-background);

        font-family: "PlayFiar Display", sans-serif;
        padding: 10px;
        margin-bottom: 10px;
      }

      h3 {
        margin: 0 20px;
        margin-top: 10px;
        padding: 0;
        color: inherit;
        font-size: 32px;
        font-weight: 300;
        line-height: 1;
      }

      p {
        margin: 20px;
        margin-top: 0;
        font-weight: 300;
        padding-left: 2px;
      }

      .code {
        font-size: 32px;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        border: 2px dashed black;
        padding: 10px;
        margin: 10px;
        border-radius: 3px;
      }
    `,
  ];
}

export default Cg25DiscountBlockElement;

declare global {
  interface HTMLElementTagNameMap {
    "cg25-discount-block-custom-view": Cg25DiscountBlockElement;
  }
}
