<div align="center">

# 🪔  Junction

### A Unified Digital Viewport for Corporate, Educational & Community Initiatives

A high-performance **Single Page Application** engineered with **React 18**, **TypeScript**, and **Vite** — showcasing a diverse portfolio of activities through a data-driven, component-based architecture.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?logo=radixui&logoColor=white)](https://www.radix-ui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#-license)

</div>

---

## ✨ Overview

** Junction** is the digital home for a range of corporate, educational, wellness, and community-driven programs — from school activities and elder care to yoga, music, and cultural events. Instead of hardcoding pages for every program, the app renders its entire content catalog from **structured, type-safe data models**, making it effortless to add or update offerings without touching UI code.

Built for **scalability, accessibility, and speed**, it combines a modern React toolchain with an accessible, Radix-based design system to deliver a polished, consistent experience across devices.

---

## 🚀 Key Features

- 🧩 **Data-Driven UI Rendering** — Program catalogs (`src/data/programs.ts`) are mapped declaratively into rich UI components (`SchoolPrograms`, `AgeCarePrograms`, `ProgramsDetailed`), decoupling content from presentation for rapid scaling.
- 🛡️ **Type-Safe Engineering** — Strict TypeScript interfaces paired with **Zod** schema validation keep the activity catalog and form data reliable end-to-end.
- ⚡ **Modern State & Data Handling** — **TanStack React Query** manages async state, while **React Router 6** drives smooth client-side navigation.
- ♿ **Accessible Design System** — Built on **Radix UI** primitives and **shadcn/ui** patterns for WCAG-friendly components, full keyboard navigation, and a consistent visual language.
- 🎞️ **Dynamic, Polished UX** — Animated transitions via `tailwindcss-animate`, carousels with **Embla**, and iconography from **Lucide React**.
- 📝 **Robust Forms** — **React Hook Form** + **Zod** resolvers for validated, ergonomic form handling (e.g. the Contact section).
- 📖 **Founder Timeline & Storytelling** — A dedicated, data-driven timeline component for narrative/biographical content.
- 📱 **Responsive by Design** — Mobile-aware hooks (`use-mobile`) and a fully responsive layout from hero to footer.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Core Framework** | React 18 (Hooks, Functional Components) |
| **Build Tool** | Vite 5 (SWC-powered HMR & bundling) |
| **Language** | TypeScript 5.8 |
| **Routing** | React Router DOM 6 |
| **Styling** | Tailwind CSS + `tailwindcss-animate` |
| **Component Library** | Radix UI primitives / shadcn/ui patterns |
| **Forms & Validation** | React Hook Form + Zod |
| **Data & State** | TanStack React Query |
| **UI Extras** | Lucide React (icons), Embla Carousel, Recharts, Sonner (toasts), cmdk |
| **Tooling** | ESLint, PostCSS, Autoprefixer |

---

## 📂 Project Structure

```
src/
├── assets/                 # Images used across sections (hero, programs, etc.)
├── components/
│   ├── ui/                 # Accessible Radix/shadcn primitives (Card, Toast, Tooltip, ...)
│   ├── Header.tsx          # Site navigation
│   ├── Hero.tsx             # Landing hero section
│   ├── About.tsx           # About / mission section
│   ├── Programs.tsx        # Programs overview
│   ├── ProgramsDetailed.tsx# Data-driven detailed program views
│   ├── SchoolPrograms.tsx  # Mapping logic for educational packages
│   ├── AgeCarePrograms.tsx # Elder/community care programs
│   ├── FounderTimeline.tsx # Data-driven career/story visualization
│   ├── Mandala.tsx         # Decorative cultural motif component
│   ├── Contact.tsx         # Validated contact form
│   ├── Footer.tsx          # Site footer
│   └── NavLink.tsx         # Reusable nav link component
├── data/
│   └── programs.ts         # Centralized, typed content catalog
├── hooks/                  # Custom hooks (e.g. use-mobile, use-toast)
├── lib/
│   └── utils.ts            # Shared utilities (e.g. class merging)
├── pages/
│   ├── Index.tsx           # Unified viewport orchestrating all sections
│   └── NotFound.tsx        # 404 / catch-all route
├── App.tsx                 # Global providers (QueryClient, Tooltip, Router)
└── main.tsx                # Application entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **bun**, or another compatible package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Nandani-06/Sanskriti-Junction.git
cd Sanskriti-Junction

# Install dependencies
npm install
# or, since a bun.lockb is present:
bun install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Production Build

```bash
npm run build       # Production build
npm run build:dev   # Development-mode build
npm run preview     # Preview the production build locally
```

### Linting

```bash
npm run lint
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `dev` | Starts the Vite development server with HMR |
| `build` | Creates an optimized production build |
| `build:dev` | Creates a build in development mode |
| `preview` | Serves the production build locally |
| `lint` | Runs ESLint across the codebase |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is available under the **MIT License**. See the `LICENSE` file for details (or update this section to reflect your chosen license).

---

<div align="center">

Made with ❤️ for ** Junction**

</div>
