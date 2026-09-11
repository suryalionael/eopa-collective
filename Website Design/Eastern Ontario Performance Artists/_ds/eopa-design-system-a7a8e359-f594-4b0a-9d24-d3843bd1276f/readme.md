# EOPA Design System

Design system for the **Eastern Ontario Performance Artists Collective** (EOPA), a nonprofit collective supporting performing and visual artists across Eastern Ontario.

## Sources
- `uploads/2.png` — collective logo mark (silhouettes of a musician, painter, photographer, dancer in a green ring)
- `uploads/EOPA-Style-Board.svg` — brand style board (palette, type scale, component sketches, principles)

No codebase or Figma file was attached; this system was authored from the style board and logo alone.

## Aesthetic direction
"Artsy but not too much" — restrained, literary, not theatrical. Color is punctuation, not paint: Plum and Grove appear as small marks (links, rules, a dot), never as large fills. Generous whitespace and hairline rules do the separating, not color blocking.

## Content model
"Performance Art" is its own distinct event/artist category — kept separate from Music, Visual Arts, Literary, Film/Video, not folded into a generic "Performing Arts" umbrella.

## Content fundamentals
- Voice is plain and civic, not promotional: "The Collective exists to enhance the arts and cultural life of Eastern Ontario communities."
- Second person for calls to action ("Become a Member"), third person / descriptive for programming ("Monthly sessions — bring a poem to share or just come to listen.")
- Sentence case throughout, no exclamation points, no emoji.
- Prices and logistics stated plainly: "Basic Artist Membership — $25/year."

## Visual foundations
- **Color**: four functional colors — Ink (#262420, text), Paper (#FBFAF7, background), Plum (#5D1274, primary accent), Grove (#3A5D16, secondary accent/footer). A five-color logo-only palette (Magenta, Violet, Indigo, Gold, Amber) is reserved for the mark and never used as UI fill.
- **Type**: Fraunces (500 weight) for all headings, set smaller and lighter than a poster; Work Sans (400) for everything else. Scale: H1 40px, H2 27px, H3 20px, body 16.5px, caption 13px.
- **Spacing**: 4px base unit, used generously (24–64px section gaps typical).
- **Backgrounds**: flat Paper background throughout; no gradients, no photography, no textures, no full-bleed imagery.
- **Borders/dividers**: 1px hairline (#E4E0D8) rules separate sections; no drop shadows, no card shadows.
- **Radius**: 2px on buttons and cards — barely rounded, almost square.
- **Cards**: hairline border only, no shadow, no fill change; a small 3px accent dot (usually Gold) marks the category.
- **Buttons**: primary = filled Plum, 2px radius; secondary = ink outline, fills ink on hover; ghost = text-only Plum link, underlines on hover.
- **Hover/press**: hover darkens fill or inverts outline to filled ink; no scale/shrink effects, no bounce. Transitions are quick, linear-ish eases (120–180ms).
- **Animation**: minimal — simple fades/color transitions only, no motion for its own sake.
- **Transparency/blur**: not used.
- **Imagery**: none provided; no photography color grade to speak of yet (see Caveats).

## Iconography
No icon set, icon font, or SVG icon library was provided. The style board uses plain typographic marks (a small colored dot) instead of icons for category indicators. No emoji or unicode-as-icon usage seen. If icons are needed later, a plain single-weight line set (e.g. Lucide) matching the restrained aesthetic is the safest default — flag any icon addition as a substitution until real assets arrive.

## Logo
`assets/logo.png` — full-color mark, silhouettes of four performing/visual artists inside a Grove-green ring. This is the collective's only saturated visual element; never re-color, flatten, or recreate it. No standalone vector/transparent version was provided (see Caveats).

## Components
- **Button** (`components/forms/Button.jsx`) — primary / secondary / ghost variants
- **Input** (`components/forms/Input.jsx`) — labeled text field with error state
- **Checkbox** (`components/forms/Checkbox.jsx`) — filled square checkbox, used for category filters

### Intentional additions
Input and Checkbox are not shown in the style board; they were added because a membership/signup flow needs them. Sized and styled to match the Button and card patterns the style board does define.

## Index
- `styles.css` — root stylesheet, imports all tokens
- `tokens/` — colors.css, typography.css, spacing.css, effects.css
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/forms/` — Button, Input, Checkbox
- `assets/logo.png` — collective logo
- `thumbnail.html` — project thumbnail

## Caveats
- No transparent/vector logo file — only a flattened PNG on a white background.
- No icon set provided.
- No UI kit / screen recreations yet (no codebase or Figma was attached to build them from).
