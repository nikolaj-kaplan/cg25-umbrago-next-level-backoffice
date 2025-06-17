import { UmbTextStyles } from "@umbraco-cms/backoffice/style";
import {
  html,
  customElement,
  LitElement,
  property,
  css,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbBlockDataType } from "@umbraco-cms/backoffice/block";
import type { UmbBlockEditorCustomViewElement } from "@umbraco-cms/backoffice/block-custom-view";

@customElement("cg25-quote-block-custom-view")
export class CG25QuoteBlockCustomView
  extends UmbElementMixin(LitElement)
  implements UmbBlockEditorCustomViewElement
{
  //
  @property({ attribute: false })
  content?: UmbBlockDataType;

  @property({ attribute: false })
  settings?: UmbBlockDataType;

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);
    console.log("this.settings", this.settings);
    if (changedProperties.has("settings")) {
      this.style.backgroundColor =
        ((this.settings?.backgroundColor as any)?.value as
          | string
          | undefined) ?? "";
      this.style.color =
        ((this.settings?.textColor as any)?.value as string | undefined) ?? "";
    }
  }

  override render() {
    return html`<blockquote>
        ${this.content?.quote as string | undefined}
      </blockquote>
      <p>${this.content?.author as string | undefined}</p>`;
  }

  static override styles = [
    UmbTextStyles,
    css`
      :host {
        position: relative;
        display: block;
        height: 100%;
        box-sizing: border-box;
        border-radius: 9px;
        padding: 12px 32px;
      }

      blockquote {
        margin: 20px;
        margin-bottom: 0;
        padding: 0;
        font-style: italic;
        color: inherit;
        font-family: "PlayFiar Display", sans-serif;
        font-size: 30px;
        font-weight: 500;
        line-height: 1;
      }

      blockquote::before {
        content: open-quote;
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        font-size: 40px;
        font-weight: 300;
        margin-left: -22px;
        margin-top: -30px;
        margin-bottom: -5px;
      }

      blockquote::after {
        content: close-quote;
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        font-size: 40px;
        font-weight: 300;
        margin-right: -10px;
        margin-top: -30px;
        margin-bottom: -10px;
      }

      p {
        margin-left: 20px;
      }
    `,
  ];
}

export default CG25QuoteBlockCustomView;

declare global {
  interface HTMLElementTagNameMap {
    "cg25-quote-block-custom-view": CG25QuoteBlockCustomView;
  }
}
