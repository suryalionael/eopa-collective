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
| `_MG_1795 copy.JPG` | JPEG | 1200×1332 | ~0.9:1 (near-square, portrait-leaning) | A foggy rural scene: a weathered fence post with an "OFA" (Ontario Federation of Agriculture) member sign, a large oak tree, a white farmhouse and outbuildings in soft-focus background. | About or Partners — grounds the "Eastern Ontario" / regional-agricultural setting; moody, atmospheric tone fits "editorial confidence." | The only image with a legible sign/text element (OFA member sign) — verify this doesn't need clearance/blurring for a public-facing site. `NEEDS VERIFICATION`. |

### Grouping by likely usage
- **Home:** `IMGP9132 copy 2.JPG`, `IMG_0325.jpg`, `IMGP9149 copy.JPG` (regional-atmosphere candidates only — Home's actual image slots per `Home.dc.html` call for "Small performance moment," "workshop moment," "Hands/instrument detail," "Backstage moment" — **none of the 7 supplied photos satisfy any of these captions**; do not force a landscape photo into a caption slot that promises a performance image).
- **About:** `_MG_1795 copy.JPG`, `IMGP9149 copy.JPG` (regional/atmospheric grounding only — About's actual slot calls for "Rehearsal or workshop moment," which is unmet).
- **Membership:** no supplied image is a fit; page currently has no image slot in Source A.
- **Get Involved:** none — no image slot defined.
- **Team:** none of the 7 fit; `Team.dc.html` needs individual **portraits**, which do not exist in the supplied set at all.
- **Contact:** `Contact.dc.html` calls for a "Documentary photograph" — none of the 7 supplied photos are documentary-of-people; a landscape shot could substitute only as an atmosphere image, not as the intended documentary-human shot.
- **Events:** no image slots defined in Source A.
- **How to Join & Pay:** no image slots defined.
- **Partners:** no image slot defined; `_MG_1795 copy.JPG`'s farm/rural tone could suit this page contextually if an image is added.
- **Performance Art:** `PerformanceArt.dc.html` calls for "Unusual crop — body/gesture detail" — unmet by any of the 7.
- **Shared/decorative only:** `_MG_1456 copy 3.JPG`, `_MG_1776 copy-4.jpg`, `IMGP9141 copy 3.JPG` — lowest priority, generic nature/texture material with no strong page affinity.
- **Unknown/unsuitable:** none classified as technically unsuitable (all are in-focus, reasonably exposed), but see quality notes below.

### Quality considerations
- `IMGP9132 copy 2.JPG` is a very large file (6.3MB, 4608×2208) — needs resizing/compression for web delivery.
- All 7 images are JPEGs straight from camera exports (filenames retain camera-generated patterns: `IMGP****`, `_MG_****`, `IMG_****`, plus "copy"/"copy N" suffixes suggesting they were duplicated/re-exported from a larger personal photo library) — none show visible technical defects (blur, exposure blowout) on inspection.
- No duplicates or near-duplicates were found among the 7 — each is a distinct scene, though several share the same "dusk farm road" setting (`IMGP9132 copy 2.JPG` and `IMGP9141 copy 3.JPG` appear to be from the same drive/moment, one direct and one via mirror reflection).

### What is missing (do not fabricate to fill this gap)
No portraits, no performance/stage photography, no rehearsal photography, no backstage photography, no workshop-in-progress photography, no group/community event photography. Every image slot in the Design Canvas mockups that calls for a "performance moment," "workshop moment," "rehearsal," "backstage," or "portrait" currently has **no matching real asset**. This should be treated as an open content-acquisition need, not solved by substituting stock photography, AI-generated imagery, or the supplied landscape photos mislabeled as something they are not (see `docs/DESIGN.md` §7 and the non-negotiables in `CLAUDE.md`).
