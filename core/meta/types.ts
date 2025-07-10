import type { ReactNode } from "react";

/**
 * High-level metadata about each app/module.
 */
export interface AppMeta {
  name: string;
  description: string;
  version: string;
  baseUrl: string;
}

/**
 * Basic routing metadata for an app.
 */
export interface AppRoutesMeta {
  id: string;
  label: string;
  path: string;
  icon: ReactNode;
  element?: ReactNode;
  lazy?: boolean;
  authRequired?: boolean;
  featureFlag?: string;
  allowedRoles?: string[];
  layout?: "main" | "auth" | "empty";
  hideFromMenu?: boolean;
  nestChildren?: boolean;
  children?: AppRoutesMeta[];
}



/**
 * Sidebar UI metadata for rendering top/bottom nav items.
 */
export interface SidebarMeta {
  id: string;
  label: string;
  icon: ReactNode;
  key: string;
  showInSidebar: boolean;
  sidebarPosition: "top" | "bottom";
}

/**
 * Tree view UI metadata for hierarchical or explorer-style navigation.
 */
export interface TreeNavigationMeta {
  id: string;
  label: string;
  icon: ReactNode;
  key: string;
  showInTree: boolean;
  parentId?: string; // Optional parent for nesting
  children?: TreeNavigationMeta[]; // Recursive support
}

/**
 * Full config for an app/module.
 */
export interface AppConfig {
  meta: AppMeta;
  routes: AppRoutesMeta[];
  sidebar?: SidebarMeta[];
  tree?: TreeNavigationMeta[];
}
