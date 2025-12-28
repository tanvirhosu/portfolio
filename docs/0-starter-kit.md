# Astro Starter Kit

Astro's official starter template for building a minimal static site with Astro.

```bash
npm create astro@latest . [-- --template basics]
```

The project structure includes a root layout, a home page, and a small set of assets to get started.

- `public/`: non-code, static assets to be served directly via URL without processing by Astro
- `src/`: project source code
  - `assets/`: processed and optimized assets by Astro to be used in components
  - `components/`: Astro reusable components to be used in pages (with .astro extension)
  - `layouts/`: Astro layout components for consistent site structure (with .astro extension)
    - _Layout.astro_ — main site layout
  - `pages/`: individual pages (with .astro extension)
    - _index.astro_ — home page composition
- [`package.json`](../package.json): project manifest
- [`astro.config.mjs`](../astro.config.mjs): Astro configuration file with ES Modules
- [`tsconfig.json`](../tsconfig.json): TypeScript configuration file

[Astro docs: project Structure](https://docs.astro.build/en/basics/project-structure/)

## Why Astro?

Agnostic framework focused on content-first, performance and static-web development.

- Core: **HTML/CSS-first** + JS only when client needs interaction (zero js by default)
  - By default: build static HTML site (SSG)
  - Client-side interactivity with client directives
- Architecture: based on **island architecture** (JS island) - partial hydration of client components. Selective (island) hydration rather than full-page component hydration.
  - Component-based architecture
    - **components** for small reusable elements of the page
    - **layouts** for consistent site structure
    - **pages** for individual pages
- Routing: file-based pages
- Built system: vite under the hood
- Support multiple languages (logic, content, styling, ...): JS/TS, MD/MDX, ...
- Support multiple UI frameworks like adapters: React, Svelte, Vue, ... (can be mixed)
- ...

## Commands

Run the following from the repository root.

```bash
npm install # install dependencies
npm run dev # start local dev server (default port used by Astro: 4321)
npm run build # build static site to ./dist
npm run preview # preview production build locally
npm run astro -- --help # run Astro CLI commands (e.g., `astro add`, `astro check`)
```
