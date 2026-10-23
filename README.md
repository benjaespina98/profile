# Portfolio

Personal portfolio of Benjamín Espina, built with plain HTML, CSS and JavaScript (ES modules), no framework and no bundler. Live at https://benjaminespina.com/.

## Structure
- `index.html`, `styles.css`: page and styles.
- `js/`: small typed modules (JSDoc + `tsc` strict), including the EN/ES switch.
- `cv/`: downloadable résumés (Full Stack Developer, ES and EN).
- `assets/`: images, icons, manifest, self-hosted fonts (`assets/fonts`), 200ok.dev brand files (`assets/brand`).
- `scripts/validate.mjs`: audits local links and assets.

## Development
```bash
npm install
npm run verify   # type-check + link audit
npm run serve    # http://localhost:4173
```

Deployed on Vercel from `main`. See `PORTFOLIO_REPORT.md` for status and pending work.
