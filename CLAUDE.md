# CLAUDE.md — Eastern Ontario Performance Artists Collective (EOPA) Website

This file is the permanent instruction set for all future Claude Code sessions working in this project. It was established after a full documentation/reconciliation phase (Phase 0) — see `docs/` for the detailed findings this file summarizes.

## Source of truth

- **Content (all website copy):** `Content/EO-Performance-Artists-Collective-Website-Copy.pdf` — see `docs/CONTENT.md` for the page-by-page map. Never rewrite, shorten, "improve," or invent copy from this source.
- **Photography / visual assets:** `Pictures/` and `Logo/` — see `docs/ASSETS.md`. Note: the supplied photography contains **no performance, portrait, rehearsal, or backstage imagery** — only rural/regional landscape photography. Do not paper over that gap with stock or AI-generated "artist" photos.
- **Design system:** `docs/DESIGN.md` — the reconciled system, built from two conflicting design sources (`Website Design/Eastern Ontario Performance Artists/` and `Website Design/stitch_eopa_editorial_design_system/`). Neither source file is authoritative on its own from this point forward; `docs/DESIGN.md` is binding.
- **Technical architecture:** a Next.js (App Router, TypeScript) static export, deployed to Bluehost shared hosting — see `docs/ARCHITECTURE.md` and `docs/DEPLOYMENT.md`. Reuse this architecture; don't introduce a new framework, dependency, or server-side capability without an explicit, approved reason.

## Non-negotiables

- Inspect before modifying. Never assume a file's contents from its name or directory.
- Never hallucinate. Never invent content, organizational facts, people, or events.
- Never rewrite supplied copy unless explicitly instructed.
- Never introduce colors or fonts beyond what `docs/DESIGN.md` documents.
- Use the supplied photography whenever genuinely appropriate to its actual subject matter (regional/rural atmosphere) — never mislabel it as performance or portrait photography, and never substitute stock/AI-generated imagery of "artists" in its place.
- Do not replace assets without a documented reason.
- Preserve SAMPLE / [Placeholder] framing exactly, wherever it appears in the content or design mockups, until real information replaces it.
- Avoid generic AI-generated UI patterns (see the anti-pattern list in `docs/DESIGN.md` §8 and `docs/QA.md`).
- Avoid unnecessary dependencies and unnecessary refactoring.
- Do not redesign unrelated functionality.
- Test before declaring completion. Verify visual output rather than trusting code alone.
- When Design Source A and Design Source B (or their prose and their coded output) disagree, follow the resolution already recorded in `docs/DESIGN.md` — do not re-litigate or re-resolve conflicts ad hoc.

## Design principles

The site must read as: **expressive, artistic, warm, human, contemporary, confident, and restrained** — a contemporary Canadian arts collective, not a generic nonprofit template, not a SaaS landing page, not an empty minimalist site, not an AI-generated card grid, not an overly theatrical spectacle.

A restrained palette (four core colors) is not an excuse for a bland result, and "creative" is not an excuse for visual noise. Build richness through composition, typography, image placement, scale, spacing, asymmetry, rhythm, and restrained interaction — not through decorative gimmicks, fake editorial metadata, or unnecessary motion.

## Agent workflow

Three specialized agents exist for this project (`.claude/agents/`):

1. **`design-resource-auditor`** — analytical only. Checks implementation against `docs/DESIGN.md`/`docs/CONTENT.md`/`docs/ASSETS.md`; flags violations, mismatches, and unsupported assumptions. Does not redesign, rewrite, or invent.
2. **`implementation-engineer`** — implements approved scope only, following `CLAUDE.md` + all of `docs/`. Does not reinterpret art direction arbitrarily.
3. **`visual-qa-reviewer`** — inspects rendered output against `docs/DESIGN.md`/`docs/QA.md`. Reports problems before proposing broad changes; does not redesign unilaterally.

Workflow: **Resource audit → Documentation (done) → Design reconciliation (done) → Implementation → Visual QA → Fix → Retest.** All agents defer to `CLAUDE.md` and everything under `docs/`; none may create a competing design system or content source.

## Current status

A working implementation of all 10 required pages plus 4 policy pages exists (Next.js static export — `npm run build` produces a deployable `/out`). See `docs/IMPLEMENTATION.md` for phase-by-phase status and `docs/QA.md`'s verification log for what has and hasn't been tested. Real work still open: sourcing real performance/portrait photography, confirming placeholder contact/team/event details, and a confirmed production domain — none of these should be invented; see `docs/LEGAL_RISK_REGISTER.md`.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server
npm run build     # production static export -> /out
npm run typecheck # tsc --noEmit
npm run lint      # next lint
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
