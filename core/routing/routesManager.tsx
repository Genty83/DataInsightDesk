// core/routing/RouteManager.ts
import type { RouteMeta } from "../meta/types";

const routeModules = import.meta.glob("../../src/apps/**/app.config.tsx");

/**
 * High-level orchestrator for modular route discovery, sorting, validation, and querying.
 * Built for SOLID architecture across a modular Electron + React desktop shell.
 */
export class RouteManager {
  private routes: Record<string, RouteMeta[]> = {};
  private loaded = false;

  /**
   * Lazy-loads all app route configs and caches result.
   */
  async load(): Promise<void> {
    if (this.loaded) return;

    for (const [filePath, importFn] of Object.entries(routeModules)) {
      try {
        const mod = await importFn();
        const routeList = (mod as { default: RouteMeta[] }).default;

        const appId = this.extractAppId(filePath);
        this.routes[appId] = this.sortRoutes(routeList);
      } catch (error) {
        console.warn(`Failed to load routes from ${filePath}:`, error);
      }
    }

    this.loaded = true;
  }

  /**
   * Extracts app folder name from config file path.
   */
  private extractAppId(filePath: string): string {
    const parts = filePath.split("/");
    return parts[parts.indexOf("apps") + 1];
  }

  /**
   * Orders routes based on `order` property.
   */
  private sortRoutes(routes: RouteMeta[]): RouteMeta[] {
    return [...routes].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  /**
   * Returns routes grouped by app ID.
   */
  async getAll(): Promise<Record<string, RouteMeta[]>> {
    await this.load();
    return this.routes;
  }

  /**
   * Returns a flat list of all routes across apps.
   */
  async getFlattened(): Promise<RouteMeta[]> {
    await this.load();
    return Object.values(this.routes).flat();
  }

  /**
   * Returns routes for a specific mini app.
   */
  async getApp(appId: string): Promise<RouteMeta[]> {
    await this.load();
    return this.routes[appId] ?? [];
  }

  /**
   * Validates route integrity, returning warnings or errors.
   */
  async validate(): Promise<string[]> {
  await this.load();
  const errors: string[] = [];
  const seenIds = new Set<string>();

  const allRoutes: RouteMeta[] = Object.values(this.routes).flat();

  for (const route of allRoutes) {
    const { routeId, type } = route;

    if (seenIds.has(routeId)) {
      errors.push(`Duplicate routeId "${routeId}"`);
    } else {
      seenIds.add(routeId);
    }

    if (type === "redirect" && !("redirectTo" in route)) {
      errors.push(`Redirect "${routeId}" missing redirectTo`);
    }

    if (type === "external" && "children" in route) {
      errors.push(`External route "${routeId}" should not define children`);
    }
  }

  return errors;
}

  // Ideal for future:
  // - getBreadcrumbTrail(path: string)
  // - applyGuards(route: RouteMeta): JSX.Element
  // - registerPluginRoutes(name: string, routes: RouteMeta[])
  // - dumpRouteTree(): RouteMeta[][] with nesting
}