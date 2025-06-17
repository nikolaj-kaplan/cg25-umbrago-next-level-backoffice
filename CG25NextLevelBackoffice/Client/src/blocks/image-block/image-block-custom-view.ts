import { UmbTextStyles } from "@umbraco-cms/backoffice/style";
import {
  customElement,
  LitElement,
  property,
  css,
  html,
  state,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbBlockDataType } from "@umbraco-cms/backoffice/block";
import type { UmbBlockEditorCustomViewElement } from "@umbraco-cms/backoffice/block-custom-view";
import { UmbImagingRepository } from "@umbraco-cms/backoffice/imaging";

@customElement("cg25-image-block-custom-view")
export class Cg25ImageBlockElement
  extends UmbElementMixin(LitElement)
  implements UmbBlockEditorCustomViewElement
{
  //
  #imagingRepository = new UmbImagingRepository(this);

  @property({ attribute: false })
  content?: UmbBlockDataType;

  @property({ attribute: false })
  settings?: UmbBlockDataType;

  @state()
  _imageUrl?: string;

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("content")) {
      const image = (this.content?.image as Array<any> | undefined)?.[0];
      const imageUnique = image?.mediaKey as string | undefined;
      if (imageUnique) {
        this.#imagingRepository
          .requestThumbnailUrls([imageUnique], 1000, 1000)
          .then((response) => {
            const imageUrl = response.data[0]?.url;
            if (imageUrl) {
              this._imageUrl = imageUrl;
            }
          });
      }
    }
    if (changedProperties.has("settings")) {
      this.style.backgroundColor =
        (this.settings?.backgroundColor as string | undefined) ?? "#544";
      this.style.color =
        (this.settings?.textColor as string | undefined) ?? "#fff";
    }
  }

  protected render(): unknown {
    return html`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <img class="image" src=${this._imageUrl ?? ""} />`;
  }

  static override styles = [
    UmbTextStyles,
    css`
      :host {
        position: relative;
        display: block;
        height: 100%;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
      }
    `,
  ];
}

export default Cg25ImageBlockElement;

declare global {
  interface HTMLElementTagNameMap {
    "cg25-image-block-custom-view": Cg25ImageBlockElement;
  }
}
