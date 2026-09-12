# ARCHITECTURE.md — Technical Reality (as implemented)

This documents what actually exists in this project, kept in sync with the
implementation. See `docs/DEPLOYMENT.md` for how it ships to production.

## Summary

The site is a **Next.js 16 (App Router) static export**, deployed as plain
HTML/CSS/JS via GitHub Actions to GitHub Pages, which serves the custom
production domain `https://eoperformancecollective.ca/` (DNS at GoDaddy).
There is no server, no database, no CMS, and no API. This was a deliberate
scope decision (see the master implementation instructions and
`docs/LEGAL_RISK_REGISTER.md`), not a limitation worked around.

This was previously documented as a Bluehost deployment — that was wrong
for this domain and caused a real production outage when a GitHub-Pages
subpath build was deployed to it; see `docs/DEPLOYMENT.md`'s incident
section for the full account before changing `next.config.ts` or the
deploy workflow.

## Stack

- **Framework:** Next.js 16.3.4, App Router, TypeScript, React 19.
- **Package manager:** npm (`package-lock.json` committed).
- **Styling:** plain CSS. Global design tokens and base element styles in
  `app/globals.css` (see `docs/DESIGN.md` for what each token means and
  where its value comes from); component-scoped layout CSS via CSS Modules
  (`components/Header.module.css`, `components/Footer.module.css`); one-off
  styling on individual page sections as inline React `style` objects, since
  most page layouts are unique editorial compositions, not a repeated
  template (see `docs/QA.md`'s anti-repetition criteria). No CSS framework
  (no Tailwind, no styled-components) — deliberately, to keep the dependency
  surface minimal for a content-driven site.
- **Fonts:** Fraunces and Work Sans via `next/font/google` in `app/layout.tsx`
  — downloaded once at build time and served from this site's own hosting;
  no runtime request to Google's font servers from a visitor's browser (see
  `docs/LEGAL_RISK_REGISTER.md`).
- **Images:** `next/image` with `images.unoptimized: true` (required for
  static export without a custom remote loader — see `next.config.ts`). All
  7 usable source photographs (`Pictures/`) and the logo (`Logo/`) were
  pre-resized and compressed once with `sips` into `public/images/` before
  build (13MB of source JPEGs → ~1.7MB of web-ready images); no
  image-optimization service or dependency is used at build or runtime.
- **Routing:** Next.js file-based App Router — one `app/<route>/page.tsx`
  per page. No dynamic routes, no middleware, no route handlers other than
  the static `sitemap.ts`/`robots.ts` metadata routes.
- **Build:** `output: "export"` + `trailingSlash: true` in `next.config.ts`
  — `next build` produces a complete static site in `/out`. No image loader,
  no server actions, no cookies/headers/rewrites/redirects are used anywhere
  (all unsupported by static export, and none were needed).

## Directory structure

```text
app/                    — one folder per route (page.tsx + optional metadata)
  layout.tsx            — root HTML shell, fonts, header/footer, metadata
  globals.css           — design tokens + base styles (docs/DESIGN.md)
  sitemap.ts, robots.ts — static metadata routes
  not-found.tsx         — 404 page content
  icon.png, apple-icon.png — favicon/touch-icon (Next file-convention)
components/             — shared UI: Header, Footer, small presentational
                          primitives (ui.tsx), image components (Media.tsx)
lib/site.ts             — shared constants (nav links, contact placeholders)
public/                 — static files copied as-is into /out
  images/               — pre-processed photography + logo
  CNAME                 — GitHub Pages custom-domain file (eoperformancecollective.ca)
  .nojekyll             — disables GitHub Pages' default Jekyll processing,
                          which would otherwise silently drop the /_next/
                          folder (leading underscore)
  .htaccess             — Apache config; harmless leftover from when this
                          was believed to be Bluehost-hosted, ignored by
                          GitHub Pages (not Apache) — see docs/DEPLOYMENT.md
docs/                   — this documentation
Content/, Pictures/, Logo/, Website Design/
                        — original source material, tracked for provenance,
                          not consumed by the build directly (its content
                          was transcribed into app/ pages — see docs/CONTENT.md)
```

## Testing

- **Build:** `npm run build` — must succeed and produce `/out` with all
  routes as static HTML.
- **Typecheck:** `npm run typecheck` (`tsc --noEmit`).
- **Lint:** `npm run lint` (`eslint .`, flat config in `eslint.config.mjs`,
  excluding the `Website Design/`, `Content/`, `Pictures/`, `Logo/` source
  directories which are not application code). Runs `eslint` directly
  rather than through `next lint` — the latter failed deterministically in
  GitHub Actions' Linux runners with an argument-parsing bug
  (`Invalid project directory provided, no such directory: .../lint`,
  matching reports against other Next.js 16 projects), even though it
  worked locally on macOS. Both invocations use the same config and rules.
- **Visual/interaction QA:** no automated test framework is included (a
  content site with no interactive logic beyond a mobile-nav toggle didn't
  justify one — see the "don't over-engineer" instruction). Visual and
  interaction QA is done by running the dev server and driving it with
  Playwright/`chromium-cli` for screenshots and console-error checks — see
  the verification log in `docs/QA.md`.

## Deployment

GitHub Actions (`.github/workflows/deploy-pages.yml`) builds and deploys
automatically on every push to `main`, publishing to GitHub Pages, which
serves the custom production domain `https://eoperformancecollective.ca/`
(DNS at GoDaddy). No manual build-and-upload step exists or is needed.
Full details, including DNS/HTTPS/CNAME specifics and a real incident
write-up, are in `docs/DEPLOYMENT.md`.

## Environment / configuration

No environment variables, no secrets, no `.env` file. `lib/site.ts` holds
the only "configuration" (the placeholder production URL used for
sitemap/metadata generation, and the placeholder contact details — both
explicitly marked as such and traceable to `docs/CONTENT.md`).
