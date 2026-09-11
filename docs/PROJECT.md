# PROJECT.md — Eastern Ontario Performance Artists Collective (EOPA)

## What EOPA is

The Eastern Ontario Performance Artists Collective is a regional arts collective. Per its own mission statement (`Content/EO-Performance-Artists-Collective-Website-Copy.pdf`, p.1–2):

> "To develop a learning network that enhances the arts and cultural experiences within the communities of Eastern Ontario, and to foster strong support for the performing arts in all of its expressions."

The Collective **currently operates as an unincorporated association** — an informal agreement among members, no filing fees, no personal liability protection. The content source states the Collective intends to incorporate as a non-profit once membership grows enough to justify it. This is a young, small, currently-informal organization — not an established institution. Design and copy should not overstate its scale or formality (see `docs/DESIGN.md` §8, anti-patterns).

Disciplines covered (explicitly, per source content): Theatre, Dance, Music, Opera, Circus & Physical Arts, Spoken Word. **Performance Art is treated as its own separate category**, deliberately not folded into "performing arts" — the content source is explicit that this distinction matters to the organization (see `PerformanceArt.dc.html` / PDF p.5: "folding it into 'performing arts' undersells what makes it distinct").

## Purpose of the website

Per the Home page copy: "Growing a learning network for the performing arts across Eastern Ontario. We connect artists, audiences, and organizations across the region — through workshops, a shared events calendar, and hands-on support for building your presence, on and off the stage."

Functionally, the site needs to: recruit and onboard paying members (two membership tiers), publicize an events calendar, explain pay-per-session offerings that don't require membership (workshops, Incubator Idea Clinic), introduce the (currently placeholder) team, and explain the Aspen Training Centre partnership.

## Intended audience

- Regional performing artists (aspiring and established) considering membership.
- Cultural organizations and potential collaborators.
- Members of the public interested in attending events/workshops.
- Aspen Training Centre students/staff (the operational partner).

## Organizational context

- Founding Coordinator: **Nel Coloma-Moya** (the only real, named team member in the current content — see `docs/CONTENT.md`).
- All other team roles (Programs Lead, Membership & Directory, Treasurer) are explicitly marked `[Sample Name]` / `[Placeholder]` in the source content — **do not treat these as real people**.
- Contact details (email, phone, mailing address, social handles) are explicitly marked `[placeholder]` in the source content — none are confirmed real.
- Events calendar listings in the source content are explicitly marked SAMPLE with placeholder dates.

## Partnership context

The Collective operates **in partnership with Aspen Training Centre**, which "provides student support for running the Collective... a practicum-style arrangement that gives students real experience while helping our members get the support they need" (Partners page copy). Membership fees partly fund this training arrangement.

`NEEDS VERIFICATION`: a separate `Aspen Training Centre Website` project directory exists elsewhere on this machine (outside this project's resource scope). This document does not inspect it — the partnership description above is taken solely from EOPA's own supplied content, per the "content is source of truth" rule. Any cross-referencing of Aspen Training Centre's own site/branding would need to be separately authorized and scoped.

## Current project state

**There is no existing website implementation.** This working directory contains design/content/asset source material only — no application code, no package manager files, no git repository (`git status` confirms: "Not a git repository"). See `docs/ARCHITECTURE.md` for the full technical inventory. Concretely, what exists today:

- `Website Design/Eastern Ontario Performance Artists/` — a 9-page Design Canvas mockup (`.dc.html` files), not a deployable codebase.
- `Website Design/stitch_eopa_editorial_design_system/` — one single-page coded HTML/Tailwind mockup, not a deployable codebase.
- `Content/` — one PDF containing all approved website copy.
- `Pictures/` — 7 supplied photographs (rural/regional landscape imagery — see `docs/ASSETS.md`).
- `Logo/` — 2 logo files (a monochrome and a full-color version of the collective's mark).

**This documentation phase (Phase 0) does not choose or build the real website's technical foundation.** That is an open decision — see `docs/ARCHITECTURE.md` and `docs/IMPLEMENTATION.md`.

## Required website pages

Per the Content source (`Content/EO-Performance-Artists-Collective-Website-Copy.pdf`), which structures itself exactly around these ten sections in this order:

1. Home
2. About
3. Membership
4. Get Involved
5. Team
6. Contact
7. Events Calendar
8. How to Join & Pay
9. Partners
10. Performance Art

See `docs/CONTENT.md` for the full page-by-page content map, including a flagged structural gap (Design Source A folds "Get Involved" into the Membership page rather than giving it a standalone route — see `docs/DESIGN.md` §6).

## Important project constraints

- **Content is placeholder-heavy.** Team bios, contact details, and event listings are explicitly marked SAMPLE/placeholder in the source PDF and must remain visibly marked as such in any implementation until real information is supplied — see `docs/CONTENT.md` and the non-negotiables in `CLAUDE.md`.
- **No real performance/portrait photography currently exists** in the supplied assets — see `docs/DESIGN.md` §7 and `docs/ASSETS.md`. This is a real content gap, not a design choice.
- **Two design sources conflict** on visual and structural details — `docs/DESIGN.md` is the reconciled, binding system; neither source file should be treated as authoritative on its own from this point forward.
- **No technical framework has been chosen or confirmed.** Do not assume any particular stack; that decision needs to be made explicitly (see `docs/ARCHITECTURE.md`) before Phase 1 implementation begins.
