import type { LazyExoticComponent, ReactElement } from "react";

/** Defines levels of route access */
export type AuthLevel = "public" | "authenticated" | "admin";

/** Determines where a route appears in the sidebar */
export type SidebarPosition = "top" | "bottom" | "hidden";

/** Categorizes the route type for behavior control */
export type RouteType = "page" | "redirect" | "external";

/** Shared base fields for all route types */
interface CommonRouteMeta {
  routeId: string;                        // Unique identifier used internally
  key: string;                            // React `key`, usually matches `routeId`
  path: string;                           // React Router path (e.g., "/dashboard")
  label: string;                          // Display name shown in sidebar, breadcrumbs, etc.
  icon?: ReactElement;                    // Optional icon shown in sidebar/tree
  badgeCount?: number | (() => number);  // Optional numeric badge (e.g., notifications)

  sidebarPosition: SidebarPosition;      // Controls sidebar placement or visibility
  authLevel?: AuthLevel;                 // Access control: public, authenticated, or admin
  featureFlag?: string;                  // Feature flag key used to conditionally render
  disabled?: boolean;                    // If true, route is shown but not clickable
  order?: number;                        // Controls sort order in sidebar/tree nav
  showInSidebar?: boolean;              // Whether to show in sidebar navigation
  showInTree?: boolean;                  // Whether to show in nested tree navigation
  showInBreadcrumb?: boolean;            // Whether to include in breadcrumbs
  meta?: Record<string, unknown>;        // Freeform metadata for layout, analytics, etc.
}

/** Route that renders a component in the app shell */
export interface PageRouteMeta extends CommonRouteMeta {
  type: "page";                           // Indicates a live route with a component
  component: LazyExoticComponent<() => ReactElement>; // React component to render
  lazyLoad?: boolean;                    // Explicit hint for lazy loading (optional)
  keepAlive?: boolean;                   // If true, component state is preserved in memory
  nestInParent?: boolean;                // Renders within parent route’s <Outlet />
  children?: RouteMeta[];                // Nested sub-routes for tree or layout use
}

/** Route that internally redirects to another */
export interface RedirectRouteMeta extends CommonRouteMeta {
  type: "redirect";                      // Marks this as a client-side redirect
  redirectTo: string;                    // Path to redirect to (e.g., "/dashboard")
}

/** Route that opens an external URL (e.g., docs, support site) */
export interface ExternalRouteMeta extends CommonRouteMeta {
  type: "external";                      // Indicates this opens an external link
  url: string;                           // External URL to open (e.g., "https://docs.app.com")
  openInBrowser?: boolean;              // If true, opens via Electron's shell.openExternal
}

/** Final union of all route types used in the app */
export type RouteMeta =
  | PageRouteMeta
  | RedirectRouteMeta
  | ExternalRouteMeta;
