import { UmbTextStyles } from "@umbraco-cms/backoffice/style";
import {
  customElement,
  LitElement,
  property,
  css,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbBlockDataType } from "@umbraco-cms/backoffice/block";
import type { UmbBlockEditorCustomViewElement } from "@umbraco-cms/backoffice/block-custom-view";
//import { UmbImagingRepository } from "@umbraco-cms/backoffice/imaging";
import { UmbDocumentDetailRepository } from "@umbraco-cms/backoffice/document";

@customElement("cg25-hotel-discount-block-custom-view")
export class Cg25HotelDiscountBlockElement
  extends UmbElementMixin(LitElement)
  implements UmbBlockEditorCustomViewElement
{
  //
  //#imagingRepository = new UmbImagingRepository(this);
  #detailRepository = new UmbDocumentDetailRepository(this);

  @property({ attribute: false })
  content?: UmbBlockDataType;

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("hotel")) {
      console.log("hotel", this.content?.hotel);
      this.#detailRepository.byUnique(this.content?.hotel as string);
      /*
      const image = (this.content?.image as Array<any> | undefined)?.[0];
      const imageUnique = image?.mediaKey as string | undefined;
      if (imageUnique) {
        this.#imagingRepository
          .requestThumbnailUrls([imageUnique], 1000, 1000)
          .then((response) => {
            const imageUrl = response.data[0]?.url;
            if (imageUrl) {
              this.style.backgroundImage = `url(${imageUrl})`;
            }
          });
      }
          */
    }
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
        background-size: cover;
        background-repeat: no-repeat;
      }
    `,
  ];
}

export default Cg25HotelDiscountBlockElement;

declare global {
  interface HTMLElementTagNameMap {
    "cg25-hotel-discount-block-custom-view": Cg25HotelDiscountBlockElement;
  }
}
