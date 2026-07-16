# shyamoverseasfund.github.io

Source for the Shyam Overseas Fund website — a React + TypeScript app built with Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deployment

Pushes to `main` are built and deployed automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repo's
**Settings → Pages**, set the source to **GitHub Actions**.

Client-side routing (React Router) uses the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect
trick (`public/404.html`) so deep links like `/chairman` work on refresh.
