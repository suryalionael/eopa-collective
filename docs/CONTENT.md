# CONTENT.md — Page-by-Page Content Map

**Source of truth for all website copy:** `Content/EO-Performance-Artists-Collective-Website-Copy.pdf` (5 pages, titled "Website Copy — Draft," dated by file metadata 2026-09-08). Its own header notes: *"Built from Nel's outline. Structure borrows the mission → values → ways to get involved pattern from artsottawa.ca, adapted to our scale and services."*

`Website Design/Eastern Ontario Performance Artists/*.dc.html` reproduces this PDF's copy **verbatim**, page for page — it is a faithful visual implementation of the same content, not an independent source. Where noted below, it is cited as a secondary confirmation of exact wording/markup.

**Rule for all future work:** copy comes from the PDF (or the `.dc.html` files, which match it). Do not rewrite, shorten, "improve," or invent copy. Preserve every `SAMPLE` / `[Placeholder]` / `[placeholder]` marker exactly as written until real information replaces it.

---

## 1. Home
- **Source:** PDF p.1 ("HOME"); `Home.dc.html`
- **Sections:** Hero (H1 + intro paragraph + 2 CTAs) → "What We're About" (single italic pull-quote paragraph) → "Ways to Get Involved" (4-item numbered list, shared verbatim with the Get Involved page's intro concept) → closing invitation line + CTA.
- **CTAs:** "Become a Member" (→ Membership), "See Upcoming Events" (→ Events Calendar).
- **Placeholder status:** none — this page's copy is final draft language, not marked SAMPLE.
- **Implementation notes:** `Home.dc.html` adds two image-slot placeholders not present as text in the PDF (a hero image and a "workshop moment" image, plus a 2-image cluster) — these are **layout additions**, not content; the copy itself matches the PDF exactly.
- **Unresolved:** none.

## 2. About
- **Source:** PDF p.1–2 ("ABOUT"); `About.dc.html`
- **Sections:** Mission Statement (italic pull-quote) → Our Values (3 items) → Our Artistic Beliefs (3 numbered items) → "What Counts as Performing Arts, Here" (6-row table: Theatre, Dance, Music, Opera, Circus & Physical Arts, Spoken Word) → "Where We Stand Today" (unincorporated-association status + Aspen Training Centre partnership paragraph).
- **Placeholder status:** none — final draft language.
- **Unresolved:** none.

## 3. Membership
- **Source:** PDF p.2–3 ("MEMBERSHIP"); `Membership.dc.html`
- **Sections:** Intro line → 4 priced offerings (Basic Artist Membership $25/yr, Artist Digital Membership $35/yr, Artist Workshops $10/workshop, Incubator Idea Clinic $20/session or 3 for $50) → (in `Membership.dc.html` only) a "Get Involved" section reproducing the GET INVOLVED page copy + its two CTAs.
- **Placeholder status:** none — prices and terms are stated as final draft language, not marked SAMPLE. Treat as real/approved figures, not placeholders, unless told otherwise.
- **Resolved:** the PDF gives "GET INVOLVED" its own top-level heading, positioned between MEMBERSHIP and TEAM, matching the mandated page list (`docs/PROJECT.md`) which lists it as page 4, distinct from Membership. `Membership.dc.html`'s mockup had nested this content at the bottom of the Membership page instead; the implementation follows the PDF's structure and the mandated page list — Get Involved is its own route (`app/get-involved/page.tsx`), and `app/membership/page.tsx` links to it. See `docs/DESIGN.md` §6.

## 4. Get Involved
- **Source:** PDF p.3 ("GET INVOLVED"). No standalone `.dc.html` mockup exists for this page (Design Source A embedded its copy inside `Membership.dc.html`) — implemented directly from the PDF as `app/get-involved/page.tsx`, per the resolved decision above.
- **Content:** one intro paragraph, one paragraph on what membership unlocks, two CTAs ("Become a Member" → Membership, "Ask a Question" → Contact).
- **Placeholder status:** none.
- **Unresolved:** none.

## 5. Team
- **Source:** PDF p.3–4 ("TEAM"); `Team.dc.html`
- **Content:** Explicit placeholder banner: *"Placeholder names/roles below — swap in real founding members before this goes live."* One real named person — **Nel Coloma-Moya, Founding Coordinator** — with a real (non-placeholder) bio line. Three additional roles are entirely placeholder: `[Sample Name] — Programs Lead`, `[Sample Name] — Membership & Directory`, `[Sample Name] — Treasurer`, each with `[Placeholder]`-prefixed bio text.
- **Placeholder status:** 3 of 4 team entries are explicit placeholders; `Team.dc.html` visually marks each with a dashed border and a "SAMPLE" tag — preserve this treatment (or an equivalent) in any implementation.
- **Unresolved:** real names/roles/bios for 3 of 4 positions do not exist yet.
- **Implementation update (2026-09, per Nel's direction):** the 3 placeholder roles are removed from `app/team/page.tsx` entirely rather than left as SAMPLE entries — Nel's instruction was "just leave Nel as founder, delete everything else," not to wait for real replacements. The page now shows only Nel, retitled **Founder** (not Founding Coordinator), with a link to her own website (`https://nelcoloma-moya.ca/`). This is a deliberate content decision, not a gap — don't re-add placeholder roles to "restore" what was here.

## 6. Contact
- **Source:** PDF p.4 ("CONTACT"); `Contact.dc.html`
- **Content:** Explicit placeholder banner: *"SAMPLE — confirm real details before publishing."* Email `info@eopacollective.ca [placeholder]`, phone `(613) 555-0142 [placeholder]`, mailing address `c/o Aspen Training Centre, Eastern Ontario, ON [placeholder]`, social `@eopacollective [placeholder]`. Closing paragraph + "Send Us a Message" CTA (target unspecified/`#` in the mockup — no form or mailto destination is confirmed).
- **Placeholder status:** every single contact detail on this page is explicitly placeholder. None should be treated as real or published as-is.
- **Unresolved:** phone, mailing address, and social handle were never confirmed real.
- **Implementation update (2026-09, per Nel's direction):** the placeholder `info@eopacollective.ca` address does not exist as a real inbox. Nel supplied her own real address (`nelcolomamoya@gmail.com`, see `lib/site.ts`), which now appears sitewide (Contact, Privacy, Terms, Refund Policy, How to Join & Pay) as the confirmed contact point, labeled on the Contact page as hers specifically ("Email — Nel Coloma-Moya, Founder"). Phone, mailing address, and social handle rows were removed from `app/contact/page.tsx` entirely (per Nel's follow-up "remove all samples and placeholder" request) rather than shown without their `[placeholder]` label — that would present fake, unconfirmed values as real. `lib/site.ts`'s `contact` object no longer carries those fields; add them back only once real values exist.

## 7. Events Calendar
- **Source:** PDF p.4 ("EVENTS CALENDAR"); `Events.dc.html`
- **Content:** Explicit placeholder banner: *"SAMPLE listings — replace with real dates once scheduled."* Three sample events: (1) "Spoken Word & Poetry Circle — Kickoff Session," partially real (says "First Tuesday" but date/month/year bracketed as placeholder in the PDF; `Events.dc.html` renders a concrete "Sept 03" date not present in the PDF — **treat the PDF's bracketed placeholder as authoritative over the mockup's invented concrete date**), venue "Brockville Public Library [placeholder]"; (2) "Artist Workshop: Intro to Stage Movement," fully placeholder date/location; (3) "Annual General Meeting," fully placeholder date.
- **Placeholder status:** all three listings are explicitly SAMPLE.
- **Discrepancy flagged:** `Events.dc.html` shows a specific date ("Sept 03") for event 1 that does not appear in the source PDF (which brackets the date as `[Month] [Day] [Year]`). This is a mockup invention, not sourced content — do not treat "Sept 03" as a real/confirmed date.
- **Unresolved:** all three listings' real dates/times/venues remain unknown.
- **Implementation update (2026-09, per Nel's direction):** all three SAMPLE listings were removed from `app/events/page.tsx` entirely (per Nel's "remove all samples and placeholder" request) rather than kept without their SAMPLE label — none had a real date to show. The page now lists only the real, confirmed Open Mic at the Delta Harvest Festival (see below) plus a "Meet the Artists" CTA to `/directory/`. Add these three back, or new real listings, once real dates/venues exist — don't restore them as filler.
- **New real event added (2026-09):** Open Mic at the Delta Harvest Festival — Sunday, September 27, 2026, 11:45 AM–12:45 PM, Old Town Hall — sourced directly from `deltaharvestfestival.ca` (not from the source PDF, which predates this event). Host attribution (Pat Johnson) and open-slot info were separately confirmed by Nel in an earlier message.

## 8. How to Join & Pay
- **Source:** PDF p.4–5 ("HOW TO JOIN & PAY"); `HowToJoin.dc.html`
- **Content:** Explicit placeholder banner: *"SAMPLE process — confirm actual payment method and tools with Nel before publishing."* 4 steps: (1) Choose Your Membership, (2) Fill Out the Membership Form [Placeholder] + CTA, (3) Pay Your Membership Fee [Placeholder] — mentions e-transfer to `payments@eopacollective.ca` (note: a **third**, different placeholder email vs. Contact page's `info@eopacollective.ca`), (4) Get Confirmed [Placeholder].
- **Placeholder status:** steps 2–4 are explicitly placeholder process description; step 1 (pricing) restates confirmed Membership pricing.
- **Unresolved (historical):** membership form fields and confirmation-email workflow remain undefined.
- **Implementation update (2026-09, per Nel's direction):** payment is resolved — Nel supplied live Stripe Payment Links, wired up via the checkout dropdown on `/membership/` (see `components/MembershipCheckout.tsx`) — so the old step 3 ("Pay Your Membership Fee [Placeholder]," e-transfer to the nonexistent `payments@eopacollective.ca`) is now real. Steps 2 ("Fill Out the Membership Form") and 4 ("Get Confirmed") were removed from `app/how-to-join/page.tsx` entirely (per Nel's "remove all samples and placeholder" request) rather than kept as placeholders — neither the sign-up form nor the confirmation process exists. The page now shows 2 steps: Choose Your Membership, Pay Your Membership Fee. Add a sign-up/confirmation step back once one is real.

## 9. Partners
- **Source:** PDF p.5 ("PARTNERS"); `Partners.dc.html`
- **Content:** One short section on the Aspen Training Centre partnership — no placeholder markers, stated as final draft language.
- **Placeholder status:** none.
- **Unresolved:** none. Note this is currently the thinnest page in the entire site (a single paragraph) — worth flagging to the user as a candidate for expansion, but do not invent additional partner copy without new source material.

## 10. Performance Art
- **Source:** PDF p.5 ("PERFORMANCE ART"); `PerformanceArt.dc.html`
- **Content:** Explains why Performance Art is treated as a distinct category from "performing arts," lists the five defining elements (Time, Space, the Body, Presence, Audience), closing CTA "Explore Performance Art at the Collective" (target unspecified/`#`).
- **Placeholder status:** none — final draft language.
- **Resolved (pragmatically):** the closing CTA had no defined destination in any source material (no directory/gallery of performance-art members or works exists). Rather than ship a dead link (`href="#"`), it is routed to `/contact/` in the implementation — a routing decision, not invented content. Revisit if/when a real Performance Art directory exists.

---

## Cross-page duplication (not an inconsistency — flagging for implementation awareness)

The "Ways to Get Involved" 4-item list (Join as a Member / Build Your Digital Presence / Attend a Workshop / Bring an Idea to the Incubator) appears on **Home** in full and is referenced conceptually again in **Get Involved**/**Membership**. This is intentional repetition in the source content (a landing teaser + a fuller treatment), not duplicate content to deduplicate.

## Email address inconsistency across pages (flag, do not silently pick one)

Three different placeholder contact emails appear across the source content:
- `info@eopacollective.ca` — Contact page
- `payments@eopacollective.ca` — How to Join & Pay page
- (Design Source B invents a fourth, `collective@eopa-artists.org` — **not from the Content source, do not use**, per `docs/DESIGN.md` §6.)

The first two (`info@` / `payments@`) both use the same domain and plausibly describe two different real mailboxes (general inquiries vs. payments) — this is likely intentional, not an error, but both are explicitly marked `[placeholder]` and unconfirmed.

**Resolved (2026-09):** neither placeholder address exists as a real inbox — Nel confirmed this directly ("There is no info@eopacollective.ca & payments@eopacollective.ca") and supplied her own real address instead. `lib/site.ts`'s `contact.email` is now `nelcolomamoya@gmail.com`, used everywhere a contact or payments address appears on the site; the separate `paymentsEmail` constant was removed rather than pointed at a second placeholder. Design Source B's `collective@eopa-artists.org` is still not used, per the original guidance above.
