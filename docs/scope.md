# Project Scope

This document outlines what **DataInsightDesk** will include in its initial release (MVP), what’s planned for future versions, and what is explicitly out of scope (for now).

---

## 🧩 Minimum Viable Product (MVP)

The goal of the MVP is to build a functional, modular desktop analytics platform shell with the following capabilities:

### 1. App Shell
- Electron-powered desktop app
- Responsive layout and UI (Ant Design)
- Base theming, styled with Styled Components
- Smooth transitions with Framer Motion

### 2. Modular App Architecture
- `app/` directory holds individual apps/modules
- Each app has:
  - A `pages/` folder with React views
  - A `app.config.tsx` with title, icon, and routes

### 3. Routing
- Dynamic routing based on registered apps
- Uses React Router

### 4. App Scaffolding CLI
- Simple CLI command to scaffold a new app
- Automatically creates `pages/` + `app.config.tsx`

---

## 🚀 Post-MVP Goals

Once the core system is in place, we aim to introduce:

### Dashboard Features
- Drag-and-drop dashboard builder
- Interactive charts and filters
- Save/load dashboard state

### Data Connectors
- CSV import
- REST API queries
- Local SQLite or optional remote DB access

### Plugin System
- Ability to load custom modules or apps
- Dynamic import support

### Python Backend (optional)
- FastAPI service for data processing, ML, or logic
- Electron → HTTP or IPC bridge

### User Settings & Profiles
- Persistent layout preferences
- Saved dashboards per user

---

## ❌ Out of Scope (for now)

- Cloud deployment or hosting
- Multi-user collaboration or real-time sync
- Full database management UI
- Built-in authentication or user permissions

---

> This scope will be refined as feedback and usage patterns emerge.
