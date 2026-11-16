# ILC ROBOTIX — FTC Team #25145

Official platform for **ILC ROBOTIX**, a FIRST Tech Challenge team from
**Colegiul Național „Ion Luca Caragiale”**, Bucharest, Romania
(program: *Nație Prin Educație / FTC Romania*).

## Stack

- [Next.js](https://nextjs.org) (App Router, `output: 'export'` for GitHub Pages)
- TypeScript, Tailwind CSS
- Framer Motion, Three.js / React Three Fiber
- GitHub Actions → GitHub Pages automated deployment

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static export into ./out
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages.

## Content

Season and match analytics are ingested from official FTC registries
(The Orange Alliance, FTC Events, FTCScout) into `src/data/`.
