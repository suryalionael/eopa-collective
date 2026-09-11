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
npm run lint         # next lint
```

## Deployment

This project has **two separate deployment targets** built from the same
source and the same `next build`:

1. **Bluehost (production)** — the real destination. `npm run build`
   produces `/out`, which is uploaded as-is to Bluehost's `public_html/`.
   Deployed at the domain root, no path prefix.
2. **GitHub Pages (review only)** — a staging copy for reviewing changes
   at a real URL before they go anywhere near production, deployed
   automatically by GitHub Actions on every push to `main`. Served under
   `/eopa-collective/` (a GitHub Pages project-site path), which the build
   accounts for via an environment-gated `basePath` — see
   [`next.config.ts`](next.config.ts) and
   [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

**GitHub Pages is not production.** It exists solely so reviewers can see
a change rendered at a URL instead of reading a diff. Full details,
including how to trigger a deployment and the Bluehost upload steps, are
in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

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
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Bluehost + GitHub Pages deployment steps |
| [`docs/GITHUB.md`](docs/GITHUB.md) | Repository ownership and access policy |
