# QA.md — Quality Assurance Framework

## Design compliance
- [ ] Colors match `docs/DESIGN.md` §1 exactly — the 4 core colors + Source A tonal scale. No unapproved additions (Source B's Material-3 frontmatter palette is explicitly rejected — flag its reappearance as a violation).
- [ ] Logo accent colors (Magenta/Violet/Indigo/Gold/Amber) never appear as a UI background, button, card fill, or headline color — logo mark only.
- [ ] Typography matches `docs/DESIGN.md` §2 — Fraunces 500 for standard headings (italic reserved for pull-quotes only), Work Sans for everything else. "Newsreader" must never appear.
- [ ] Type scale within the approved range (desktop ceiling per Source A + page-specific variants already documented; reject anything approaching Source B's 64–88px hero sizes).
- [ ] Spacing/grid matches `docs/DESIGN.md` §3 — 1080px max-width, 60px margin, 4px-based spacing scale.
- [ ] Buttons/cards/nav/footer match `docs/DESIGN.md` §4 — no drop shadows, no hover-lift/scale transforms.
- [ ] No unauthorized design additions beyond what `docs/DESIGN.md` documents.

## Content
- [ ] Copy matches `docs/CONTENT.md` / the source PDF verbatim — no rewriting, shortening, or "improving."
- [ ] No invented copy anywhere (no fabricated quotes, regional details, event dates/venues, or contact emails — see the Source B rejections in `docs/DESIGN.md` §6 and `docs/CONTENT.md`).
- [ ] No missing required sections per the 10-page map in `docs/CONTENT.md`.
- [ ] SAMPLE / [Placeholder] content remains clearly and visibly marked as such (Team, Contact, Events, How to Join & Pay) — never silently presented as real/confirmed.
- [ ] Links and CTA text match the source exactly (e.g. "Become a Member," "See Upcoming Events," "Ask a Question," "Explore Performance Art at the Collective").
- [ ] The email-address inconsistency (`info@eopacollective.ca` vs `payments@eopacollective.ca`) is preserved as-is, not silently unified, unless the user resolves it.

## Visual quality
- [ ] No AI-slop patterns: no generic card grids used as a default section template, no floating blobs/gradients, no excessive pills/badges, no fake editorial metadata (FIG. 01/02, archive numbers, colophons).
- [ ] No repetitive section templates — each page should carry distinct rhythm per `docs/DESIGN.md`'s editorial-variety precedent (page-specific H1 sizes, varied section grid ratios).
- [ ] No giant full-bleed hero photography by default (explicitly rejected in `docs/DESIGN.md` §7).
- [ ] Photography is meaningful and honest — placeholder image slots are visibly placeholders (not real photos misrepresented as depicting artists/performances); the 7 supplied landscape photos are used only as regional atmosphere, never mislabeled (see `docs/ASSETS.md`).
- [ ] Strong hierarchy, intentional composition, asymmetric section rhythm (5:7/7:5 splits, not 1:1) per `docs/DESIGN.md` §3.
- [ ] Consistent art direction across all pages — traceable back to `docs/DESIGN.md`, not to either source file directly.

## Motion
- [ ] Subtle, purposeful only — one-shot entrance fades and small hover nudges per `docs/DESIGN.md` §5.
- [ ] No infinite/looping animation anywhere (explicitly reject anything like Source B's `animate-pulse`).
- [ ] No distracting loops, no hover scale/lift transforms.
- [ ] `prefers-reduced-motion` respected — all entrance/hover animation disabled under it.

## Responsive
Test at: desktop (≥1080px content width), tablet (~760–1024px), mobile (~375–759px), narrow mobile (≤360px). Pay particular attention to Home's hero-split and image-cluster grids (Source A defines specific mobile reflow for these) and the mobile nav pattern (undefined by either source — see `docs/IMPLEMENTATION.md` Phase 2 flag).

## Technical
- [ ] Build passes (once a stack is chosen — see `docs/ARCHITECTURE.md`).
- [ ] Typecheck/lint pass where applicable to the chosen stack.
- [ ] Tests pass (none exist yet — establish alongside the chosen stack).
- [ ] No broken routes across all 10 (or 11, pending the Get Involved decision) pages.
- [ ] No broken images; every `<img>` has real alt text (none currently exist in any source mockup — must be authored fresh).
- [ ] No console errors.
- [ ] Accessibility: keyboard navigation, visible focus states (`--focus-ring: var(--plum)` per Source A tokens, not yet implemented anywhere), color-contrast check for Ink-700/Ink-500 body text on Paper background.
- [ ] Reasonable performance — flag any image over ~500KB for compression (see `docs/ASSETS.md`, `IMGP9132 copy 2.JPG` at 6.3MB specifically).

## Process
- [ ] Every finding is reported before broad changes are proposed (Visual QA agent scope, per `CLAUDE.md`) — QA does not redesign unilaterally.
- [ ] Any deviation from `docs/DESIGN.md`/`docs/CONTENT.md` discovered during implementation is reported and reconciled back into the docs, not left as silent drift.

---

## Verification log

Results from the implementation pass that built the site described in
`docs/ARCHITECTURE.md`.

**Automated:**
- `npm run build` — succeeds, all 18 content/policy routes + sitemap.xml +
  robots.txt + icon/apple-icon generated as static HTML in `/out`.
- `npm run typecheck` (`tsc --noEmit`) — no errors.
- `npm run lint` (`next lint`) — no issues (after scoping ESLint away from
  the non-application `Website Design/`, `Content/`, `Pictures/`, `Logo/`
  source directories).

**Manual/visual (Playwright, desktop 1280px + mobile 390px viewports,
screenshots reviewed against `docs/DESIGN.md`):**
- All 14 content/policy pages screenshotted at desktop width; Home, About,
  and Contact also captured at mobile width; the mobile hamburger menu was
  opened, a nav link clicked, and the resulting navigation + menu-close
  verified.
- Console/page-error listeners attached for every page load across both
  viewports — **zero console errors or page errors** across all pages
  tested.
- **Bug found and fixed:** the header's "Become a Member" button did not
  hide at mobile width — a CSS specificity tie between the global `.button`
  utility class and the `Header.module.css` `.desktopCta { display: none }`
  rule, resolved by scoping the module rule to `.bar .desktopCta`. See the
  code comment in `components/Header.module.css`.
- **Image swapped during review:** `_MG_1795 copy.JPG` (originally paired
  with the About page) renders with a clearly legible third-party sign in
  frame; swapped for `farm-road-dusk.jpg` rather than shipped with the risk
  merely noted. See `docs/LEGAL_RISK_REGISTER.md`.
- Dev-mode-only artifacts observed (a floating "N" Next.js dev-tools
  indicator badge in full-page screenshots) are confirmed development-only
  and absent from the static production build — not a defect.

**Not done in this session (flag for a follow-up pass):**
- No Lighthouse/performance-profiling run (no browser devtools access in
  this environment).
- No screen-reader (VoiceOver/NVDA) pass — accessibility verification here
  was structural (semantic HTML, focus states, alt text, contrast by design
  token) rather than assistive-technology-tested.
- No test beyond the 1280px/390px viewports checked above — tablet-width
  (~760–1024px) was implemented per the same CSS breakpoints but not
  independently screenshotted.
