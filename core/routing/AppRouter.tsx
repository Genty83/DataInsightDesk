// core/routing/AppRouter.tsx
import { useRoutes } from "react-router-dom";
import { generateRoutes } from "./routesManager";

export const AppRouter = () => {
  const routes = generateRoutes();
  return useRoutes(routes);
};
