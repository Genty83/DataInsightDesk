// app/home/app.config.tsx
import type { AppConfig } from "../../../core/meta/types";
import { HomeOutlined } from "@ant-design/icons";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

const homeAppConfig: AppConfig = {
  meta: {
    name: "Home",
    description: "Landing page for the platform.",
    version: "1.0.0",
    baseUrl: "/",
  },
  routes: [
    {
      id: "home-root",
      label: "Home",
      path: "",
      icon: <HomeOutlined />,
      element: <HomePage />,
      layout: "main",
      authRequired: false,
      nestChildren: false,
    },
  ],
  sidebar: [
    {
      id: "sidebar-home",
      label: "Home",
      icon: <HomeOutlined />,
      key: "home",
      showInSidebar: true,
      sidebarPosition: "top",
    },
  ],
  tree: [
    {
      id: "tree-home",
      label: "Home",
      icon: <HomeOutlined />,
      key: "home-tree",
      showInTree: true,
    },
  ],
};

export default homeAppConfig;
