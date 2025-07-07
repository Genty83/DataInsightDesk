# Folder Structure

This document explains the overall structure of the **DataInsightDesk** project, with a focus on its modular layout and scalable architecture. The goal is to keep features encapsulated, shared logic centralized, and the UI shell independently composable.

---

## Root-Level Folders

### `/backend/`
> *(Planned)* Placeholder for backend logic (e.g. FastAPI services or Python scripts). Currently unused during early frontend-focused development.

---

### `/core/` – Application Shell & Shared Logic

The `core/` directory contains the **layout framework**, **routing system**, and shared utilities used across all apps.

#### 🔹 `layout/`
Defines the core visual shell of the app (sidebar, header, ribbon, footer, content panel, etc). Each layout section has its own local state and logic.

- core/
  - layout/
  - content/
    - components/
    - store/
      -store.ts
      - index.tsx
    - explorer/
    - header/
    - footer/
    - ribbon/
    - sidebar/

perl
Copy
Edit

> Each layout section follows a consistent internal structure:
> - `components/`: UI building blocks
> - `store/`: Local Zustand store for layout-specific UI state
> - `index.tsx`: Entrypoint React component for that section

#### 🔹 `routing/`
Routing system utilities for dynamic app loading, menu rendering, and breadcrumb generation.

- routing/
  - routeManager.ts # Registers and resolves app routes
  - RouteWrapper.tsx # Wraps app routes with layout/context
  - MenuBuilder.tsx # Builds AntD menus from app configs
  - TreeBuilder.tsx # Builds hierarchical tree menus
  - BreadcrumbBuilder.tsx # Auto-generates breadcrumbs

yaml
Copy
Edit

#### 🔹 `hooks/` & `utils/`
- `hooks/`: Reusable React hooks
- `utils/`: Pure functions (e.g. date formatting, deep merge, etc.)

#### 🔹 `meta/`
- `app.meta.ts`: Metadata registry for apps, possibly built dynamically from `app.config.tsx` files.

---

### `/docs/` – Project Documentation

Contains markdown files for internal documentation.

- docs/
  - folder-structure.md # (You are here)
  - README.md # Docs index or landing page

yaml
Copy
Edit

---

### `/.github/`

GitHub-specific configuration (e.g. workflows, issue templates).

- .github/
  - workflows/
  - ci.yml # Continuous Integration (e.g., linting, builds)

yaml
Copy
Edit

---

## App Layer

### `/src/apps/`

All user-facing apps (modular features) are located here.

- src/
  - apps/
  - home/
  - pages/ # Route components
  - app.config.tsx # App metadata (name, route, icon)
  - index.tsx # Entrypoint to the app (optional wrapper)

yaml
Copy
Edit

> Each app can define its own `pages/`, internal components, and config. The shell dynamically mounts these using the route manager.

---

### `/src/` – Entrypoint

Contains the main React entrypoint and global app scaffolding.

- src/
  - App.tsx # Root shell (layout + router)
  - main.tsx # ReactDOM entrypoint
  - styles.css # Global styles (can be removed in favor of styled-components)
  - vite-env.d.ts # Vite-specific types

markdown
Copy
Edit

---

## 📦 Project & Build Files

- `vite.config.ts` – Vite bundler config (plugins, aliases, themes, etc.)
- `tsconfig*.json` – TypeScript configurations
- `eslint.config.js` – Linting rules
- `.gitignore` – Files to ignore in version control
- `pnpm-lock.yaml` – Dependency lock file
- `pnpm-workspace.yaml` – Declares the monorepo structure
- `LICENSE` – Project license (e.g. MIT)
- `README.md` – Project overview for GitHub

---

## ✅ Conventions

- Layout sections are composable and independently stateful
- Zustand stores are colocated near usage, not in a global `store/`
- Apps are modular and pluggable into the shell via `app.config.tsx`
- Routing is dynamically constructed via `routeManager.ts` using app configs
- Shared logic is in `core/`, never in `app/` or `layout/` unless truly global

---

## 🔄 Future Considerations

- Add `/backend/` logic once the API layer begins
- Possibly extract a `shared/components/` layer if many layout components become reusable across apps
- Add `tests/` folder for component and integration tests

---

