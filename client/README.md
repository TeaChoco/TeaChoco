# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

## Poster images (favorites)

Originals live **outside** `public/` so they are never deployed:

```
assets/posters/anime/anime-1.png
assets/posters/game/game-1.png
assets/posters/image-lqip.json   # generated
```

Add a new poster:

1. Put the original at `assets/posters/<anime|game>/<type>-<n>.png` (`.jpg`/`.jpeg` also work).
   `n` must match the item's generated id — `app/data/favorites/anime.ts` derives it from the array position (`anime-${index + 1}`), so **append new items at the end** of the array. Inserting in the middle shifts every id and mismatches all posters.
2. Run `pnpm images` (sharp). It writes one folder per poster — `public/images/<type>/<id>/300.avif|600.avif|300.webp|600.webp` — and regenerates `app/data/favorites/image-lqip.ts`. Partial run: `ONLY=anime-140 pnpm images`.
3. Commit the variants, the manifest and the data change. `MediaPicture` serves AVIF first with a WebP fallback and an inline blurred placeholder.

Optional: `pnpm og` regenerates the Open Graph cards in `public/og/` after project data changes.
