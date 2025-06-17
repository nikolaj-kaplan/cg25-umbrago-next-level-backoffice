import {
  LitElement,
  css,
  html,
  customElement,
  state,
  when,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UmbPropertyTypeModel } from "@umbraco-cms/backoffice/content-type";
import { UmbVariantId } from "@umbraco-cms/backoffice/variant";
import { UMB_PROPERTY_DATASET_CONTEXT } from "@umbraco-cms/backoffice/property";
import { UUITextStyles } from "@umbraco-cms/backoffice/external/uui";

@customElement("umbrago-create-article-workspace-view")
export class UmbraGoCreateArticleWorkspaceViewElement extends UmbElementMixin(
  LitElement
) {
  @state()
  _variantId?: UmbVariantId;

  @state()
  _propertyType?: UmbPropertyTypeModel;

  @state()
  _step = 1;

  @state()
  _enableStep2 = false;

  constructor() {
    super();

    // Get the property type from the context
    this.consumeContext(UMB_PROPERTY_DATASET_CONTEXT, async (context) => {
      this.observe(
        await context?.propertyValueByAlias<Array<unknown>>("facilities"),
        (value) => {
          if (value && value.length > 0) {
            this._enableStep2 = true;
          }
        }
      );
    });
  }

  render() {
    return html`
      <umb-body-layout>
        <uui-box>
          ${when(
            this._step === 1,
            () => html`
              <h1 class="uui-h3">Pick facilities to promote:</h1>

              <umb-content-workspace-property alias="facilities">
              </umb-content-workspace-property>
            `
          )}
          ${when(
            this._step === 2,
            () => html`
              <h1 class="uui-h3">Pick hotels to highlight:</h1>
              <umb-content-workspace-property alias="hotels">
              </umb-content-workspace-property>
            `
          )}
        </uui-box>
        <div class="actions">
          <uui-button
            look="primary"
            label="Back"
            ?disabled=${this._step === 1}
            @click=${() => {
              if (this._step === 2) {
                this._step = 1;
              }
            }}
          ></uui-button>
          <span class="uui-text uui-text--muted">
            Step ${this._step} of 2
          </span>
          <uui-button
            look="primary"
            color="positive"
            label="Next"
            ?disabled=${!this._enableStep2}
            @click=${() => {
              if (this._step === 1) {
                this._step = 2;
              }
            }}
            .href=${this._step === 2
              ? "/umbraco/section/content/workspace/document/create/parent/document/9d8d3a53-14c4-433b-b58e-9c18a95c79a4/04568c0a-b35c-4bdb-9d4c-6fdde6b3ccd4/en-US/view/content"
              : undefined}
          ></uui-button>
        </div>
      </umb-body-layout>
    `;
  }

  static styles = [
    UUITextStyles,
    css`
      umb-body-layout {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }

      uui-box {
        --uui-box-default-padding: var(--uui-size-layout-4)
          var(--uui-size-layout-2);
      }
      .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
      }
    `,
  ];
}

export { UmbraGoCreateArticleWorkspaceViewElement as element };

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-create-article-workspace-view": UmbraGoCreateArticleWorkspaceViewElement;
  }
}
