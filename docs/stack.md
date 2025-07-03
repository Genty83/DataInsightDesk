# Technology Stack

DataInsightDesk is built using modern web technologies combined with a desktop runtime. This document outlines the tools, frameworks, and libraries used across the frontend, backend (optional), and tooling layers.

---

## 🖥️ Frontend

| Tool/Lib            | Purpose |
|---------------------|---------|
| **React**           | Component-based UI |
| **TypeScript**      | Static typing |
| **Vite**            | Fast dev server & build tool |
| **Electron**        | Desktop shell wrapper |
| **React Router**    | Routing between app pages |
| **Ant Design**      | UI component library |
| **Framer Motion**   | Animations & transitions |
| **Styled Components** | Scoped styling with theming support |

---

## 🧩 Modular App System

Each module (or “app”) lives in its own folder under `app/`, and includes:

- A `pages/` directory (React views)
- A `app.config.tsx` file defining:
  - App name
  - Icon
  - Routes
  - Entry point

Apps are registered at runtime to build the full navigation and route tree.

---

## ⚙️ CLI Tooling

| Tool        | Role |
|-------------|------|
| **pnpm**    | Package manager |
| **concurrently** | Run Electron + Vite dev servers |
| **electron-builder** | Create cross-platform app bundles |
| **ts-node / esbuild / zx (TBD)** | Used in future CLI tooling for scaffolding new apps |

---

## 🐍 Backend (Planned / Optional)

While the frontend is standalone, advanced use cases may include a local backend service.

| Stack       | Use |
|-------------|-----|
| **Python**  | Logic & data processing |
| **FastAPI** | REST API backend |
| **SQLite**  | Local persistent storage |
| **Pandas / NumPy** | Data wrangling |
| **IPC or HTTP** | Communication with Electron (TBD) |

---

## 🔧 Dev Environment

- `pnpm` for fast, isolated dependency installs
- `Vite` for local development and builds
- `Electron` in development mode with hot reloading
- Prettier + ESLint (to be configured)

---

> This stack is designed for flexibility and will evolve over time.
