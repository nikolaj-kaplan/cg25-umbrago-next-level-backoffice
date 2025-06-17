import { css, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import { UUITextStyles } from "@umbraco-cms/backoffice/external/uui";
import { UMB_CREATE_DOCUMENT_WORKSPACE_PATH_PATTERN } from "@umbraco-cms/backoffice/document";
import { UmbModalBaseElement } from "@umbraco-cms/backoffice/modal";
import { UmbraGoCreateOptionsModalData } from "./constants";

@customElement("umbrago-create-modal")
export class UmbragoCreateModalElement extends UmbModalBaseElement<
  UmbraGoCreateOptionsModalData,
  never
> {
  render() {
    return html`<h1 class="uui-h3">Create new article</h1>
      <div id="grid">
        <uui-card-media
          name="Facility promotion"
          href="${UMB_CREATE_DOCUMENT_WORKSPACE_PATH_PATTERN.generateAbsolute({
            parentEntityType: "document",
            parentUnique: this.data?.unique,
            documentTypeUnique: "04568c0a-b35c-4bdb-9d4c-6fdde6b3ccd4",
          })}"
        >
          <img src="/App_Plugins/CG25NextLevelBackoffice/stocks/pool.jpg" />
        </uui-card-media>
        <uui-card-media
          name="Hotel feature"
          @open=${() => alert("not implemented")}
        >
          <img src="/App_Plugins/CG25NextLevelBackoffice/stocks/street.jpg" />
        </uui-card-media>
        <uui-card-media
          name="Travel package"
          @open=${() => alert("not implemented")}
        >
          <img
            src="/App_Plugins/CG25NextLevelBackoffice/stocks/breakfast.jpg"
          />
        </uui-card-media>
        <uui-card-media name="News" @open=${() => alert("not implemented")}>
          <img src="/App_Plugins/CG25NextLevelBackoffice/stocks/article.jpg" />
        </uui-card-media>
      </div>
      <uui-button @click=${() => this._rejectModal()}>Cancel</uui-button>`;
  }

  static styles = [
    UUITextStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        padding: var(--uui-size-layout-4);
        max-width: 640px;
      }
      #grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--uui-size-layout-1);
      }
      uui-button {
        align-self: end;
        margin-top: var(--uui-size-layout-2);
        margin-bottom: calc(var(--uui-size-layout-2) * -1);
      }
    `,
  ];
}

export { UmbragoCreateModalElement as element };

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-create-modal": UmbragoCreateModalElement;
  }
}
