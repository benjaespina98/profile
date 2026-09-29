# Portfolio polish report

Branch: `chore/portfolio-polish-2026-09-24` (no push, no merge).

## Baseline
Static site: no package.json, no lint, no build, no deploy config (`vercel.json`). Nothing to install. No secrets found in code or history (grep for key/secret/token/password).
Lighthouse (mobile, local server, one run each):

| | Before | After |
|---|---|---|
| Performance | 88 | 90 |
| Accessibility | 94 | 96 |
| Best practices | 96 | 96 |
| SEO | 100 | 100 |
| LCP | 2.8 s | 2.7 s |
| CLS | 0.097 | 0 |
| Page weight | 232 KiB | 233 KiB |

## (a) Changes by area
- **Contact**: every Gmail-compose link is now `mailto:` with encoded subject/body (`Let%27s%20connect`, no raw apostrophe). "Copy Email" kept (toast has `role="status" aria-live="polite"`), added a second copy button and the email as visible text in Let's Connect. CV renamed to `assets/Resume_BenjaminEspina.pdf`; the old accented file stays in place so old links keep working.
- **Content**: see before/after below.
- **SEO/a11y**: one meta description shared by description/og/twitter/JSON-LD, `og:image:alt`/`twitter:image:alt`, `<main>` landmark, skip link, `aria-label` on nav, focus-visible on all links/buttons, `decoding="async"` on images, sitemap lastmod. Removed "AI & Automation" from JSON-LD `knowsAbout`.
- **Project cards**: each has capture, name, one-line description, stack, app link, code link when public, and a "fact" line taken from the site's existing text.

## (b) Decisions
- Kept the old CV file as a copy instead of a redirect: there is no deploy config, and a copy works on any static host (cost: 53 KB in the repo).
- Bilingual (priority 3) not implemented, see "Not done".
- No dependencies added.

## (c) Before / after
- Meta description: "...with practical experience integrating AI into real products and a background in Functional Analysis." (og/twitter said "AI & Automation") → "Benjamín Espina, Full Stack Developer (React, Node.js, TypeScript) with a Functional Analyst background. Open to remote roles and freelance projects." (same everywhere)
- Hero: "I build web products end to end, from requirements to a live deploy, with a functional analyst's read on the problem and AI woven into both my workflow and the products I ship." → "I build web products end to end, from requirements to a live deploy. I started in functional analysis, so I begin by understanding the problem before writing code." + new line "Open to 100% remote roles and freelance projects."
- About: previous two paragraphs ("growing emphasis on AI & Automation", "I'm not really in it for the code itself...") → "I studied Information Systems Engineering at UTN Córdoba (thesis approved, final exams in progress). Today I work as a full stack developer with React, Node.js and TypeScript, and I use Claude Code in my daily workflow. I also worked as a Functional Analyst, so requirements and QA are as much part of the job for me as the code." / "I like taking a product from the first conversation about requirements to a live deploy, and checking that it works for the people who use it."
- Rincones: "...Installs like a native app, with real users today." → "...Installs like a native app." (in the fact line, no usage claim).
- dividimos?: added "My close circle uses it regularly."
- Other cards were shortened into description + fact; the facts (260+ tests, five calculators, 30+ years, edge caching...) come from the previous text.
- Rincones alt text: "tu bodega personal de vinos" → "Rincones landing page: a personal wine cellar app".

## (e) Not done
- **Priority 3, ES/EN**: needs distinct URLs; without a build step that means duplicating the ~600-line HTML. Also only one CV exists (English), no Spanish CV to link. Recommended design: `/en/` and `/es/` generated from one template + a JSON dictionary by a small dependency-free Node script; hreflang, `og:locale`, language switcher, root redirect or language landing. Effort: ~1 day. Blocked on the Spanish CV.
- **Screenshots (priority 5)**: the existing WebP captures were kept and not regenerated, and no responsive sizes were made (no image tool in the environment besides ImageMagick `convert`). The Presupuestador capture shows the developer's own account email; consider replacing it with a non-account illustration. Rincones capture needs checking that it is the public landing.
- OG banner left as `banner.png` (77 KB, 1200x630); a JPG/WebP would be lighter but PNG is the safest for crawlers.
- Favicon set is already complete; the manifest icon paths (`/android-chrome-*.png`) point to the root but the files live in `assets/`, so they 404. Fix pending.
- Priorities 6 and 7 as proposals below.

## (f) Pending, by impact
1. Fix manifest icon paths (`assets/...`), 5 min.
2. Spanish version + Spanish CV (above).
3. Regenerate project captures with headless Chrome plus responsive `srcset`; replace the Presupuestador capture.
4. Cookieless analytics (Vercel Web Analytics is already loaded via `/_vercel/insights/script.js`; add custom events for project clicks, "Download Resume" and contact, and `?ref=` tracking). Low effort, medium impact.
5. Deeper accessibility/performance audit (self-host the Inter font, check contrast on muted grays, reduce hero image weight).
6. Add a `vercel.json` if a real redirect from the old CV path is wanted later.
