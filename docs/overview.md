# DataInsightDesk Overview

**DataInsightDesk** is a modern desktop-based data exploration and visualization platform, inspired by tools like Qlik Sense, Tableau, and Power BI — but built with the flexibility of modern web technologies and packaged with Electron.

## Purpose

To empower individuals and teams to build powerful, interactive data dashboards in a modular, extensible desktop environment — without relying on proprietary cloud services.

## Key Goals

- ✅ Provide a local-first, offline-capable desktop analytics app
- ✅ Modular architecture: apps are self-contained with their own routes, config, and pages
- ✅ Lightweight and fast thanks to Vite, React, and Electron
- ✅ Open-source and developer-friendly
- ✅ Optional backend for advanced data processing or real-time API integration

## Target Audience

- Data analysts who want a visual and interactive interface to explore data
- Developers who want to build custom analytics tools or plugins
- Organizations needing an internal desktop BI tool with full ownership and no vendor lock-in

## Core Features (Planned)

- **Electron Shell:** A clean, responsive desktop app framework
- **App Modules:** Pluggable mini-apps that live under the `app/` directory
- **Dynamic Routing:** Each app defines its own pages and configuration
- **Component Library:** Built on Ant Design with custom-styled components
- **Theming & Animations:** Styled Components + Framer Motion
- **Optional Backend:** FastAPI server for Python-powered data logic

## Why Not Use Existing BI Tools?

- Most are cloud-based or closed-source
- Limited customization or plugin systems
- Expensive enterprise pricing
- No true “developer-first” UX for building new internal tools

---

> This document will evolve as we refine the architecture and begin development.

