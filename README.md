# CV Generator

React + Vite CV generator that lets users enter CV data, preview templates, and export PDFs in English and Portuguese (pt-BR). Designed for static hosting on GitHub Pages.

## Features

- Live editor with preview
- Two templates (A / B)
- Locale support: English and Portuguese (pt-BR)
- Client-side PDF export (html2pdf.js)
- Auto-deploy to GitHub Pages via GitHub Actions

## Quick start

Prerequisites: Node.js 18+ and npm

1. Install dependencies

```bash
npm ci
```

2. Start dev server

```bash
npm run dev
```

Open http://localhost:5173

## Badges

[![Build](https://github.com/rnataoliveira/cv-generator/actions/workflows/deploy.yml/badge.svg)](https://github.com/rnataoliveira/cv-generator/actions/workflows/deploy.yml)
[![Release](https://img.shields.io/github/v/release/rnataoliveira/cv-generator)](https://github.com/rnataoliveira/cv-generator/releases)
[![License](https://img.shields.io/github/license/rnataoliveira/cv-generator)](LICENSE)


## Build & Preview

```bash
npm run build
npm run preview
```

## Tests

Unit tests run with Vitest:

```bash
npm test
```

## Deployment (GitHub Pages)

This repo supports two deployment strategies (choose one):

- Publish from `gh-pages` branch (workflow uses `peaceiris/actions-gh-pages`)
- Publish from `main` → `/docs` (workflow copies `dist/` into `docs/` and commits it)

By default the repository contains a workflow that builds and publishes automatically on pushes to `main`.

Notes:
- If publishing from `main/docs`, set the Pages source in GitHub Settings → Pages to `Branch: main` and `Folder: /docs`.
- If publishing to `gh-pages`, ensure the workflow has `contents: write` and `pages: write` permissions.

## Project structure

- `src/` — React source code
- `src/locales` — `en.json` and `pt-br.json`
- `src/components` — templates and UI
- `dist/` — production build output

## Contributing

PRs welcome. Run tests before opening a PR.

## License

MIT

## Releases & versioning

This repository supports semantic releases via Git tags. Create a new annotated tag (for example `v1.0.0`) and push it to trigger the release workflow which will build the project and create a GitHub Release with the production `dist/` attached.

Example:

```bash
# create an annotated tag
git tag -a v1.0.0 -m "Release v1.0.0"
# push tag
git push origin v1.0.0
```

The repository also includes a workflow that runs on pushed tags matching the pattern `v*.*.*` and will create a GitHub release automatically.
