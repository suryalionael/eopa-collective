# ARCHITECTURE.md — Technical Reality (as inspected)

This documents what actually exists in this working directory, as of inspection. **It does not propose or select a technical stack** — that is an open decision, flagged clearly below.

## Summary finding

**There is no website application in this project.** The working directory (`/Users/lionaelsmac/Documents/Eastern Ontario Performance Artists Collective Website/`) contains only:
- design/content/asset source material (`Website Design/`, `Content/`, `Pictures/`, `Logo/`)
- (as of this phase) a `docs/` folder and root `CLAUDE.md` created by this documentation task
- a `.claude/agents/` folder (created by this task, see below)

There is **no framework, no package manager file (`package.json`, etc.), no build system, no source directory, no routing, no components, no CSS architecture, no test suite, and no deployment configuration.** `git status` confirms this is **not a git repository**.

## What exists, in detail

### `Website Design/Eastern Ontario Performance Artists/` (Design Source A)
A **Design Canvas** project — a proprietary preview/mockup format (`.dc.html` files loaded via a `<x-dc>` custom element and `support.js`/`image-slot.js` runtime scripts, with a companion `_ds/` design-token bundle). This is **not a deployable web framework**; it's an authoring/preview tool output. Concretely:
- 9 page mockups + `Header.dc.html` + `Footer.dc.html`, wired together via a `<dc-import>` custom element and plain `<a href="X.dc.html">` links — i.e., simple multi-page navigation with no client-side router.
- Styling is plain inline `style=""` attributes plus CSS custom properties from `_ds/.../tokens/*.css` — no CSS framework, no CSS-in-JS, no build step.
- `support.js` (69KB) and `image-slot.js` (65KB) are the Design Canvas runtime/preview scaffolding, not application logic — not inspected line-by-line, as they are tooling internals, not project-specific code.
- `uploads/EO-Performance-Artists-Collective-Website-Copy.docx` and `_tmp_document.xml`/`_tmp_copy.txt` are intermediate artifacts from ingesting the Content docx/PDF into the design tool (the `.xml` is the raw Word `document.xml`; the `.txt` is a plain-text extraction) — confirmed to match the Content PDF's copy, not an independent or conflicting source.

### `Website Design/stitch_eopa_editorial_design_system/` (Design Source B)
A single static HTML file (`code.html`) using the **Tailwind CDN** (`<script src="https://cdn.tailwindcss.com">`) with an inline `tailwind.config` — not a build pipeline, just a CDN script tag with runtime JIT compilation. Google Fonts loaded via `<link>`. No JavaScript framework, no components, no routing (single page, anchor links only). `screen.png` is a rendered screenshot; `DESIGN.md` is a written brief with a YAML frontmatter token block.

### `Content/`
One PDF file. No CMS, no structured data format (no JSON/YAML/Markdown content files) — copy exists only as PDF prose.

### `Pictures/` and `Logo/`
Flat directories of image files (JPEG/PNG) — no asset pipeline, no optimization, no CDN references, no alt-text metadata, no organization by page/category beyond filename.

## Framework / language / package manager / build system / tests / deployment

**All UNKNOWN — none exist yet.** No `package.json`, `requirements.txt`, `Gemfile`, `composer.json`, or any other manifest was found anywhere in the project tree. No `.github/workflows`, `netlify.toml`, `vercel.json`, or other deployment config. No test files or test runner configuration.

## Git status

Not a git repository (`git status` → "Not a git repository"). No commit history exists to review.

## Implication for future work

Per the project's own non-negotiable ("Technical architecture: the existing application unless a justified change is explicitly approved") — **there is no existing application to preserve.** This means the first real technical decision in Phase 1 of `docs/IMPLEMENTATION.md` is choosing a framework/stack, which this documentation phase deliberately does **not** decide — it requires an explicit choice from the user (or a justified recommendation reviewed and approved by the user) before any implementation work begins. Candidates are not proposed here to avoid presenting an undiscussed decision as settled fact.
