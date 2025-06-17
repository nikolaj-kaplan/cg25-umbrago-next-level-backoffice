import {
  html,
  customElement,
  LitElement,
  property,
  state,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import type { UmbBlockDataType } from "@umbraco-cms/backoffice/block";
import type { UmbBlockEditorCustomViewElement } from "@umbraco-cms/backoffice/block-custom-view";

@customElement("two-column-layout-block-custom-view")
export class ExampleBlockCustomView
  extends UmbElementMixin(LitElement)
  implements UmbBlockEditorCustomViewElement
{
  //
  @property({ attribute: false })
  content?: UmbBlockDataType;

  @property({ attribute: false })
  settings?: UmbBlockDataType;

  @state()
  _backgroundColor?: string;

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("settings")) {
      this._backgroundColor =
        (this.settings?.backgroundColor as string | undefined) ?? "";
      //this.style.color = (this.settings?.textColor as string | undefined) ?? "";
    }
  }

  override render() {
    return html`<link
        rel="stylesheet"
        href="/App_Plugins/CG25NextLevelBackoffice/grid-stylesheet.css"
      />
      <section
        style="background-color': ${this._backgroundColor}"
        ng-attr-nobackgroundcolor="{{block.settingsData.backgroundColor.value === '' || undefined}}"
        ng-attr-bright-contrast="{{block.settingsData.contrast.value === 'ffffff' || undefined}}"
      >
        <umb-block-grid-areas-container
          draggable="false"
        ></umb-block-grid-areas-container>
      </section>`;
  }
}

export default ExampleBlockCustomView;

declare global {
  interface HTMLElementTagNameMap {
    "two-column-layout-block-custom-view": ExampleBlockCustomView;
  }
}
