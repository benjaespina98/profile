# Portfolio report

Last update: 2026-10-04. Static site (HTML, CSS, ES-module JS), no bundler.
## Current state
- **Sections:** hero (name, role, availability), Selected Projects (3 featured + 3 compact), Experience & Education, About, Contact. `/links` is a separate one-screen profile page. Email, CV picker and profile links live only in Contact.
- **CV picker:** native `<details>` in Contact with the Full Stack Developer CV in Spanish and English (`cv/`). A missing file shows as "Soon" instead of a dead link. The old `assets/Resume_*.pdf` files remain so old links keep working.
- **NutriPlan:** listed without demo or repo links for now.
- **JS:** `js/` modules (nav, reveal, copy-email, toast, resume-menu, spotlight, i18n), typed with JSDoc and checked by `tsc` in strict mode. EN/ES switch in `js/i18n.js` with translations in `js/i18n/es.js`.
- **Brand:** `assets/brand/` holds the 200ok.dev logo set; the BE favicon/PWA icons are in `assets/`.
- **SEO:** title, description, Open Graph, Twitter cards, favicon set, manifest, JSON-LD (`WebSite` + `Person`), sitemap.

## Commands
- `npm install` then `npm run verify` = strict type-check (`npm run check`) + audit of local links, assets and unused translations (`npm run validate`).
- `npm run serve` serves the site on http://localhost:4173.

## Lighthouse (local, Sep 2026)
| | Mobile | Desktop |
|---|---|---|
| Performance | 93-97 (varies per run) | 99 |
| Accessibility | 100 | 100 |
| Best practices | 96 | 96 |
| SEO | 100 | 100 |

Best practices loses points only because `/_vercel/insights/script.js` 404s locally; it exists on Vercel.

## Pending
1. Project screenshots for NutriPlan and Presupuestador (both use a data panel instead of an image).
2. Links for NutriPlan (demo / repo) once public.
3. Spanish version of the site (needs distinct URLs; ~1 day with a small generator script).
4. Self-host the Inter font.
5. Custom analytics events (CV downloads, project clicks).
