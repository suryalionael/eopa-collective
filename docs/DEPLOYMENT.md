# DEPLOYMENT.md — GitHub Pages (Production)

**This document was previously wrong and caused a real production
incident — read the incident note in §4 before changing anything here.**

The site is a Next.js static export. `next build` produces a plain `/out`
directory of HTML, CSS, JS, and image files — no Node.js server, no
Next.js runtime, no Vercel-specific feature. See `docs/ARCHITECTURE.md`.

**Production is GitHub Pages, serving a custom domain:**

```text
Next.js source
      ↓
git push to main
      ↓
GitHub Actions (.github/workflows/deploy-pages.yml)
      ↓
npm ci → typecheck → lint → next build → out/
      ↓
GitHub Pages
      ↓
https://eoperformancecollective.ca/  (custom domain, DNS at GoDaddy)
```

There is no separate Bluehost deployment for this domain. An earlier
version of this document described a Bluehost + "GitHub-Pages-for-review"
split; that was true right up until a custom domain was attached to this
repository's GitHub Pages site, which is when it stopped being true and
this document should have been updated but wasn't. See §4.

## 1. How a deployment happens

Every push to `main` triggers the workflow automatically. To trigger one
without a new commit: repository → **Actions** tab → "Deploy to GitHub
Pages (production)" → **Run workflow**.

The workflow: checks out the repo, installs dependencies (`npm ci`),
type-checks, lints, runs `next build`, **fails the build if any
`/eopa-collective`-prefixed asset path is found anywhere in the output**
(a guard added after the incident in §4 — see the workflow file), then
publishes `/out` via GitHub's own Pages deployment mechanism
(`actions/deploy-pages`) — no third-party host, no Vercel, no Netlify, no
Cloudflare involved anywhere in this pipeline.

## 2. Local build (for verification before pushing)

```bash
npm install
npm run build
npx serve out   # throwaway local static server, not part of the deployed site
```

Before trusting a build, search the **entire** output, not just
`index.html`:

```bash
grep -RIl "/eopa-collective/" out/   # must print nothing
```

## 3. Custom domain / DNS / HTTPS

- **Domain:** `eoperformancecollective.ca`, registered/managed at GoDaddy.
- **DNS:** the apex domain's `A` records point at GitHub Pages' four
  anycast IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`);
  `www` is a `CNAME` to `suryalionael.github.io`. This is standard GitHub
  Pages custom-domain DNS — configured at GoDaddy, not in this repo.
- **GitHub-side config:** the repository's Pages settings have
  `cname: eoperformancecollective.ca` set (confirmed via
  `gh api repos/suryalionael/eopa-collective/pages`). `public/CNAME`
  (containing the domain, copied into every build's `/out`) exists
  alongside this as GitHub's recommended safeguard so the custom domain
  survives across Actions-based deployments.
- **HTTPS:** a certificate is issued and approved by GitHub for both
  `eoperformancecollective.ca` and `www.eoperformancecollective.ca`.
  HTTPS enforcement is **on** (`https_enforced: true` — enabled via
  `gh api repos/suryalionael/eopa-collective/pages -X PUT -F https_enforced=true`
  after finding it was off by default; verified `http://` now 301s to
  `https://`).
- **`siteConfig.url`** in `lib/site.ts` is set to
  `https://eoperformancecollective.ca` — this feeds `metadataBase`,
  OpenGraph tags, `sitemap.xml`, and `robots.txt`.
- Note this domain does **not** match the placeholder contact-email
  domain (`eopacollective.ca`, no "performance") used elsewhere in the
  source content — see `docs/CONTENT.md`'s email-inconsistency note.
  That mismatch comes from the client's own supplied material, not from
  this codebase or its deployment; don't silently "fix" it by changing
  one to match the other.

## 4. The incident this document exists to prevent a repeat of

Two things went wrong in sequence, both from the same wrong assumption
(that this domain was hosted on Bluehost, not GitHub Pages):

1. A build made with a `GITHUB_PAGES=true` flag (which set
   `basePath: "/eopa-collective"`, intended for viewing the site at
   `https://suryalionael.github.io/eopa-collective/`) was deployed to
   this repository's GitHub Pages site *after* a custom domain had
   already been attached to it. Once a custom domain is attached, GitHub
   Pages serves the site at the **domain root** and 301-redirects the
   default project URL to it (both verified directly against the live
   site) — so a basePath-prefixed build is never correct for this
   repository, full stop. Every CSS/JS/font/image request 404'd on the
   custom domain; the page still rendered (semantic HTML degrades
   gracefully) but completely unstyled, imageless, and without working
   navigation JS.
2. This document, at the time, told the reader to fix the equivalent
   problem by re-uploading a plain build "to Bluehost" — Bluehost was
   never actually involved. That instruction was based on stale project
   documentation that hadn't been re-verified against how this specific
   domain was actually being served, and it sent whoever read it down
   the wrong path entirely.

**The fix:** `next.config.ts` no longer has any basePath/`GITHUB_PAGES`
conditional — the build is unconditionally root-relative, which is the
only correct output now that a custom domain is attached. `lib/basePath.ts`
was deleted; `components/Header.tsx`/`components/Media.tsx` reverted to
plain `/images/...` paths. The workflow (`.github/workflows/deploy-pages.yml`)
no longer sets `GITHUB_PAGES=true` and now fails the build outright if a
stray `/eopa-collective/` path is ever found in the output again.

**Before ever reintroducing a basePath, subpath, or multi-target build
strategy for this repository:** re-run
`gh api repos/suryalionael/eopa-collective/pages` and confirm whether
`cname` is still set. If it is, a basePath build is wrong, full stop —
this is not a judgment call, it's what the live configuration and the
live HTTP response (a 301 from the project URL to the custom domain root)
both directly show.

## 5. Verifying a deployment actually worked

Green Actions runs are necessary but not sufficient — verify the live
site directly:

```bash
curl -sI https://eoperformancecollective.ca/          # expect HTTP/2 200
curl -sL https://eoperformancecollective.ca/ | grep -o 'href="/_next/static/chunks/[a-zA-Z0-9_.-]*\.css"'
# then curl -I that exact path and confirm it 200s too — don't just check index.html
```

`gh api repos/suryalionael/eopa-collective/pages --jq .html_url` gives the
live URL directly rather than assuming it.

## 6. Updating the live site

There is no CMS and no server:
1. Edit the source (page content traceable to `docs/CONTENT.md`, styling
   traceable to `docs/DESIGN.md`).
2. Commit and push to `main`.
3. GitHub Actions builds and deploys automatically — no manual upload
   step exists or is needed.

## What this deployment does not include

No database, no server-rendered pages, no API routes, no
image-optimization service, no analytics, no cookies. See
`docs/LEGAL_RISK_REGISTER.md` for the full account of what the site does
and doesn't do with visitor data. Nothing about the GitHub Pages
deployment changes this — the workflow only builds and publishes static
files; it introduces no tracking, no cookies, and no new third-party data
flow.
