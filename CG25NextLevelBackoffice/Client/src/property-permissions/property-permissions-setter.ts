import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import type { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UMB_CONTENT_WORKSPACE_CONTEXT } from "@umbraco-cms/backoffice/content";
import type { UmbVariantId } from "@umbraco-cms/backoffice/variant";
import { UmbId } from "@umbraco-cms/backoffice/id";
import { UmbPropertyTypeModel } from "@umbraco-cms/backoffice/content-type";

// The Example Workspace Context Controller:
export class CustomPropertyPermissionSetter extends UmbControllerBase {
  //
  #workspaceContext?: typeof UMB_CONTENT_WORKSPACE_CONTEXT.TYPE;

  #permissionUnique: string;
  //#propertyTypeToObserve: UmbPropertyTypeModel;
  #propertyTypeToDisable: UmbPropertyTypeModel;
  #variantId?: UmbVariantId;
  #value?: string;

  constructor(
    host: UmbControllerHost,
    propertyTypeToObserve: UmbPropertyTypeModel,
    propertyTypeToDisable: UmbPropertyTypeModel,
    variantId?: UmbVariantId
  ) {
    super(host);
    //this.#propertyTypeToObserve = propertyTypeToObserve;
    this.#propertyTypeToDisable = propertyTypeToDisable;
    this.#variantId = variantId;
    this.#permissionUnique = UmbId.new();

    this.consumeContext(UMB_CONTENT_WORKSPACE_CONTEXT, async (context) => {
      this.#workspaceContext = context;
      this.observe(
        await context?.propertyValueByAlias<string>(
          propertyTypeToObserve.alias,
          this.#variantId
        ),
        (value) => {
          this.#value = value;
          this.#setPermission();
        }
      );
    });
  }

  #setPermission() {
    if (!this.#propertyTypeToDisable || !this.#workspaceContext) {
      return;
    }

    // Check value for availability:
    const enable = this.#value && this.#value.length > 0;

    // Update validation message:
    if (this.#workspaceContext) {
      if (enable) {
        this.#workspaceContext.propertyWriteGuard.removeRule(
          this.#permissionUnique
        );
      } else {
        // Create a guard rule:
        const rule = {
          unique: this.#permissionUnique,
          permitted: false,
          message:
            "The property is not writable because of my custom restriction.",
          propertyType: {
            unique: this.#propertyTypeToDisable!.unique,
          },
          variantId: this.#variantId,
        };
        // Add the rule to the write guard
        this.#workspaceContext.propertyWriteGuard.addRule(rule);
      }
    }
  }
}

// Declare a api export, so Extension Registry can initialize this class:
export const api = CustomPropertyPermissionSetter;
