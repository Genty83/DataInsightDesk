import type { RouteObject } from "react-router-dom";
import type { AppConfig, AppRoutesMeta } from "../meta/types";
import AppShellLayout from "../layout/AppShellLayout";

// 🔧 Eagerly import all app.config.tsx files with proper types
const modules = import.meta.glob("/src/apps/**/app.config.tsx", {
  eager: true,
}) as Record<string, { default: AppConfig }>;

// ✅ Extract AppConfig array safely
const appConfigs: AppConfig[] = Object.values(modules).map(mod => mod.default);

// 🧱 Route builder
function buildRouteTree(route: AppRoutesMeta): RouteObject[] {
  const mainElement = route.element;

  if (route.children && route.nestChildren) {
    return [
      {
        path: route.path,
        element: <AppShellLayout />,
        children: [
          {
            index: !route.path,
            path: route.path || undefined,
            element: mainElement,
          },
          ...route.children.map(child => ({
            path: child.path,
            element: child.element,
          })),
        ],
      },
    ];
  }

  const flatChildren = route.children?.map(child => ({
    path: child.path,
    element: child.element,
  })) ?? [];

  return [
    {
      path: route.path,
      element: <AppShellLayout />,
      children: [
        {
          index: !route.path,
          path: route.path || undefined,
          element: mainElement,
        },
      ],
    },
    ...flatChildren,
  ];
}

// 🚀 Route generator
export const generateRoutes = (): RouteObject[] => {
  const allRoutes: RouteObject[] = [];

  for (const app of appConfigs) {
    for (const route of app.routes) {
      allRoutes.push(...buildRouteTree(route));
    }
  }

  allRoutes.push({
    path: "*",
    element: <div>404 | Page Not Found</div>,
  });

  return allRoutes;
};
