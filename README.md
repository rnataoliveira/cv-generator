# CV Generator

React + Vite CV generator with PT‑BR / EN locales and client-side PDF export. Designed to be hosted on GitHub Pages.

Getting started

1. Install
   npm ci

2. Run dev server
   npm run dev

3. Build
   npm run build

4. Deploy
   Push to `main` (workflow deploys `dist/` to `gh-pages` branch)

Notes
- `vite.config.ts` sets `base` to `/cv-generator/` — change if your repo name differs.
- PDFs are generated client-side using `html2pdf.js`.
