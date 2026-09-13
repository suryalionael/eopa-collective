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

### Actual usage in the implemented site (as of the second visual pass)

The first visual pass (rail-grid redesign) used six of the seven supplied
photos as atmosphere accents across Home, About, Contact, and Partners. A
senior-creative-director review of the rendered site found that none of
them had a stated reason to sit next to their specific paragraph — they
were decorative, not composed, and would not be missed if removed. See
`docs/VISUAL_RECOMPOSITION.md` for the full reasoning. The photography
budget was cut rather than redistributed:

- **Home:** `farm-road-dusk.jpg` — the hero, cropped wide (2:1, close to
  its native ~2.09:1 proportions) as a real establishing view of the
  region at full visual weight, captioned "Eastern Ontario, at dusk." This
  is the one image on the site doing the most compositional work. The
  "Ways to Get Involved" section carries no image — the previous grey
  `ImageSlot` placeholder box was removed as one of the site's weakest
  elements; the section is now a 2×2 typographic directory instead.
- **About:** `farm-road-dusk.jpg` reused at a small, quiet crop (4:5),
  paired specifically with "Where We Stand Today" — the honest admission
  that this is a small, unincorporated, regional collective is reinforced
  by an unglamorous real place, rather than paired arbitrarily with
  "Our Values" as in the first pass.
- **Membership, Get Involved, Events, How to Join & Pay, Partners:** no
  image. Partners previously paired a pond/lily-pad photo
  (`pond-roots.jpg`) with the Aspen Training Centre paragraph for "visual
  balance" with no stated connection between the two — removed; the
  partnership statement itself now carries the page's visual weight.
- **Team:** no image. The portrait placeholder for Nel Coloma-Moya was
  removed — a large, empty, dashed box was judged the least honest
  element on the site (most damaging at mobile width, where it became the
  dominant object on the page). Her entry is text-led instead, at the
  largest, most confident type on the page.
- **Contact:** no image. `mirror-sunset.jpg` previously floated here with
  no stronger claim to this page than to any other; removed per the
  instruction that a photo must contribute to the composition or
  disappear.
- **Performance Art:** no image. The `ImageSlot` placeholder ("an unusual
  crop, body/gesture detail") is gone; the intro paragraph runs at a
  single wide measure instead of splitting to make room for an empty box.
- **`ImageSlot` (the grey dashed placeholder component) was removed from
  the codebase** — see `components/Media.tsx`. A missing photo is no
  longer represented as a box; the page around it is composed without one.
- **Not shipped in `public/images/`:** `autumn-road.jpg`,
  `maple-branch.jpg`, `mirror-sunset.jpg`, `pond-roots.jpg`,
  `starling-murmuration.jpg` — processed for the first pass, unused after
  the second. Removed from `public/images/` (they were being copied
  as-is into every production build regardless of use) but the original
  source files remain in `Pictures/` for provenance. `_MG_1456 copy 3.JPG`,
  `_MG_1776 copy-4.jpg`, and `_MG_1795 copy.JPG` (OFA-sign concern — see
  above) were never processed at all.

### Quality considerations
- `IMGP9132 copy 2.JPG` is a very large file (6.3MB, 4608×2208) — needs resizing/compression for web delivery.
- All 7 images are JPEGs straight from camera exports (filenames retain camera-generated patterns: `IMGP****`, `_MG_****`, `IMG_****`, plus "copy"/"copy N" suffixes suggesting they were duplicated/re-exported from a larger personal photo library) — none show visible technical defects (blur, exposure blowout) on inspection.
- No duplicates or near-duplicates were found among the 7 — each is a distinct scene, though several share the same "dusk farm road" setting (`IMGP9132 copy 2.JPG` and `IMGP9141 copy 3.JPG` appear to be from the same drive/moment, one direct and one via mirror reflection).

### What is missing (do not fabricate to fill this gap)
No portraits, no performance/stage photography, no rehearsal photography, no backstage photography, no workshop-in-progress photography, no group/community event photography from `Pictures/` itself. Every image slot in the Design Canvas mockups that calls for a "performance moment," "workshop moment," "rehearsal," "backstage," or "portrait" had **no matching real asset** from this project's own source material. This should be treated as an open content-acquisition need, not solved by substituting stock photography, AI-generated imagery, or the supplied landscape photos mislabeled as something they are not (see `docs/DESIGN.md` §7 and the non-negotiables in `CLAUDE.md`).

## Artist Directory portraits (`public/images/`, added 2026-09)

The three portraits on `/directory/` (`pat-johnson.jpg`, `amanda-keeley.jpg`, `denzel-and-jen.jpg`) are a deliberate exception to the "no substitute imagery" rule above — they are not stand-ins for missing performance photography. Nel directed reuse of these three real members' existing public artist photos from `deltaharvestfestival.ca` (same regional artist network, same organizers). Sourced from local project folders (`Delta Harvest Festival/images/`, `Delta Harvest Festival/Pictures/`) and resized/compressed with `sips` to match this repo's existing asset pipeline. Bios and outbound links were reused the same way, per Nel's explicit instruction — see the comment in `app/directory/page.tsx`.
