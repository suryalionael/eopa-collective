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

**A working Next.js static-export implementation of all 10 required pages plus 4 policy pages now exists** — see `docs/ARCHITECTURE.md` for the technical inventory and `docs/IMPLEMENTATION.md` for what was built and what remains open (real photography, confirmed contact details, a real refund policy, a confirmed domain). It builds, typechecks, and lints cleanly, and deploys as static files to Bluehost per `docs/DEPLOYMENT.md`. The original source material remains in the repository for provenance and as the copy/design source of truth:

- `Website Design/Eastern Ontario Performance Artists/` — the 9-page Design Canvas mockup the implementation's structure and copy are traced from.
- `Website Design/stitch_eopa_editorial_design_system/` — the single-page coded mockup mined for visual/interaction ideas (see `docs/DESIGN.md` §6) but not used for structure or copy.
- `Content/` — the PDF that is the source of truth for all website copy.
- `Pictures/` — the 7 supplied photographs (rural/regional landscape imagery — see `docs/ASSETS.md`); 6 are used in the site, 1 was excluded for a copyright/rights concern (see `docs/LEGAL_RISK_REGISTER.md`).
- `Logo/` — the collective's mark, used as supplied.

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

See `docs/CONTENT.md` for the full page-by-page content map. All ten are implemented as standalone routes, including Get Involved as its own page (Design Source A's mockup had folded it into Membership — resolved per `docs/DESIGN.md` §6). Four policy pages (Privacy, Terms, Cookies, Refunds) were added on top of these ten per the master implementation instructions.

## Important project constraints

- **Content is placeholder-heavy.** Team bios, contact details, and event listings are explicitly marked SAMPLE/placeholder in the source PDF and must remain visibly marked as such in any implementation until real information is supplied — see `docs/CONTENT.md` and the non-negotiables in `CLAUDE.md`.
- **No real performance/portrait photography currently exists** in the supplied assets — see `docs/DESIGN.md` §7 and `docs/ASSETS.md`. This is a real content gap, not a design choice.
- **Two design sources conflict** on visual and structural details — `docs/DESIGN.md` is the reconciled, binding system; neither source file should be treated as authoritative on its own from this point forward.
- **Technical framework is decided and implemented:** Next.js static export, deployed to Bluehost — see `docs/ARCHITECTURE.md`. Changing this would be a significant, explicit decision, not a routine one.
