import type { UmbraGoNotCreateWorkspaceViewConditionConfig } from "./types.js";
import type { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import type {
  UmbConditionControllerArguments,
  UmbExtensionCondition,
} from "@umbraco-cms/backoffice/extension-api";
import { UmbConditionBase } from "@umbraco-cms/backoffice/extension-registry";

export class UmbraGoNotCreateWorkspaceViewCondition
  extends UmbConditionBase<UmbraGoNotCreateWorkspaceViewConditionConfig>
  implements UmbExtensionCondition
{
  constructor(
    host: UmbControllerHost,
    args: UmbConditionControllerArguments<UmbraGoNotCreateWorkspaceViewConditionConfig>
  ) {
    super(host, args);

    window.addEventListener("navigationsuccess", this.#onChange);
  }

  #onChange = () => {
    // Notice, this is not pretty. In near future of Umbraco a Context API for Workspace Views will be available which can be observed to know which view is the active.
    // check if "/view/create" is last in the current url:
    const currentUrl = window.location.pathname;
    const isCreateView = currentUrl.endsWith("/view/create");
    this.permitted = !isCreateView;
  };

  destroy(): void {
    super.destroy();
    window.removeEventListener("navigationsuccess", this.#onChange);
  }
}

export { UmbraGoNotCreateWorkspaceViewCondition as api };
