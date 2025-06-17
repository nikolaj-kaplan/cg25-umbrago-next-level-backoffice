import {
  html,
  customElement,
  LitElement,
  property,
  unsafeHTML,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbBlockDataType } from "@umbraco-cms/backoffice/block";
import type { UmbBlockEditorCustomViewElement } from "@umbraco-cms/backoffice/block-custom-view";

// eslint-disable-next-line local-rules/enforce-umb-prefix-on-element-name
@customElement("example-block-custom-view")
// eslint-disable-next-line local-rules/umb-class-prefix
export class ExampleBlockCustomView
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
    if (changedProperties.has("settings")) {
      this.style.backgroundColor =
        (this.settings?.backgroundColor as string | undefined) ?? "";
      this.style.color = (this.settings?.textColor as string | undefined) ?? "";
    }
  }

  override render() {
    return html`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <div class="rich-text">
        ${unsafeHTML(
          ((this.content?.paragraph as any)?.markup as string | undefined) ??
            "No text"
        )}
      </div>`;
  }

  /*
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

        font-family: "PlayFiar Display", sans-serif;
        font-size: 1vw;
        line-height: 1.2;
      }
    `,
  ];
  */
}

export default ExampleBlockCustomView;

declare global {
  interface HTMLElementTagNameMap {
    "example-block-custom-view": ExampleBlockCustomView;
  }
}
