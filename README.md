# Eastern Ontario Performance Artists Collective (EOPA) — Website

The website for the Eastern Ontario Performance Artists Collective, a
regional collective supporting theatre, dance, music, opera, circus and
physical arts, spoken word, and performance art across Eastern Ontario. See
[`docs/PROJECT.md`](docs/PROJECT.md) for the full organizational context —
this repository does not invent or assume anything about EOPA beyond what
that document and the source content establish.

## ⚠️ Placeholder / sample content

Large parts of this site's content are explicitly marked **SAMPLE** or
**[Placeholder]** in the source material and in the pages themselves —
most of the Team, Contact, Events Calendar, and How to Join & Pay pages.
None of that should be treated as real, confirmed information. See
[`docs/CONTENT.md`](docs/CONTENT.md) for exactly what is placeholder and
what is confirmed, page by page.

## ⚠️ Legal / privacy caveat

This is **not legal advice**, and nothing in this repository or its
Privacy Policy, Terms, Cookie Policy, or Refund Policy pages should be
read as a certification of legal compliance. See
[`docs/LEGAL_RISK_REGISTER.md`](docs/LEGAL_RISK_REGISTER.md) for the full,
honest account of what data this site does and doesn't collect, what's
still unconfirmed, and what needs human/legal review before this goes
live for real.

## Technology stack

- **Next.js 16** (App Router), **TypeScript**, **React 19**
- Plain CSS (custom properties + CSS Modules) — no CSS framework
- **Static export** (`output: "export"` in `next.config.ts`) — no Node.js
  server, no API routes, no server actions, no database
- Self-hosted fonts (Fraunces, Work Sans) via `next/font/google` — no
  runtime request to Google's font servers
- No analytics, no cookies, no third-party scripts or embeds

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full technical
inventory and reasoning.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build       # production static export -> /out
npm run typecheck    # tsc --noEmit
npm run lint         # eslint .
```

## Deployment

**Production is <https://eoperformancecollective.ca/>**, a custom domain
(DNS at GoDaddy) pointed at this repository's **GitHub Pages** site.
Every push to `main` triggers `.github/workflows/deploy-pages.yml`, which
builds and publishes `/out` automatically — there is no manual upload
step and no separate Bluehost deployment for this domain.

Full details — DNS, HTTPS, the CNAME file, and a real incident write-up
about why the build must stay root-relative (no `basePath`) — are in
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Repository / access

See [`docs/GITHUB.md`](docs/GITHUB.md) for repository ownership, branch
strategy, and access policy.

## Documentation

| File | Contents |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Permanent working rules for this project |
| [`docs/PROJECT.md`](docs/PROJECT.md) | What EOPA is, audience, constraints |
| [`docs/DESIGN.md`](docs/DESIGN.md) | The reconciled design system |
| [`docs/CONTENT.md`](docs/CONTENT.md) | Page-by-page content map and source of truth |
| [`docs/ASSETS.md`](docs/ASSETS.md) | Photography/logo inventory and usage |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Technical architecture as implemented |
| [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) | Build phases and status |
| [`docs/QA.md`](docs/QA.md) | QA checklist and verification log |
| [`docs/LEGAL_RISK_REGISTER.md`](docs/LEGAL_RISK_REGISTER.md) | Privacy/legal risk log — not legal advice |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | GitHub Pages production deployment, DNS, HTTPS |
| [`docs/GITHUB.md`](docs/GITHUB.md) | Repository ownership and access policy |
