# CLAUDE.md — Eastern Ontario Performance Artists Collective (EOPA) Website

This file is the permanent instruction set for all future Claude Code sessions working in this project. It was established after a full documentation/reconciliation phase (Phase 0) — see `docs/` for the detailed findings this file summarizes.

## Source of truth

- **Content (all website copy):** `Content/EO-Performance-Artists-Collective-Website-Copy.pdf` — see `docs/CONTENT.md` for the page-by-page map. Never rewrite, shorten, "improve," or invent copy from this source.
- **Photography / visual assets:** `Pictures/` and `Logo/` — see `docs/ASSETS.md`. Note: the supplied photography contains **no performance, portrait, rehearsal, or backstage imagery** — only rural/regional landscape photography. Do not paper over that gap with stock or AI-generated "artist" photos.
- **Design system:** `docs/DESIGN.md` — the reconciled system, built from two conflicting design sources (`Website Design/Eastern Ontario Performance Artists/` and `Website Design/stitch_eopa_editorial_design_system/`). Neither source file is authoritative on its own from this point forward; `docs/DESIGN.md` is binding.
- **Technical architecture:** the existing application — **except there currently is no existing application** (see `docs/ARCHITECTURE.md`). A framework/stack decision is an open, unresolved question requiring explicit user approval before Phase 1 implementation begins. Do not assume a stack.

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

As of this writing, **no website implementation exists.** Only source material (design mockups, content PDF, photography, logo files) and this documentation have been produced. Do not begin Phase 1 implementation (per `docs/IMPLEMENTATION.md`) without explicit approval, and not before the open framework/stack decision is resolved.
