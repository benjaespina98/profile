# Portfolio

Personal portfolio of Benjamín Espina, built with plain HTML, CSS and JavaScript (ES modules), no framework and no bundler. Live at https://benjaminespina.com/.

## Structure
- `index.html`, `styles.css`: page and styles.
- `js/`: small typed modules (JSDoc + `tsc` strict).
- `cv/`: downloadable résumés (Full Stack Developer, ES and EN).
- `assets/`: images, icons, manifest.
- `scripts/validate.mjs`: audits local links and assets.

## Development
```bash
npm install
npm run verify   # type-check + link audit
npm run serve    # http://localhost:4173
```

Deployed on Vercel from `main`. See `PORTFOLIO_REPORT.md` for status and pending work.
