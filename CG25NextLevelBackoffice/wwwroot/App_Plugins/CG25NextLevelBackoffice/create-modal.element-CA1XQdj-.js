import { html as m, css as c, customElement as n } from "@umbraco-cms/backoffice/external/lit";
import { UUITextStyles as s } from "@umbraco-cms/backoffice/external/uui";
import { UMB_CREATE_DOCUMENT_WORKSPACE_PATH_PATTERN as d } from "@umbraco-cms/backoffice/document";
import { UmbModalBaseElement as p } from "@umbraco-cms/backoffice/modal";
var g = Object.getOwnPropertyDescriptor, f = (e, r, l, u) => {
  for (var t = u > 1 ? void 0 : u ? g(r, l) : r, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (t = o(t) || t);
  return t;
};
let i = class extends p {
  render() {
    var e;
    return m`<h1 class="uui-h3">Create new article</h1>
      <div id="grid">
        <uui-card-media
          name="Facility promotion"
          href="${d.generateAbsolute({
      parentEntityType: "document",
      parentUnique: (e = this.data) == null ? void 0 : e.unique,
      documentTypeUnique: "04568c0a-b35c-4bdb-9d4c-6fdde6b3ccd4"
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
};
i.styles = [
  s,
  c`
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
    `
];
i = f([
  n("umbrago-create-modal")
], i);
export {
  i as UmbragoCreateModalElement,
  i as element
};
//# sourceMappingURL=create-modal.element-CA1XQdj-.js.map
