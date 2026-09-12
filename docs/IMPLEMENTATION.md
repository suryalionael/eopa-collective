# IMPLEMENTATION.md — Roadmap & Status

This roadmap follows the reconciled system in `docs/DESIGN.md`, the content
map in `docs/CONTENT.md`, and the asset inventory in `docs/ASSETS.md`.

**Stack decision (resolved):** Next.js 16 (App Router, TypeScript), static
export (`output: "export"`), deployed as plain static files via GitHub
Actions to GitHub Pages, which serves the custom production domain
`https://eoperformancecollective.ca/` (DNS at GoDaddy). This was earlier
(wrongly) documented as a Bluehost deployment — that error caused a real
production outage; see `docs/DEPLOYMENT.md`'s incident section. See
`docs/ARCHITECTURE.md` and `docs/DEPLOYMENT.md`.

## Phase 0 — Documentation ✅ complete
Resource inspection, design reconciliation, content/asset inventory, agent
setup.

## Phase 1 — Design Foundation ✅ complete
Design tokens implemented as CSS custom properties in `app/globals.css`,
matching `docs/DESIGN.md` §1–3 exactly (colors, type scale, spacing scale,
1080px/60px layout constants). Fraunces + Work Sans loaded via
`next/font/google`.

## Phase 2 — Global Shell ✅ complete
`components/Header.tsx` / `Footer.tsx`. Nav matches the adopted multi-page
IA. **Resolved decision:** the mobile nav pattern (undefined by either
design source) is a slide-down disclosure panel behind a hamburger toggle,
built as an accessible client component (`aria-expanded`, `aria-controls`,
keyboard-operable, closes on navigation).

## Phase 3 — Visual Primitives ✅ complete
Buttons, links, placeholder/real-image components (`components/Media.tsx`),
numbered-row/eyebrow/pull-quote primitives (`components/ui.tsx`), asymmetric
responsive grid utilities (`app/globals.css`), one-shot fade-up entrance +
hover micro-interactions. No shadows, no hover-lift/scale, no looping
animation — matches `docs/DESIGN.md` §5's explicit rejections.
`prefers-reduced-motion` respected.

## Phase 4 — Home ✅ complete (`app/page.tsx`)
Image slots: real supplied photography used honestly where it fits
(regional-atmosphere framing, not claimed as performance photography); an
explicit "photography needed" placeholder where no real substitute exists
(the workshop-moment slot). See `docs/ASSETS.md`.

## Phase 5 — About ✅ complete (`app/about/page.tsx`)
Values/Beliefs/performing-arts table built as a real semantic `<table>`.
**Note:** the image originally paired with this section
(`_MG_1795 copy.JPG`, foggy farmstead) was swapped out during visual QA for
`farm-road-dusk.jpg` — the OFA sign visible in the original was judged too
prominent to ship without clearance; see `docs/LEGAL_RISK_REGISTER.md`.

## Phase 6 — Membership + Get Involved ✅ complete
**Structural decision resolved:** "Get Involved" is implemented as its own
route (`app/get-involved/page.tsx`), matching the mandated 10-page list and
the Content PDF's own top-level heading structure, rather than nested inside
Membership as Source A's mockup did. `app/membership/page.tsx` links to it
instead of embedding its copy.

## Phase 7 — Team + Contact ✅ complete
SAMPLE-marker visual treatment (dashed border + tag) implemented as the
reusable `PlaceholderNotice`/inline-SAMPLE-tag pattern, reused again in
Phases 8 and for the Refund Policy's `NEEDS VERIFICATION BEFORE PUBLICATION`
notice. Contact's "Send Us a Message" is a `mailto:` link, not a submitted
form — see `docs/LEGAL_RISK_REGISTER.md`.

## Phase 8 — Events + How to Join & Pay ✅ complete
Event dates use the Content PDF's own bracketed placeholders — the design
mockup's invented concrete date ("Sept 03") was **not** carried over,
per the discrepancy flagged in `docs/CONTENT.md`. The email-address
inconsistency (`info@` vs `payments@eopacollective.ca`) was preserved as-is,
not silently unified.

## Phase 9 — Partners + Performance Art ✅ complete
Partners kept to its real (thin) source content, with one supplied photo
added for visual balance only. Performance Art's closing CTA (which has no
defined destination in any source) was routed to Contact as a pragmatic
"no dead links" decision — documented in the page's code comment, not
silently resolved.

## Phase 10 — Responsive QA ✅ complete
Verified at desktop (1280px) and mobile (390px) viewports via Playwright,
including the hamburger menu open/close/navigate flow. One real bug was
caught and fixed here: the header's "Become a Member" button wasn't hiding
on mobile due to a CSS specificity conflict between a global utility class
and a CSS Module rule — see the code comment in
`components/Header.module.css` and the verification log in `docs/QA.md`.

## Phase 11 — Accessibility + Performance ✅ complete
Semantic landmarks, heading hierarchy, real `<table>` markup, alt text
authored for every real photo (describing what the photo actually shows,
never inventing a performance/person it doesn't depict), visible focus
states (`:focus-visible` outline using `--focus-ring`), skip-to-content
link, `prefers-reduced-motion` support. Images pre-compressed from 13MB to
~1.7MB total before build. No Lighthouse run was performed in this session
(no browser devtools access) — see `docs/QA.md`'s open items.

## Phase 12 — Final Visual Audit ✅ complete for this pass
Screenshots reviewed page-by-page against `docs/DESIGN.md`; findings and
fixes logged in `docs/QA.md`. This is a first-pass audit, not a substitute
for a real design-owner review before public launch.

---

## What's still open (not decided or built here)
- Sourcing or commissioning real performance/portrait photography (a
  content gap, not a design task — see `docs/ASSETS.md`).
- Confirming real contact details, team bios, and event dates (placeholder
  content owned by the client/Nel).
- A real submitted-form/email-delivery service, if `mailto:` links turn out
  to be insufficient (see `docs/LEGAL_RISK_REGISTER.md`).
- A confirmed production domain (`lib/site.ts`'s `siteConfig.url` is a
  placeholder).
- Any CMS/editing workflow (not requested — the placeholder-heavy content
  will need manual code edits + rebuild + reupload to update for now, per
  `docs/DEPLOYMENT.md`).
- A real refund policy from the Collective (`/refunds` explicitly withholds
  inventing one).
