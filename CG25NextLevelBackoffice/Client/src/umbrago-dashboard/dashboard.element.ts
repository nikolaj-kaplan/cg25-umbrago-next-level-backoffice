import {
  LitElement,
  css,
  html,
  customElement,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement("umbrago-dashboard")
export class UmbragoDashboardElement extends UmbElementMixin(LitElement) {
  render() {
    return html` <div id="banner"></div>
      <div id="content">
        <h1>Welcome</h1>
        <p>
          Introductory text that invites the editor to be excited about their
          company and its customers.
        </p>

        <div id="links">
          <uui-card-media name="Create promotion article">
            <img
              src="/App_Plugins/CG25NextLevelBackoffice/stocks/weeding.jpg"
            />
          </uui-card-media>
          <uui-card-media name="Create hotel">
            <img src="/App_Plugins/CG25NextLevelBackoffice/stocks/street.jpg" />
          </uui-card-media>
          <uui-card-media name="View Facilities">
            <img src="/App_Plugins/CG25NextLevelBackoffice/stocks/food.jpg" />
          </uui-card-media>
          <uui-card-media name="View Members">
            <img src="/App_Plugins/CG25NextLevelBackoffice/stocks/person.jpg" />
          </uui-card-media>
        </div>
      </div>`;
  }

  static styles = [
    css`
      :host {
        width: 100%;
      }

      #banner {
        background-image: url("/App_Plugins/CG25NextLevelBackoffice/banner.jpg");
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 20vw;
        display: block;
      }

      #content {
        padding: var(--uui-size-layout-1);
      }

      h1 {
        font-family: "Playfair display", "Open Sans", "Helvetica Neue",
          Helvetica, Arial;
        font-weight: 200;
        font-size: 3vw;
        line-height: 1.2;
        margin: 0;
        margin-bottom: -0.5vw;
      }

      #links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--uui-size-layout-1);
        margin-top: var(--uui-size-layout-1);
      }
    `,
  ];
}

export { UmbragoDashboardElement as element };

declare global {
  interface HTMLElementTagNameMap {
    "umbrago-dashboard": UmbragoDashboardElement;
  }
}
