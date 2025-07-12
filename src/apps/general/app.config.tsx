import { lazy } from "react";
import type { RouteMeta } from "../../../core/meta/types";
import { HomeOutlined } from "@ant-design/icons";

const SettingsPage = lazy(() => import("./pages/Settings"));

const generalRoutes: RouteMeta[] = [
  {
    type: "page",
    routeId: "settings",
    key: "settings",
    path: "/settings",
    label: "Settings",
    icon: <HomeOutlined  />,
    badgeCount: () => 5,          // Example: notification count
    sidebarPosition: "top",
    authLevel: "public",
    order: 2,
    showInSidebar: true,
    showInTree: true,
    showInBreadcrumb: true,
    component: SettingsPage,
    lazyLoad: true,
    keepAlive: true,
    nestInParent: false,
    meta: {
      analyticsTag: "settings_view",
    },
  },
];

export default generalRoutes;