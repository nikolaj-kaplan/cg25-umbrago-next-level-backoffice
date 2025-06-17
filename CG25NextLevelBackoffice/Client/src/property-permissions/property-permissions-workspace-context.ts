import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase } from "@umbraco-cms/backoffice/class-api";
import type { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UMB_CONTENT_WORKSPACE_CONTEXT } from "@umbraco-cms/backoffice/content";
import { UmbVariantId } from "@umbraco-cms/backoffice/variant";
import { CustomPropertyPermissionSetter } from "./property-permissions-setter";
import { observeMultiple } from "@umbraco-cms/backoffice/observable-api";

// Configuration for which property alias to validate:
const PROPERTY_TO_OBSERVE_ALIAS = "facilities";
const PROPERTY_TO_DISABLE_ALIAS = "hotels";

// The Validation Workspace Context Controller:
export class CustomPropertyPermissionWorkspaceContext extends UmbContextBase {
  #permissionSetters?: Array<CustomPropertyPermissionSetter>;

  constructor(host: UmbControllerHost) {
    super(host, EXAMPLE_CUSTOM_VALIDATION_CONTEXT);

    this.consumeContext(UMB_CONTENT_WORKSPACE_CONTEXT, async (context) => {
      if (!context) {
        this.removeUmbControllerByAlias("observePropertyTypes");
        this.removeUmbControllerByAlias("observeVariantOptions");
        return;
      }

      // Observe the two property types to see if they vary by culture:
      this.observe(
        observeMultiple([
          await context!.structure.propertyStructureByAlias(
            PROPERTY_TO_OBSERVE_ALIAS
          ),
          await context!.structure.propertyStructureByAlias(
            PROPERTY_TO_DISABLE_ALIAS
          ),
        ]),
        ([observePropertyType, readOnlyPropertyType]) => {
          if (!observePropertyType || !readOnlyPropertyType) {
            this.removeUmbControllerByAlias("observeVariantOptions");
            this.#permissionSetters?.forEach((x) => x.destroy());
            return;
          }

          if (observePropertyType.variesByCulture) {
            // Because this property exists in multiple cultures we should observe cultures an create a custom validator for each culture value:
            this.observe(
              context?.variantOptions,
              (variantOptions) => {
                // clean up old validators:
                this.#permissionSetters?.forEach((x) => x.destroy());

                this.#permissionSetters = variantOptions?.map((option) => {
                  return new CustomPropertyPermissionSetter(
                    this,
                    observePropertyType,
                    readOnlyPropertyType,
                    UmbVariantId.Create(option)
                  );
                });
              },
              "observeVariantOptions"
            );
          } else {
            // Not varying by culture, so we can just create a single validator for the invariant value:
            this.#permissionSetters?.forEach((x) => x.destroy());
            this.#permissionSetters = [
              new CustomPropertyPermissionSetter(
                this,
                observePropertyType,
                readOnlyPropertyType
              ),
            ];
          }
        },
        "observePropertyTypes"
      );
    });
  }
}

// Declare a api export, so Extension Registry can initialize this class:
export const api = CustomPropertyPermissionWorkspaceContext;

// Declare a Context Token, to other can request the context and to ensure typings.
export const EXAMPLE_CUSTOM_VALIDATION_CONTEXT =
  new UmbContextToken<CustomPropertyPermissionWorkspaceContext>(
    "UmbWorkspaceContext",
    "example.workspaceContext.propertyPermissions"
  );
