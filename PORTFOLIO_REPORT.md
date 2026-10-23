# Portfolio report

Last update: 2026-10-23. Static site (HTML, CSS, ES-module JS), no bundler, no runtime dependencies.

## Positioning
Full Stack Software Developer for two audiences: businesses that need software built, and recruiters. The page is organised so both can scan it quickly: what I build (Work, Services) first, proof of experience (Experience, About) next, one place to get in touch (Contact).

## Structure (`index.html`)
1. **Hero:** headline, one-sentence value proposition, two calls to action.
2. **Work:** Rincones, Dollar Tracker, dividimos? and Playa y Sol, each told as *problem → what I built → what makes it interesting*. NutriPlan appears as a one-line mention.
3. **Services:** four things I can build, each pointing to a real project as proof.
4. **Experience and education.**
5. **About / How I work:** background in functional analysis, three working principles (including practical use of AI).
6. **Contact:** one card for project inquiries, one for recruiters (CV picker, LinkedIn, GitHub). The email appears once.

`/links` is a separate one-screen profile page (portfolio, CV, projects, social).

## Design system (`styles.css`)
- Typography: Source Serif 4 for headings, Inter for text, JetBrains Mono for small labels. All self-hosted (`assets/fonts`, latin subset, preloaded).
- Palette: near-black `#090b10`, neutral greys, a single soft blue accent. Solid light primary button, outlined secondary.
- Motion: staggered entrance on the hero, one-time reveal on scroll, small hover transitions. Everything is disabled under `prefers-reduced-motion`.
- Responsive from 320 px; no horizontal overflow at 375 / 768 / 1100 / 1280.

## Code
- `js/` modules (nav, reveal, copy-email, toast, resume-menu, i18n), typed with JSDoc and checked by `tsc` in strict mode.
- EN/ES switch: `js/i18n.js` with translations in `js/i18n/es.js`, keyed by the English text. `npm run validate` fails if a translation no longer matches the page.
- `assets/brand/` holds the 200ok.dev logo set; BE favicon and PWA icons are in `assets/`; `assets/banner.png` is the 1200×630 social image.

## Commands
- `npm install` then `npm run verify` = strict type-check + audit of local links, assets and unused translations.
- `npm run serve` serves the site on http://localhost:4173.

## Lighthouse (local)
| | `/` mobile | `/` desktop | `/links` mobile |
|---|---|---|---|
| Performance | 97 | 100 | 99 |
| Accessibility | 100 | 100 | 100 |
| Best practices | 96 | 96 | 100 |
| SEO | 100 | 100 | 100 |

Best practices on `/` loses points only because `/_vercel/insights/script.js` 404s locally; it exists on Vercel.

## Pending
1. NutriPlan: demo and repository links once public; a screenshot to promote it to a full case.
2. Rincones: repository link if it becomes public.
3. Update the CV titles to match the new positioning.
4. Spanish version as separate URLs (the switch is client-side, so search engines index English).
5. Custom analytics events (CV downloads, project clicks).
