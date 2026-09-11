# EOPA Design System (Reconciled)

This is the **implementation-ready design system** for the Eastern Ontario Performance Artists Collective (EOPA) website. It is built by directly inspecting and reconciling two supplied design sources — it does not introduce new rules beyond what those sources support.

**Sources inspected:**
- **Source A** — `Website Design/Eastern Ontario Performance Artists/` — a multi-page Design Canvas (`.dc.html`) mockup of all 9 site pages + Header/Footer, backed by a real, structured token system at `_ds/eopa-design-system-a7a8e359.../` (`tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`, `readme.md`).
- **Source B** — `Website Design/stitch_eopa_editorial_design_system/` — a single coded HTML mockup (`code.html`, Tailwind CDN) of one long single-page layout, a rendered screenshot (`screen.png`), and a written art-direction brief (`DESIGN.md`) with a YAML frontmatter token block.

Where the two sources agree, that rule is adopted outright. Where they conflict, this document names the conflict explicitly and states which source's rule governs, with reasoning — **conflicts are never silently merged**.

---

## 1. Colors

### Agreed core palette (both sources, verbatim match)
| Token | Hex | Usage |
|---|---|---|
| Ink | `#262420` | Primary text, headings, borders, nav — warm editorial black, never pure `#000` |
| Paper | `#FBFAF7` | Page background — warm paper, never pure white |
| Plum | `#5D1274` | Primary accent — primary buttons, active nav, links, emphasis. Used sparingly, as punctuation, not fill. |
| Grove | `#3A5D16` | Secondary accent — footer, eyebrow labels, small rules, regional references |

### Agreed logo-only accents (both sources, verbatim match)
`Magenta #940DBF`, `Violet #6B0EBF`, `Indigo #4717C1`, `Gold #EDD115`, `Amber #C27523`.
**Rule (both sources, explicit):** these five colors belong to the logo mark only. Never used as a UI background, button, card fill, or headline color. At most a 5–6px dot or thin tag border, if used at all.

### CONFLICT — tonal/neutral scale beyond the 4 core colors
Three different extended palettes exist across the sources, and they do not agree:

1. **Source A** (`tokens/colors.css`, hand-built, purpose-named, actually wired into every `.dc.html` page): `ink-700 #423f39`, `ink-500 #6b665e`, `ink-300 #8a857d`, `ink-100 #E4E0D8` (hairline rule color), `plum-hover #4a0e5c`, `grove-hover #2e4a11`.
2. **Source B coded mockup** (`code.html` Tailwind config): `paper-warm #F4EFE6`, `ink-light #4A463F`, `ink-muted #787368`, `plum-deep #450B57`, `plum-glow #EED8F6`, `grove-soft #E6EEDC`, `rule-subtle #E8E3DA`.
3. **Source B's own written DESIGN.md frontmatter** — a Material-Design-3-style token block (`surface`, `primary-container: #5d1274`, `secondary-container`, `tertiary`, `on-primary-container: #d384e8`, etc.) that matches **neither** Source A **nor** Source B's own prose two paragraphs below it (which restates the plain Ink/Paper/Plum/Grove system). This frontmatter block reads as auto-generated scaffolding from the authoring tool, not an authored design decision — it is internally contradicted by the document it's attached to.

**RECOMMENDED FINAL RULE:** Adopt **Source A's `tokens/colors.css` scale as canonical.** It is the only one of the three that is (a) purpose-named for direct implementation, (b) minimal — exactly the tonal steps the restrained aesthetic needs and no more, and (c) already load-bearing across 11 real mockup files. **Discard Source B's frontmatter Material-3 palette entirely** — it is not supported by any other resource and contradicts its own document. Source B's coded-mockup extras (`paper-warm`, `ink-muted`, etc.) may be adopted as *additive, optional* tones (e.g. `paper-warm` for a slightly warmer section band) only where they don't duplicate or conflict with a Source A token — treat as a proposal requiring sign-off, not an established rule.

### Full canonical token set
```css
--paper:      #FBFAF7;
--ink-900:    #262420;
--ink-700:    #423f39;
--ink-500:    #6b665e;
--ink-300:    #8a857d;
--ink-100:    #E4E0D8;   /* hairline rule color */
--plum:       #5D1274;
--plum-hover: #4a0e5c;
--grove:      #3A5D16;
--grove-hover:#2e4a11;
--logo-magenta:#940DBF;  /* logo mark only */
--logo-violet: #6B0EBF;  /* logo mark only */
--logo-indigo: #4717C1;  /* logo mark only */
--logo-gold:   #EDD115;  /* logo mark only */
--logo-amber:  #C27523;  /* logo mark only */
```

---

## 2. Typography

### Agreed (both sources' prose)
- **Display font:** Fraunces — headings, section titles, editorial statements/pull-quotes.
- **Body font:** Work Sans — body copy, nav, buttons, labels, captions, forms.
- **Heading weight:** 500 (both sources' prose state this explicitly: Source A tokens hard-code `--text-h1-weight: 500` etc.; Source B DESIGN.md §06 states "Primary display font: Fraunces (Weight 500)").

### CONFLICT 1 — Source B contradicts itself on font family
Source B's own YAML frontmatter typography block specifies `fontFamily: Newsreader` for `editorial-statement`, `headline-lg`, and `headline-md` — a font that appears **nowhere** in Source B's prose, nowhere in Source A, and is not loaded by either the `code.html` mockup or any `.dc.html` page (both actually `@import` Fraunces + Work Sans from Google Fonts). This is the same scaffolding/frontmatter artifact flagged in the color conflict above.

**RECOMMENDED FINAL RULE:** Ignore "Newsreader" — unsupported by any real asset. **Fraunces + Work Sans is canonical**, per both sources' prose and both sources' actual font imports.

### CONFLICT 2 — Source B's coded mockup contradicts its own weight/style rule
`code.html` sets its H1 to `font-fraunces font-normal` (weight 400, not 500) and leans heavily on `italic` and `font-light` treatments for major headings (e.g. "Contemporary Dance" at `italic font-light`). This directly contradicts Source B's own written rule ("Weight 500") and Source A's tokens (500 throughout, no italic headings except intentional pull-quote emphasis).

**RECOMMENDED FINAL RULE:** Fraunces 500 for standard headings, per the written rule both sources state. Italic Fraunces is reserved for pull-quotes/mission-statement–style emphasis (as Source A actually uses it — e.g. the italic mission statement on Home and About) — not as a general heading treatment.

### CONFLICT 3 — type scale size
| Level | Source A (`tokens/typography.css`, fixed) | Source B (DESIGN.md prose, responsive range) | Source B (`code.html`, actual) |
|---|---|---|---|
| H1 | 40px | 40–64px | up to 88px (`text-[5.5rem]`) |
| H2 | 27px | 28–40px | up to 48px |
| H3 | 20px | 20–25px | — |
| Body | 16.5px | 16–18px | 16–18px |
| Caption | 13px | 13–14px | 12–13px |
| Meta | 12px | 12–13px | 12px |

Source A's fixed sizes are the ones actually implemented across all 9 real pages (with a few page-specific exceptions — Home H1 is 44px, How to Join & Partners H1 is 52px — so "fixed" in practice still varies intentionally by page). Source B's prose proposes a wider responsive range; its own coded mockup pushes past even that range at desktop.

**RECOMMENDED FINAL RULE:** Use Source A's sizes as the **desktop baseline** (treating the page-specific H1 variation already present in Source A — 40/44/52px — as intentional editorial variety, not inconsistency to fix). Apply **Source B's *responsive-range concept*** (scale down for mobile, e.g. ~28–32px for an H1 on narrow screens) but **cap the top end at Source A's ceiling** — reject Source B's 64–88px hero sizes as too theatrical for the "artsy but not too much" mandate both sources state.

### Canonical type tokens
```css
--font-display: 'Fraunces', ui-serif, Georgia, serif;
--font-body:    'Work Sans', ui-sans-serif, system-ui, sans-serif;

--text-h1-size: 40px;  --text-h1-weight: 500; --text-h1-line: 1.15;  /* 44–52px on specific pages is an approved editorial variant, not a violation */
--text-h2-size: 27px;  --text-h2-weight: 500; --text-h2-line: 1.2;
--text-h3-size: 20px;  --text-h3-weight: 500; --text-h3-line: 1.3;
--text-body-size: 16.5px; --text-body-weight: 400; --text-body-line: 1.55;
--text-caption-size: 13px; --text-caption-weight: 400; --text-caption-line: 1.4;
--text-meta-size: 12px; --text-meta-weight: 400; --text-meta-line: 1.4;
```
Mobile: scale H1/H2 down roughly 25–30% (established precedent: Source A's own Home page media query drops the hero grid to one column at 760px — extend the same breakpoint logic to type).

---

## 3. Layout

### CONFLICT — content width & spacing scale
- **Source A:** `--content-max-width: 1080px`, `--content-margin: 60px`, 4px-based spacing scale (`--space-1: 4px` … `--space-10: 128px`). Actually implemented, page-tested, across all 9 pages.
- **Source B:** `max-width: 1360px` (`.max-w-[1360px]` throughout `code.html`), rem-based spacing scale (`space-xxs: 0.25rem` … `space-4xl: 9rem`), `gutter: 1.5rem`, `margin-desktop: 3rem` (48px), `margin-mobile: 1.25rem` (20px). Exercised only in one single-page mockup.

**RECOMMENDED FINAL RULE:** Adopt **Source A's 1080px max-width / 60px margin / 4px spacing scale** as canonical — it's the one actually load-bearing across the real, multi-page implementation, and its narrower measure suits body-copy line length better for an editorial/literary reading experience. Source B's wider 1360px belongs to a single dramatic full-bleed layout style that isn't the adopted page structure (see §6, Information Architecture).

**Revised during the visual art-direction pass (see `docs/QA.md`'s verification log):** the outer container was widened from 1080px to **1220px** (`--content-max-width`). At real desktop widths (1440px+), the 1080px column left ~180px of unengaged gutter on each side — the page read as a fixed-width island floating in empty space rather than something composed for the viewport it occupies. 1220px keeps a comfortable side gutter without stretching body copy past a reasonable reading measure (text itself is still capped by `--measure: 640px` inside each content column, never by the outer container). This does not reopen the Source A/B conflict above — it's a refinement of the adopted rule, not a reversion to Source B's 1360px (which was never load-bearing).

### 3.1 The editorial rail — one shared composition idea

Every page-opening header and most page sections use one asymmetric grid (`.page-grid` / the `PageHeader` component): a slim label rail (`--rail-width: 176px`) beside a flush-left content column. This replaced two things at once:
1. **A real bug**, not intentional asymmetry: sections used to each apply their own one-off `max-width` *inside* an already auto-centered `.container`. Centering a narrower box inside a wider centered box shifts the narrower box's left edge by a different amount each time, so the page's left edge visibly drifted section to section (most visible on About, where Mission/Values/Beliefs/Table/Status each started at a different x-position). The rail grid fixes this structurally: the content column is never re-centered, so it stays flush with the same left edge as every other section on the page.
2. **The repeated "eyebrow-above-heading" template.** Every interior page previously opened with an identical hairline-rule-plus-caps-label sitting directly above an H1, stacked in a single centered column — the exact kind of repetition that reads as templated. Moving the label into a side rail, and using that rail for real supporting content where one exists (Home's disciplines list, drawn from words already in that section's own sentence — not new copy), gives the wide-viewport gutter a real purpose instead of leaving it empty or filling it with decoration.

**Exception, deliberately:** the Performance Art page does not use the rail (see §6). It is meant to read as a distinct practice, not another instance of the shared template, so it opens with nothing but its own typography.

```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
--space-9: 96px;  --space-10: 128px;
--content-max-width: 1080px;
--content-margin: 60px;   /* 20-24px on mobile */
```

### Grid & rhythm
Both sources agree in principle on: generous section padding (72–96px between major sections in Source A; 96–128px in Source B), hairline `1px solid` rules separating sections rather than color bands or shadows, and asymmetric column splits (Source A uses `1fr / 220–300px` grids for text+image pairings; Source B uses a 12-column grid with 7/5 or 8/4 splits). Both are compatible — use CSS grid with an asymmetric split for any section pairing copy with a supporting image, matching the ratios already used across Source A's pages (roughly 5:7 or 7:5, never 1:1).

---

## 4. Components

### Buttons
**Agreement:** primary = filled Plum, 2px radius, Paper text; secondary = Ink outline, fills Ink on hover; ghost = Plum text link, underline on hover. Both sources implement this identically in substance.

**CONFLICT:** Source A's readme explicitly states *"no drop shadows, no card shadows"* and describes hover as a fill/color change only — *"no scale/shrink effects, no bounce."* Source B's coded buttons add `shadow-sm`/`shadow-md` and a hover lift (`transform: translateY(-2px)`).

**RECOMMENDED FINAL RULE:** No shadows, no hover-lift transform. Follow Source A's explicit, deliberate constraint — it's a written rule, not an omission, and matches the flat-paper aesthetic both sources otherwise commit to. Hover = darken fill / invert outline only.

### Cards / list rows
Hairline top border, no fill change, no shadow, small accent mark (Source A: a Gold dot per its readme, though not actually used in any shipped page — the pages instead use numbered Fraunces digits in Plum, e.g. "01", "02"). Use the numbered-digit pattern — it's the one actually implemented everywhere (Home's "Ways to Get Involved," About's "Artistic Beliefs," HowToJoin's steps).

### Header / Navigation
Use **Source A's Header.dc.html** structure — it's the only real, working nav for the adopted multi-page IA (see §6): logo mark + wordmark (left), text nav links (center/right), filled-Plum "Become a Member" button (far right), active-state link styled bold Ink vs. regular Ink-700 for inactive. Border-bottom hairline, Paper background, no sticky/blur behavior specified in Source A (Source B's `sticky top-0 backdrop-blur-md` is a single-page-mockup affordance tied to its long-scroll anchor nav — optional to adopt for the multi-page site since sticky headers are common and low-risk, but not required by either source).

### Footer
Use **Source A's Footer.dc.html** structure: brand name (Fraunces, Grove-colored) + "In partnership with Aspen Training Centre" line, plain-text nav list, hairline top border. Reject Source B's dark full-bleed Ink-background footer with 4-column grid, bottom legal bar, and fabricated "Regional Circles" list (Ottawa/Brockville/Kingston/Lanark/Cornwall) — that content is invented and not in the Content source (see `docs/CONTENT.md`).

### Forms
Neither source ships a real form. Source B's design-system `readme.md` (Source A's underlying `_ds`) notes Input/Checkbox were *intentional additions* not shown in any style board, sized to match the Button/card patterns. Treat form fields (membership form, contact form) as: labeled text input, hairline border (`--ink-100`), 2px radius, Plum focus ring, Ink-900 label text in caption size uppercase-tracked (matching the eyebrow-label pattern already used on every Source A page header, e.g. "Who we are," "Get in touch").

---

## 5. Motion

**Agreement:** both restrained; both respect `prefers-reduced-motion` (both mockups include a media query that strips transitions/animation entirely); fast timing (120–400ms).

**CONFLICT — looping/continuous animation:** Source B's hero section includes `animate-pulse` on a status dot — a continuous, infinite-loop animation. This contradicts Source A's readme ("no motion for its own sake") and this project's own QA mandate against "distracting loops."

**CONFLICT — hover transform:** Source B lifts buttons on hover (`translateY(-2px)`) and scales hero images on hover (`scale(1.025)`); Source A's readme explicitly rules out scale/transform hover effects, using only color/fill changes and a small arrow-nudge (`translateX`) on text links.

**RECOMMENDED FINAL RULE:**
- **No infinite/looping animation anywhere** (reject `animate-pulse` and anything similar).
- **One-shot entrance only:** fade-up on load, 0.8s ease, per Source A's `eopaFadeUp` keyframe — disabled entirely under `prefers-reduced-motion`.
- **Hover:** color/fill change (both sources agree) + small arrow nudge on text links (`translateX(4–5px)`, 160–200ms, Source A's pattern) + list-row `padding-left` shift (Source A: 8px, 160ms) or subtle background tint + `translateX(4px)` (Source B's `.entry-row`, 250ms) — these two row-hover treatments are compatible; either is acceptable.
- **Reject:** image scale-on-hover, button lift-on-hover, any shadow transition.
- Transition timing: 120–250ms for micro-interactions (both sources agree on this range).

---

## 6. Information Architecture — a structural conflict, not a visual one

This is the most significant conflict between the two sources and governs how everything above gets assembled.

- **Source A** implements a real **multi-page site**: 9 distinct pages (Home, About, Membership, Team, Contact, Events, HowToJoin, Partners, PerformanceArt) plus shared Header/Footer partials, with real inter-page links (`href="About.dc.html"` etc.). Its content is a **verbatim, faithful transcription** of `Content/EO-Performance-Artists-Collective-Website-Copy.pdf` — same headings, same body copy, same placeholder/SAMPLE markers, same prices, same names.
- **Source B** implements a **single scrolling page** with in-page anchor navigation (`#what-we-do`, `#get-involved`, `#calendar`, `#contact`) and invents substantial new copy not present in the Content source: fictional pull-quotes ("Having peers who understand the realities of producing work outside Toronto or Montreal..."), fabricated regional detail ("St. Lawrence & Ottawa Valleys," "Lanark & Perth County," "Cornwall & Akwesasne"), invented calendar events with specific fake dates/venues (Nov 14 at "Brockville Public Library," Dec 04 at "Arts Court Studio · Ottawa"), a different contact email (`collective@eopa-artists.org` vs. the Content source's `info@eopacollective.ca`), and a copyright line ("© 2024–2026").

**RECOMMENDED FINAL RULE:** Adopt **Source A's multi-page IA and its content as canonical** — it is a real, complete, faithful implementation of the approved Content source. **Do not use Source B's invented copy, fabricated events, fabricated quotes, or alternate contact details under any circumstance** — using them would violate the project's own "never invent content" rule. Source B should be mined only for its **visual/interaction ideas** (see §4–5) and layered onto Source A's real page structure and real content — never adopted as a structural template.

**Resolved:** the mandated 10-page list (see `docs/CONTENT.md`) includes "Get Involved" as a standalone page, and the Content PDF itself gives it its own top-level heading (between MEMBERSHIP and TEAM) rather than nesting it under Membership. Source A's mockup nested it inside `Membership.dc.html` anyway. Implementation now follows the mandated page list and the PDF's own structure: "Get Involved" is its own route (`app/get-involved/page.tsx`), and Membership links to it rather than embedding its copy — see `docs/IMPLEMENTATION.md` Phase 6.

**Per-page composition exception:** Performance Art (§7's photography aside) is deliberately composed without the shared rail/label pattern described in §3.1 — it's a one-page exception to the site's shared layout system, made because the content itself insists this practice is categorically distinct, not a sign the rest of the IA is unsettled.

---

## 7. Photography

**Agreement (prose, both sources):** documentary, intimate, human photography; small-to-medium sizes (Source B suggests 120–550px), intentional crops; explicitly reject full-bleed generic stock photography and giant hero imagery.

**CONFLICT — what each source actually does with imagery:**
- **Source A** ships every page with an honest `<image-slot>` placeholder (e.g. "Small performance moment," "Rehearsal or workshop moment," "Portrait — Nel Coloma-Moya") and its readme states plainly: *"Imagery: none provided; no photography color grade to speak of yet."*
- **Source B**'s coded mockup fills every image slot with real image URLs pointed at a Google-hosted CDN (`lh3.googleusercontent.com/aida/...`) depicting generic "Contemporary Canadian theatre and dance artists" — imagery that was never supplied by the client, does not depict actual EOPA members, and reads as AI-generated/stock placeholder content dressed up as real documentation.

**Critical finding — the supplied photography does not match either source's photographic intent.** `Pictures/` contains exactly 7 images, and **none of them depict people, performance, rehearsal, or backstage activity.** They are all rural/agricultural Eastern Ontario landscape photography: two barn-and-silo dusk shots, one car-side-mirror sunset shot, a starling murmuration over a barn roof, and three autumn tree/road/pond shots. See `docs/ASSETS.md` for the full inventory. There is currently **no real photography of EOPA artists, performances, or events** in the supplied resources.

**RECOMMENDED FINAL RULE:**
1. **Never use Source B's stock/AI-style people photography.** It doesn't depict real EOPA members and would misrepresent the organization — a direct violation of "never invent."
2. **Follow Source A's honest placeholder approach** until real performance/portrait photography exists: clearly marked placeholder blocks, sized small/medium (per the token system in §3), captioned with what real image should eventually go there.
3. **The 7 supplied rural landscape photos may be used sparingly as regional-atmosphere accents** (e.g., one small image grounding the "Eastern Ontario" setting on Home, About, or Partners) — but must never be mislabeled or captioned as performance, rehearsal, or artist photography, since they are not that.
4. Escalate the absence of real people/performance photography as an open content gap — it blocks a genuinely "warm, human" execution of this design system until supplied.

---

## 8. Anti-patterns (explicit, from both sources + task brief)

Do not add: fake editorial metadata, FIG. 01/02 labels, fake archive numbers, fake colophons, decorative pseudo-data, generic AI-slop card grids, floating blobs/gradients, excessive pills/badges, repetitive section templates, giant full-bleed hero photography by default, drop shadows, hover-lift/scale transforms, infinite/looping animation, or stock/AI-generated "artist" photography standing in for real people.
