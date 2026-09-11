# VISUAL_RECOMPOSITION.md

A second visual pass, following a senior-creative-director critique of the
first rail-grid redesign (see `docs/QA.md`'s verification log for both
passes). This document is written **before** implementing it — see
`docs/QA.md` for what was actually verified afterward.

## What was wrong with the first pass

The first pass fixed a real structural bug (drifting section alignment)
and replaced one repeated template (eyebrow-above-heading) with... another
repeated template (label-rail-beside-content), applied identically to
every page and most sections within pages. Specific failures, confirmed by
rendering every page at desktop and mobile:

1. **Forced photography.** Every real photo on the site (barn at dusk,
   pond, mirror shot, autumn tree, maple branch) was decorative atmosphere
   with no argued reason to sit next to its specific paragraph. None of
   them would be missed if deleted — a sign they were placed, not composed.
2. **The `ImageSlot` grey dashed placeholder became a major visual object**
   on Home, Team, and Performance Art — inert, identical everywhere, and
   on Team at mobile width it became the single largest element on the
   page while being completely empty.
3. **The rail-label system, applied uniformly, became its own repetition.**
   About used it identically six times in one page. Short sections
   (Team, Get Involved, Membership) left the label orphaned at the top of
   a mostly-empty column once the grid reserved width for content that
   didn't fill it.
4. **No page had a genuine scale event** except Performance Art (its
   irregular typographic spine). Every other page used the same type
   scale and the same spacing cadence throughout, so nothing on it read
   as a decision.
5. **Get Involved and Partners were visually unfinished** — real, usable
   copy with no compensating design thought, reading as sparse rather than
   deliberately quiet.

## Direction for this pass

No new "EOPA section component." Every page gets its own composition,
decided from its own content. Devices are reused only where a second use
is independently justified by that page's content (e.g., a date/time/
location meta column on Events is justified by it being calendar data,
not because Home used a rail column for something else).

**Photography budget is cut, not redistributed.** Rather than finding a
new place for six atmosphere photos, most are dropped. A photo stays only
where there's a specific, statable reason for it — and where dropped, the
fix is a stronger composition with what's already there (typography,
scale, whitespace, rhythm), never a placeholder box standing in for the
missing image.

**`ImageSlot` (the grey dashed box) is retired as a page-level element.**
Missing-photography sections lose the box and gain a typography/whitespace
solution instead. The absence of a photo is allowed to just be absent.

### Home

- **Hero, full recomposition.** Headline runs wide across the top (not
  capped to a narrow column), a single full-width rule beneath it, then an
  asymmetric row: a narrow paragraph+CTA column (~40%) beside a **wide,
  letterboxed landscape photo** (`farm-road-dusk.jpg`, cropped to its own
  native ~2:1 proportions rather than forced into a portrait box) that
  bleeds toward the container's right edge. The image now does real work —
  a wide establishing view of the region at real visual weight — instead
  of being a small decorative thumbnail. This is Home's scale event.
- **"What We're About":** the disciplines list is removed — the sentence
  already names them, repeating them added no information, just filler.
  The statement becomes the whole section: larger, asymmetrically
  indented, alone in generous space. No rail, no image. The quiet beat.
- **"Ways to Get Involved":** the placeholder image is dropped. The four
  pathways become a 2×2 typographic directory (not a vertical list, so it
  doesn't repeat About's list shape) with hover/focus underline-grow and
  arrow reveal. The dense/interactive beat.
- **Closing:** the two arbitrary offset photos are removed per the brief's
  explicit "remove entirely" option — a strong typographic close (larger
  statement, single confident button, generous whitespace) replaces them.
  The quiet bookend.

### About

Five different visual moments instead of one formula six times; the
rail-label system is dropped for this page entirely, and the source
content's own real headings ("Our Values," "Artistic Beliefs," "What
Counts as Performing Arts, Here," "Where We Stand Today") are used as
actual headings at deliberately different scales instead of uniform small
caps:

1. **Mission** — typography-led, asymmetrically indented, alone (same
   family of move as Home's mission, but a different measure/indent so
   the two pages don't feel identical).
2. **Values** — a compact list, laid out in three columns at desktop
   (not stacked) — genuinely different shape from Beliefs below it. No
   paired photo (the previous farm-road image had no real connection to
   "values" and is dropped).
3. **Artistic Beliefs** — the three beliefs become large-scale stacked
   statements (bigger italic Fraunces, generous line height, no hairlines,
   no digits) — an expressive moment, visually distinct from Values.
4. **Performing Arts Forms** — the real `<table>`, unchanged in substance,
   given a plain heading instead of a rail label.
5. **Where We Stand Today** — the quiet, honest "we're an unincorporated
   association" admission gets the one photo kept on this page
   (`farm-road-dusk.jpg` reused at a different, small, quiet crop) — placed
   here specifically because the theme (a small, real, regional
   collective) and the image (an unglamorous real place) reinforce each
   other, instead of being paired with "Values" for no stated reason.

### Get Involved

The opening statement is set with real presence — larger than a standard
pull-quote, enough to carry the page on its own — and the page's own
padding is brought in to match its actual content length instead of
inheriting a taller template's spacing, so the whitespace around it reads
as intentional rather than leftover. No image is added to fill space.

### Team

The empty portrait placeholder is removed entirely. Nel Coloma-Moya's
entry becomes text-led and is given the largest, most confident
typographic treatment on the page — she's the one real, confirmed person,
and the design should say so. The three sample roles keep their dashed
treatment, unchanged in substance. A text-only team page with one real
person is the honest option; a fabricated-feeling four-person grid is not.

### Partners

The unrelated pond photo is removed. The page's entire content is one
sentence plus a partnership statement — instead of fighting that
shortness, the partnership line ("In partnership with Aspen Training
Centre") is given real typographic scale and made the visual anchor of
the page.

### Membership

Tier/pay-as-you-go structure is kept (it works). Price moves from a
far-right column with a large dead gap to sitting immediately beside its
title, sized up so `$25`/`$35`/`$10`/`$20` read as real anchors, not
right-aligned afterthoughts. Section headers ("Memberships," "Pay As You
Go") become plain headings directly above their content rather than
labels in a separate rail column that goes empty once the column below it
runs shorter than the rail's reserved height.

### Performance Art

Kept almost entirely as-is — the critique named this the strongest page.
Two changes: the placeholder box is removed (the intro paragraph now runs
at a wider, single-column measure instead of splitting to make room for
it), and the closing link is strengthened (larger, more confident) to
match the typographic spine's energy instead of trailing off quietly.

### Contact

The mirror-sunset photo is removed — it had no stronger claim to being
here than any other supplied landscape shot, and the brief's instruction
is explicit: contribute or disappear. Invitation → CTA → details hierarchy
is kept; the details list uses the width the photo freed up.

### Events

Calendar-style meta column (date/time/location) is kept — it's justified
by being real calendar data, not decoration. Hierarchy is sharpened
(slightly larger "when" text) and the page's bottom padding is tightened
so three sample listings don't trail into a disproportionate empty area.
No events are invented to fill space.

### How to Join & Pay

Connected vertical timeline is kept. Its measure is widened so it uses
the container more intentionally at desktop instead of occupying a narrow
strip beside a large empty right side; step titles get slightly more
typographic presence. No decorative element is added to fill the freed
width — the fix is proportion, not addition.

## Cross-page decisions

- **`ImageSlot` removed from the codebase** once nothing references it —
  see the implementation commit for confirmation.
- **`PageHeader`'s forced two-column rail grid is retired.** Page titles
  keep a small kicker where one earns its place, but as plain stacked
  text, not a grid reserving a column that goes empty on short pages.
  `.page-grid`/`.page-rail__*` CSS is removed if nothing uses it after
  the rewrite (checked in the implementation commit).
- **Photography kept, with a stated reason each:** Home hero
  (establishing/place), About "Where We Stand" (grounding the honest
  organizational admission). Everything else that was previously
  decorative is removed rather than re-homed.
- **No new colors, fonts, dependencies, scripts, cookies, or tracking.**
  This is a layout/typography/JSX pass only.

## What is not being solved here (flag, don't fabricate)

- Team, Performance Art, and Home's "workshop moment" still have no real
  photography to show — removing the placeholder box doesn't create a
  photo, it just stops pretending an empty box is a design decision.
- Get Involved and Partners remain short pages. The fix here is
  composition, not padding content that doesn't exist.
