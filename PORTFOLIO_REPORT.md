# Portfolio report

Last update: 2026-09-29. Static site (HTML, CSS, ES-module JS), no bundler.

## Current state
- **Sections:** hero with CV picker, Core Expertise, Selected Projects (Rincones, NutriPlan, Presupuestador, Playa y Sol, dividimos?, Dollar Tracker), Experience & Education, AI-Augmented Engineering, Services, About, Contact.
- **CV picker:** native `<details>` with the Full Stack Developer CV in Spanish and English (`cv/CV_Benjamin_Espina_FullStack_ES.pdf` / `_EN.pdf`). A missing file shows as "Soon" instead of a dead link. The old `assets/Resume_*.pdf` files remain so old links keep working.
- **NutriPlan:** listed without demo or repo links for now.
- **JS:** `js/` modules (nav, reveal, copy-email, toast, resume-menu, spotlight), typed with JSDoc and checked by `tsc` in strict mode.
- **SEO:** title, description, Open Graph, Twitter cards, favicon set, manifest, JSON-LD (`WebSite` + `Person`), sitemap.

## Commands
- `npm install` then `npm run verify` = strict type-check (`npm run check`) + local link/asset audit (`npm run validate`).
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
