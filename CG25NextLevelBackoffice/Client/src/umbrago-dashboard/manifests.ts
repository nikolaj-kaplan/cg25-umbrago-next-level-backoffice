export const umbraGoDashboardManifest: UmbExtensionManifest = {
  name: "UmbraGo — Welcome Dashboard",
  alias: "umbrago.dashboard.welcome",
  type: "dashboard",
  element: () => import("./dashboard.element.js"),
  weight: 10000,
  meta: {
    label: "Welcome",
    pathname: "welcome",
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Content",
    },
  ],
};
