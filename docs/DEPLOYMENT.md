# DEPLOYMENT.md — Bluehost (Production) + GitHub Pages (Review)

The site is a Next.js static export. `next build` produces a plain `/out` directory of
HTML, CSS, JS, and image files — no Node.js server, no Next.js runtime, and no
Vercel-specific feature is required to serve it. See `docs/ARCHITECTURE.md`.

There are two deployment targets built from this same export, described below:
**Bluehost** (§1–5, the real production destination) and **GitHub Pages** (§6,
a review/staging copy only — see that section for why it needs a different
build flag and is never to be treated as production).

## 1. Build

```bash
npm install
npm run build
```

This produces `/out` at the project root. Verify it locally before uploading:

```bash
npx serve out
```

(`npx serve` is a throwaway static file server for local verification only — it is
not part of the deployed site and is not installed as a project dependency.)

## 2. Upload to Bluehost

Upload the **contents** of `/out` (not the `out` folder itself) to `public_html/` via
Bluehost's File Manager or an SFTP client, so that `index.html` sits directly at
`public_html/index.html`.

Included in `/out` and required for correct behavior:
- `.htaccess` — sets the 404 error document, security headers, and cache
  expiry for static assets (see `public/.htaccess`, which is the source of this
  file — it is copied into `/out` automatically by `next build`). Bluehost's
  Apache stack respects `.htaccess` by default; confirm `mod_headers` and
  `mod_expires` are enabled if the security headers or cache rules don't seem
  to apply (they're optional hardening, not required for the site to function).
- `_next/` — Next.js's built JS/CSS chunks. Do not rename or reorganize this
  folder; the HTML files reference it by this exact path.
- `images/` — the site's photography and logo.
- `404.html` — served for unmatched routes via the `.htaccess` `ErrorDocument`
  rule.

## 3. Trailing slashes

The site is built with `trailingSlash: true` (see `next.config.ts`), so every
route exists as a directory with its own `index.html` (e.g. `/about/index.html`),
and internal links point to `/about/` rather than `/about`. This is the
simplest, most reliable pattern for Apache shared hosting — no rewrite rules
are needed for routing to work.

## 4. Updating the live site

There is no CMS and no server — publishing a content or design change means:
1. Edit the source (page content, `docs/CONTENT.md`-traceable copy, or
   `docs/DESIGN.md`-traceable styling).
2. `npm run build` again.
3. Re-upload the new `/out` contents, overwriting the old ones.

## 5. Domain / HTTPS

Bluehost's own domain and SSL configuration (cPanel / AutoSSL) is unrelated to
this codebase and out of scope here — configure it through Bluehost's hosting
panel. `lib/site.ts`'s `siteConfig.url` should be updated to match the real
production domain once one is confirmed (it currently holds a placeholder
value used only for sitemap/metadata generation — see the code comment there).

## 6. GitHub Pages Review Deployment

**This is a review/staging deployment only — it is not production, and its
URL should never be given out as "the EOPA website."** It exists so a
pushed change can be looked at, on a real URL, before it goes anywhere
near Bluehost.

### How it works

- **Repository:** `eopa-collective`, owned by the project owner's own
  GitHub account. See `docs/GITHUB.md` for ownership/access policy.
- **Workflow:** `.github/workflows/deploy-pages.yml`. On every push to
  `main` (or a manual run via the Actions tab's "Run workflow" button), it
  installs dependencies, typechecks, lints, runs `next build` with
  `GITHUB_PAGES=true`, and publishes the resulting `/out` to GitHub Pages
  using GitHub's own Pages deployment mechanism (`actions/deploy-pages`) —
  no third-party host, no Vercel, no Netlify, no Cloudflare.
- **URL format:** GitHub Pages project sites are served at
  `https://<username>.github.io/eopa-collective/`, not at the domain root.
  Confirm the exact URL from the repository's Settings → Pages screen or
  via `gh api repos/<owner>/eopa-collective/pages --jq .html_url` — never
  guess it.

### Why the build is different for GitHub Pages

Because GitHub Pages serves this repo under a `/eopa-collective/` subpath
rather than the domain root, every internal link and every local image
needs that prefix — but Bluehost is deployed at the domain root and must
**never** have it. Rather than hardcoding the prefix into the app (which
would silently break Bluehost), it's applied only when the workflow sets
`GITHUB_PAGES=true`:

- `next.config.ts` sets `basePath` to `/eopa-collective` only in that case,
  and forwards the same value as `NEXT_PUBLIC_BASE_PATH` so it's available
  in application code too.
- `next/link` and Next's own file-convention metadata (`app/icon.png`,
  `app/apple-icon.png`) pick up `basePath` automatically.
- `next/image` does **not** automatically prefix a plain `src="/images/…"`
  string when `images.unoptimized: true` (confirmed by inspecting the
  built HTML — the logo's `<img src>` was left unprefixed while every
  other asset was correctly prefixed). `lib/basePath.ts` exports the same
  value for `components/Header.tsx` and `components/Media.tsx` to prepend
  manually.
- A local (unset `GITHUB_PAGES`) build is byte-for-byte the same
  root-relative build Bluehost has always received — verified by diffing
  a normal build's output against this behavior before this workflow was
  added.

### `.nojekyll`

GitHub Pages runs Jekyll by default, which ignores any file or folder
starting with an underscore — including Next's own `_next/` asset folder,
which holds every JS/CSS chunk the site needs. `public/.nojekyll` (an
empty file, copied into `/out` by `next build` like everything else in
`public/`) disables Jekyll processing so `_next/` is served intact. Do not
remove this file.

### Triggering a new review deployment

Push to `main`, or open the repository's **Actions** tab → "Deploy review
site to GitHub Pages" → **Run workflow** for a manual run without a new
commit.

### Inspecting a deployment

Repository → **Actions** tab lists every run, its logs, and pass/fail
status for each step (typecheck, lint, build, deploy). Failed steps show
their exact output there — the workflow does not swallow errors.

### Disabling / removing the review deployment

To stop future automatic deployments without deleting anything: disable
or delete `.github/workflows/deploy-pages.yml`, or turn Pages off entirely
under the repository's Settings → Pages → "Build and deployment" → set
Source to "None". The Bluehost production deployment is entirely
unaffected either way — it does not depend on this workflow, this
repository being on GitHub, or GitHub Pages being enabled.

### GitHub Pages vs. Bluehost — do not confuse the two

| | GitHub Pages | Bluehost |
|---|---|---|
| Purpose | Review/staging only | Production |
| URL | `https://<username>.github.io/eopa-collective/` | The real domain, root path |
| Triggered by | Push to `main` (automatic) | Manual build + upload |
| `basePath` | `/eopa-collective` | none (root) |
| Who should see the link | Reviewers only | The public |

## What this deployment does not include

No database, no server-rendered pages, no API routes, no image-optimization
service, no analytics, no cookies. See `docs/LEGAL_RISK_REGISTER.md` for the
full account of what the site does and doesn't do with visitor data. GitHub
Pages, as configured here, does not change any of this — the Actions workflow
only builds and publishes static files; it introduces no tracking, no cookies,
and no new third-party data flow.
