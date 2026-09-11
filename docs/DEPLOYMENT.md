# DEPLOYMENT.md — Bluehost Static Deployment

The site is a Next.js static export. `next build` produces a plain `/out` directory of
HTML, CSS, JS, and image files — no Node.js server, no Next.js runtime, and no
Vercel-specific feature is required to serve it. See `docs/ARCHITECTURE.md`.

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

## What this deployment does not include

No database, no server-rendered pages, no API routes, no image-optimization
service, no analytics, no cookies. See `docs/LEGAL_RISK_REGISTER.md` for the
full account of what the site does and doesn't do with visitor data.
