# Sanskriti Junction | Professional Activity Portfolio

A high-performance, **Single Page Application (SPA)** engineered with **React 18**, **TypeScript**, and **Vite**. This platform serves as a unified digital viewport for Sanskriti Junction, programmatically rendering a diverse portfolio of corporate, educational, and community-driven initiatives through a modern, accessible interface.

## 🚀 Technical Highlights

- **Data-Driven UI Rendering:** Employs a declarative mapping architecture (as seen in `SchoolPrograms.tsx`) to transform structured JSON arrays into high-fidelity UI. This decouples business logic from presentation, allowing for rapid content scaling.
- **Type-Safe Engineering:** Built with strict **TypeScript** interfaces and **Zod** schema validation to ensure data integrity across the activity catalog and global state.
- **Modern State Management:** Integrated with **@tanstack/react-query** for optimized data handling and **React Router 6** for seamless client-side navigation.
- **Accessible Design System:** Built on **Shadcn UI** and **Radix UI** primitives, ensuring WCAG-compliant accessibility, keyboard navigation, and consistent visual language.
- **Dynamic UX:** Leverages **Tailwind CSS Animate** and **Lucide React** for smooth, performance-optimized transitions and interactive feedback.

## 🛠️ Tech Stack

### Core Architecture
* **Framework:** React 18 (Functional Components, Hooks)
* **Build Tool:** Vite (Ultra-fast HMR and bundling)
* **Language:** TypeScript 5.8
* **Routing:** React Router DOM

### UI & Styling
* **Styling:** Tailwind CSS (Utility-first CSS)
* **Component Library:** Radix UI / Shadcn UI
* **Forms:** React Hook Form + Zod
* **Animations:** tailwindcss-animate + Embla Carousel

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/           # Accessible Radix primitives (Card, Toast, Tooltip)
│   ├── SchoolPrograms.tsx # Mapping logic for educational packages
│   ├── FounderTimeline.tsx# Data-driven career visualization
│   └── ...           # Additional modular activity components
├── pages/
│   ├── Index.tsx     # Unified viewport orchestrating all sections
│   └── NotFound.tsx  # Error boundary and catch-all route
├── App.tsx           # Global Providers (QueryClient, Tooltip, Router)
└── main.tsx          # Application entry point
