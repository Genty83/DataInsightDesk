import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RouteManager } from "./routesManager";
import type { RouteMeta } from "../meta/types";

const routeManager = new RouteManager();

const fadeVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const AppRouter: React.FC = () => {
  const [routes, setRoutes] = useState<RouteMeta[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    routeManager.getFlattened().then((loadedRoutes) => {
      setRoutes(loadedRoutes);
      setIsReady(true); // prevents premature render
    });
  }, []);

  if (!isReady) return null; // or replace with a loading spinner

  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Default redirect from root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {routes.map((route) => {
          if (route.type === "page") {
            const Component = route.component;

            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <motion.div
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    <Component />
                  </motion.div>
                }
              />
            );
          }

          if (route.type === "redirect") {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={<Navigate to={route.redirectTo} replace />}
              />
            );
          }

          return null;
        })}
      </Routes>
    </AnimatePresence>
  );
};