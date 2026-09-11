# IMPLEMENTATION.md — Roadmap

This roadmap assumes the reconciled system in `docs/DESIGN.md`, the content map in `docs/CONTENT.md`, and the asset inventory in `docs/ASSETS.md`. It reflects the actual architecture reality documented in `docs/ARCHITECTURE.md`: **no technical foundation exists yet.**

## Phase 0 — Documentation (this phase)
Resource inspection, design reconciliation, content/asset inventory, agent setup. **Complete** as of this session — see the final report for what was produced. No implementation performed.

**Blocking decision before Phase 1 can start:** a technical stack/framework must be chosen and approved. This was intentionally left open by Phase 0 (see `docs/ARCHITECTURE.md`) rather than decided unilaterally. Suggested next step: a short scoping conversation with the user covering hosting target, need for a CMS/editable content (given how placeholder-heavy the content currently is — team bios, contact info, events will likely need real updates soon after launch), and any existing hosting/domain commitments.

## Phase 1 — Design Foundation
- Objective: establish design tokens (colors, type, spacing) as real, implementable code per `docs/DESIGN.md` §1–3, plus global base styles and responsive foundation.
- Expected files: whatever the chosen stack's global stylesheet/token mechanism is (CSS custom properties, Tailwind config, etc.) — mirror the canonical token values in `docs/DESIGN.md`, don't reinvent them.
- Dependencies: Phase 0 sign-off + stack decision.
- Acceptance criteria: all 4 core colors + tonal scale, both type families loaded, full type scale, spacing scale, and the 1080px/60px layout constants are defined and match `docs/DESIGN.md` exactly (no unapproved additions per the non-negotiables in `CLAUDE.md`).
- Testing: visual token audit against `docs/DESIGN.md` — no page implementation yet to test.

## Phase 2 — Global Shell
- Objective: Header (logo + nav + "Become a Member" CTA, active-state styling) and Footer (brand line + partnership line + nav list), per `docs/DESIGN.md` §4, built from Source A's `Header.dc.html`/`Footer.dc.html` structure.
- Expected files: shared layout/header/footer components.
- Dependencies: Phase 1 tokens.
- Acceptance criteria: nav matches the adopted multi-page IA (`docs/DESIGN.md` §6) — Home/About/Team/Contact/Events Calendar + Become a Member in the header; Membership/How to Join & Pay/Partners/Performance Art/Contact in the footer. Responsive nav behavior for mobile is currently **undefined by either source** — flag this as a new decision (neither `.dc.html` nor `code.html` shows a mobile nav pattern; Source A's Home page media query only handles content reflow, not the header itself).
- Testing: nav links resolve to real routes; responsive check at desktop/tablet/mobile.

## Phase 3 — Visual Primitives
- Objective: buttons (primary/secondary/ghost), links, image treatment/placeholder component, layout grid primitives (asymmetric split), motion primitives (fade-up entrance, hover states), per `docs/DESIGN.md` §4–5.
- Dependencies: Phase 1–2.
- Acceptance criteria: no shadows, no hover-lift/scale transforms, no looping animation (explicit rejections in `docs/DESIGN.md` §5); `prefers-reduced-motion` respected.
- Testing: interaction states manually verified; reduced-motion override verified.

## Phase 4 — Home
Build per `docs/CONTENT.md` §1 and `docs/DESIGN.md`. Image slots use the Phase 3 placeholder component (see `docs/ASSETS.md` — no real images currently satisfy Home's caption requirements).

## Phase 5 — About
Per `docs/CONTENT.md` §2. Values/Beliefs/Forms-table sections per Source A's structure.

## Phase 6 — Membership + Get Involved
Per `docs/CONTENT.md` §3–4. **Resolve the flagged structural decision first** (standalone Get Involved page vs. nested section — `docs/DESIGN.md` §6, `docs/CONTENT.md` §3) before building routes/nav for this phase.

## Phase 7 — Team + Contact
Per `docs/CONTENT.md` §5–6. Both pages are majority-placeholder content — implement the SAMPLE-marker visual treatment (dashed border + tag, per Source A) as a reusable pattern here, since it will likely be needed again elsewhere if more placeholder content surfaces.

## Phase 8 — Events + How to Join & Pay
Per `docs/CONTENT.md` §7–8. Both pages are entirely SAMPLE content — same placeholder-treatment requirement as Phase 7. Note the email-address inconsistency flagged in `docs/CONTENT.md` (do not silently resolve it).

## Phase 9 — Partners + Performance Art
Per `docs/CONTENT.md` §9–10. Partners is currently a single short paragraph — flag to the user as thin, but do not pad it with invented copy.

## Phase 10 — Responsive QA
Full pass across desktop / tablet / mobile / narrow mobile per `docs/QA.md`. Particular attention to: Home's hero split and image-cluster grids (Source A defines mobile behavior for these specifically), and the header/nav mobile pattern that Phase 2 had to newly define (since neither source specifies one).

## Phase 11 — Accessibility + Performance
Alt text for all images (none of the source mockups define alt text — this will need to be authored fresh per image), color-contrast check (Ink-700/Ink-500 body text on Paper — verify WCAG AA at the sizes in `docs/DESIGN.md` §2), keyboard nav, focus states (`--focus-ring: var(--plum)` is defined in Source A's tokens but not visibly implemented in any mockup — needs real implementation), image compression (flagging `IMGP9132 copy 2.JPG` at 6.3MB as needing resizing per `docs/ASSETS.md`), reasonable Lighthouse/perf targets appropriate to the chosen stack.

## Phase 12 — Final Visual Audit
Full comparison against `docs/DESIGN.md` and `docs/QA.md`, run by the Visual QA / Reviewer agent (see `CLAUDE.md`). Report problems before proposing broad changes, per that agent's defined scope.

---

## Explicitly out of scope for all phases above (until separately raised)
- Sourcing or commissioning new performance/portrait photography (a real content gap, not a design task — see `docs/ASSETS.md`).
- Confirming real contact details, team bios, or event dates (placeholder content owned by the client/Nel, not invented by implementation).
- Choosing whether "Get Involved" is a standalone page (flagged for decision before Phase 6, not decided here).
- Any CMS/editing-workflow build-out (not requested; flagged only as a Phase-0 observation above).
