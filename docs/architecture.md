# Architecture Overview

This document describes the high-level architecture of DataInsightDesk, including its modular app structure, runtime behavior, and optional backend integration.

---

## 🧱 Key Architectural Principles

- **Modularity:** Apps are self-contained modules that register routes and config
- **Desktop-first:** Built with Electron, works offline
- **Config-driven:** Routing and layout derived from `app.config.tsx`
- **Optional backend:** Can run fully client-side or pair with a Python backend

---

## 🏗️ High-Level Structure

```
DataInsightDesk/
├── app/ # User-defined apps/modules
│ └── example-app/
│ ├── pages/ # React views
│ └── app.config.tsx # App metadata and routes
├── src/
│ ├── main.tsx # App entry point (Vite + React)
│ ├── layout/ # Layout shell components
│ ├── components/ # Shared UI elements
│ └── router/ # Dynamic route generation
├── electron/ # Electron main process scripts
├── public/ # Static assets
└── docs/ # Documentation
```


---

## 🔄 Runtime Flow

1. **Electron** launches the app shell (`main.js`)
2. **Vite** serves the React frontend
3. **App registry** loads all `app.config.tsx` files from `app/`
4. **Routes** are dynamically generated via React Router
5. **Pages** render inside a global layout
6. *(Optional)* API calls are made to a local FastAPI backend if configured

---

## 🧩 App Module System

Each app is fully encapsulated and includes:

- `app.config.tsx`  
  ```tsx
  export default {
    name: "My App",
    icon: "BarChartOutlined",
    routes: [
      {
        path: "/my-app",
        element: <MyPage />,
        label: "Dashboard"
      }
    ]
  };

