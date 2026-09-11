# ASSETS.md — Photography & Visual Asset Inventory

**Source directories inspected directly (every file opened and viewed):**
- `Pictures/` — 7 photographs
- `Logo/` — 2 logo files
- `Website Design/Eastern Ontario Performance Artists/assets/logo.png` — a third copy of the logo, embedded in the Design Canvas mockup

## Headline finding

**None of the 7 supplied photographs depict people, performance, rehearsal, backstage activity, portraits, or community/group scenes.** All 7 are rural/agricultural Eastern Ontario landscape photography. This contradicts the photographic categories anticipated in the project brief (performance photography, portraits, rehearsal photography, backstage photography, group/community photography) — those categories are currently **empty**. See `docs/DESIGN.md` §7 for the design-system implication.

---

## Logo

| File | Type | Dimensions | Description | Notes |
|---|---|---|---|---|
| `Logo/1.png` | PNG | 2000×2000 | Monochrome (black) version of the mark: four silhouettes inside a black ring — left-to-right, a trumpet player (musician), a seated figure with a palette/painting materials (painter), a standing figure with a camera on a tripod (photographer), and a figure mid-kick (dancer). | Full-bleed square, transparent-looking white background (not confirmed transparent — appears as flat white/could be a flattened PNG; not verified as true alpha transparency). |
| `Logo/2.png` | PNG | 2000×2000 | Full-color version of the same four-silhouette mark, individually colored (violet, gold, magenta/plum, indigo/blue) inside a **Grove-green** ring. Matches the documented logo accent colors (`docs/DESIGN.md` §1) exactly. | This is "the collective's only saturated visual element" per Source A's design-system readme — never re-color, flatten, or recreate it. |
| `Website Design/.../assets/logo.png` | PNG | 2000×2000 | Same subject as `Logo/2.png`, visually identical, but a **different file checksum** — a separate export/compression pass, not a byte-identical copy. Already wired into `Header.dc.html`. | `NEEDS VERIFICATION`: confirm whether `Logo/2.png` or this embedded copy is the authoritative master file going forward; treat them as equivalent in the meantime. |

No transparent/vector (SVG) version of the logo was found anywhere in the supplied resources, confirming Source A's own readme caveat ("No transparent/vector logo file — only a flattened PNG on a white background"). `NEEDS VERIFICATION` if one exists elsewhere; a vector master will eventually be needed for crisp rendering at small sizes (e.g. favicon, header mark).

---

## Photography inventory (`Pictures/`)

| Filename | Type | Dimensions | Aspect | Subject | Likely usage | Notes |
|---|---|---|---|---|---|---|
| `IMGP9132 copy 2.JPG` | JPEG | 4608×2208 | ~2.09:1 (wide panoramic crop) | A dirt farm road at dusk, twin silos and a weathered barn, an oncoming car with headlights on, dramatic cloud-streaked sky. | Home or About — wide regional-atmosphere accent, cropped down; not a hero (per `docs/DESIGN.md` anti-hero rule). | Largest file (6.3MB) — will need compression before web use. |
| `IMGP9141 copy 3.JPG` | JPEG | 1080×667 | ~1.62:1 | A car side-mirror reflection showing the same dusk farm road/sunset, a hand visible on the window frame. | Shared/atmosphere — small accent image only; the visible hand is incidental, not a usable "artist" shot. | `SUBJECT: partial human element (hand only), not a portrait or performance shot.` |
| `IMGP9149 copy.JPG` | JPEG | 1080×810 | 4:3 | A starling murmuration over a barn roof and silo at dusk, blue-toned sky. | Home, About, or Partners — atmospheric/regional accent; distinctive and striking, good candidate for a small punctuation image. | Good technical quality; no people. |
| `IMG_0325.jpg` | JPEG | 1400×933 | ~1.5:1 | An autumn country road flanked by two orange/gold maple trees, blue sky with clouds. | Shared/regional-atmosphere accent — Home, About, or a section divider. | Bright, warm-toned — pairs well with the Paper/warm palette. |
| `_MG_1456 copy 3.JPG` | JPEG | 1200×800 | 3:2 | A close-up of an orange maple branch against dark evergreen background. | Shared — small decorative/texture accent, not a standalone feature image. | Tight macro crop; low usefulness as a page-defining image. |
| `_MG_1776 copy-4.jpg` | JPEG | 1400×902 | ~1.55:1 | A rock ledge over dark pond water with lily pads and exposed tree roots. | Shared — small accent; least clearly "Eastern Ontario arts" of the set, reads as generic nature macro. | Lowest priority of the 7. |
| `_MG_1795 copy.JPG` | JPEG | 1200×1332 | ~0.9:1 (near-square, portrait-leaning) | A foggy rural scene: a weathered fence post with an "OFA" (Ontario Federation of Agriculture) member sign, a large oak tree, a white farmhouse and outbuildings in soft-focus background. | **Not used.** Excluded from the implemented site — see below. | On rendering, the OFA sign is clearly legible, not a minor background detail. Implementation decision: excluded from `public/images/` and not referenced by any page rather than shipped with the risk merely flagged — see `docs/LEGAL_RISK_REGISTER.md`. The source file remains in `Pictures/` for provenance. |

### Actual usage in the implemented site

Every image slot that originally called for a performance/portrait/rehearsal
photo (per the design mockups) and has no real substitute was implemented as
an honest `ImageSlot` placeholder — never filled with a mismatched landscape
photo. Where a slot's purpose was general regional atmosphere rather than a
specific person/performance, a real supplied photo was used, honestly
captioned for what it actually shows (never claimed as a performance,
rehearsal, or portrait it isn't):

- **Home:** `starling-murmuration.jpg` (hero, captioned "Eastern Ontario, at
  dusk"), `autumn-road.jpg` + `maple-branch.jpg` (small paired cluster,
  reframed as a regional-identity interlude rather than the mockup's
  "hands/instrument detail" + "backstage moment" captions, which nothing
  supplied can honestly satisfy). The "Ways to Get Involved" slot
  ("workshop moment") is an `ImageSlot` placeholder — no real substitute.
- **About:** `farm-road-dusk.jpg` (captioned "Rural Eastern Ontario," paired
  with the Values list) — swapped in during visual QA for
  `_MG_1795 copy.JPG` after its visible OFA sign was judged too prominent
  to ship; see the Copyright note above.
- **Membership, Get Involved, Events, How to Join & Pay:** no image used —
  matches Source A, which defines no image slot for any of these pages;
  kept as purely typographic/editorial pages.
- **Team:** `ImageSlot` placeholder for Nel Coloma-Moya's portrait (no
  substitute makes sense for a headshot); the three fully-placeholder roles
  have no image, matching Source A.
- **Contact:** `mirror-sunset.jpg` (captioned "Eastern Ontario") as a
  regional-atmosphere accent — not presented as the "documentary
  photograph" of a person the original mockup called for.
- **Partners:** `pond-roots.jpg` (captioned "Eastern Ontario") — added for
  visual balance on the site's thinnest page (a single paragraph); no copy
  was invented to justify it.
- **Performance Art:** `ImageSlot` placeholder ("an unusual crop,
  body/gesture detail") — no real substitute exists.
- **Not used:** `_MG_1456 copy 3.JPG`, `_MG_1776 copy-4.jpg`,
  `_MG_1795 copy.JPG` (excluded for the OFA-sign concern — see above),
  `IMGP9141 copy 3.JPG` — lowest-priority or excluded material; source
  files remain in `Pictures/` for provenance.

### Quality considerations
- `IMGP9132 copy 2.JPG` is a very large file (6.3MB, 4608×2208) — needs resizing/compression for web delivery.
- All 7 images are JPEGs straight from camera exports (filenames retain camera-generated patterns: `IMGP****`, `_MG_****`, `IMG_****`, plus "copy"/"copy N" suffixes suggesting they were duplicated/re-exported from a larger personal photo library) — none show visible technical defects (blur, exposure blowout) on inspection.
- No duplicates or near-duplicates were found among the 7 — each is a distinct scene, though several share the same "dusk farm road" setting (`IMGP9132 copy 2.JPG` and `IMGP9141 copy 3.JPG` appear to be from the same drive/moment, one direct and one via mirror reflection).

### What is missing (do not fabricate to fill this gap)
No portraits, no performance/stage photography, no rehearsal photography, no backstage photography, no workshop-in-progress photography, no group/community event photography. Every image slot in the Design Canvas mockups that calls for a "performance moment," "workshop moment," "rehearsal," "backstage," or "portrait" currently has **no matching real asset**. This should be treated as an open content-acquisition need, not solved by substituting stock photography, AI-generated imagery, or the supplied landscape photos mislabeled as something they are not (see `docs/DESIGN.md` §7 and the non-negotiables in `CLAUDE.md`).
