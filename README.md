# TeaChoco Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases my skills as a Full-Stack Developer and Creative Designer, featuring a clean UI, multi-language support, and server-side rendering (SSR) for improved SEO.

## Features

-   **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for lightning-fast performance.
-   **Server-Side Rendering (SSR)**: Implemented for better SEO and initial load performance using Express and customization for GitHub Pages.
-   **Responsive Design**: Mobile-first architecture ensuring a great experience on all devices.
-   **Styling**: Beautiful, fast styling with Tailwind CSS v4, featuring a "Sky Blue & Pink" theme (`se-fah` and `chom-poo`).
-   **Dark/Light Mode**: Fully supported theme toggling.
-   **Internationalization (i18n)**: Support for multiple languages:
    -   Thai (th)
    -   English (en)
    -   Japanese (ja)
    -   Chinese (zh)
-   **Routing**: Client-side routing with React Router v7.

## Tech Stack

-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Package Manager**: [pnpm](https://pnpm.io/)
-   **Framework**: [Vite](https://vitejs.dev/) with React
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Internationalization**: [i18next](https://www.i18next.com/)
-   **Server**: [Express](https://expressjs.com/) (for SSR)

## Getting Started

### Prerequisites

Ensure you have Node.js installed. We recommend using `pnpm` as the package manager.

```bash
npm install -g pnpm
```

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/TeaChoco/TeaChoco-Portfolio.git
    cd TeaChoco-Portfolio
    ```

2.  Install dependencies:
    ```bash
    cd client
    pnpm install
    ```

### Development

To start the development server with HMR:

```bash
pnpm dev
```

### Build & Production

To build the project for production (Client + SSR + Prerendering):

```bash
pnpm build:ssr
```

To preview the production build:

```bash
pnpm preview
```

## Project Structure

```
TeaChoco-Portfolio/
├── client/                 # Client-side application code
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── i18n/          # Internationalization configuration & locales
│   │   ├── pages/          # Page components (Home, About, Blog, Contact)
│   │   ├── router/         # Application routing
│   │   ├── entry-client.tsx # Client entry point
│   │   ├── entry-server.tsx # Server entry point for SSR
│   │   └── ...
│   ├── index.html          # HTML template
│   ├── server.ts           # Express server for dev/SSR
│   ├── prerender.ts        # Script for static pre-rendering
│   ├── vite.config.ts      # Vite configuration
│   └── ...
└── ...
```

## Contact

-   **Name**: TeaChoco
-   **Email**: [teachocodeveloper@gmail.com](mailto:teachocodeveloper@gmail.com)
-   **Role**: Full-Stack Developer & Creative Designer

---

© 2025 TeaChoco. All rights reserved.
