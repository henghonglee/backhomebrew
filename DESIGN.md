---
version: alpha
name: Back Home Brew — Editorial Onyx
description: Cinematic, magazine-grade dark editorial system for a home-based, hand-roasted coffee brand. Big italic display type, onyx/bone/mustard palette, sharp corners, edge-to-edge grids.
colors:
  primary: "#0E0E0E"
  secondary: "#ECE4D3"
  tertiary: "#D4A017"
  neutral: "#1A1A1A"
  surface: "#0E0E0E"
  surface-warm: "#ECE4D3"
  surface-accent: "#D4A017"
  on-surface: "#ECE4D3"
  on-surface-warm: "#0E0E0E"
  on-surface-muted: "rgba(236, 228, 211, 0.72)"
  on-surface-soft: "rgba(236, 228, 211, 0.86)"
  divider-dark: "#2A2A2A"
  divider-on-onyx: "rgba(236, 228, 211, 0.20)"
  divider-on-bone: "rgba(14, 14, 14, 0.18)"
  bone-shade: "#D8CFBA"
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 15rem
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: -0.06em
  display-section:
    fontFamily: Playfair Display
    fontSize: 9rem
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: -0.06em
  display-chapter:
    fontFamily: Playfair Display
    fontSize: 8rem
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: -0.06em
  headline-card:
    fontFamily: Playfair Display
    fontSize: 3.2rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.04em
  headline-cell:
    fontFamily: Playfair Display
    fontSize: 2.6rem
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.03em
  brand-mark:
    fontFamily: Playfair Display
    fontSize: 3rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.06em
  body-lg:
    fontFamily: Inter
    fontSize: 1.3rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 1.05rem
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: Inter
    fontSize: 0.9rem
    fontWeight: 400
    lineHeight: 1.65
  eyebrow:
    fontFamily: Inter
    fontSize: 0.85rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0.2em
  label-section:
    fontFamily: Inter
    fontSize: 0.78rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0.2em
  label-meta:
    fontFamily: Inter
    fontSize: 0.72rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: 0.16em
  nav-link:
    fontFamily: Inter
    fontSize: 0.76rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: 0.16em
  nav-brand:
    fontFamily: Inter
    fontSize: 1.1rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: 0.08em
  button:
    fontFamily: Inter
    fontSize: 0.78rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0.12em
rounded:
  none: 0
  sm: 0
  md: 0
  lg: 0
  full: 9999px
spacing:
  base: 16px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  gutter: 0
  page-pad-min: 20px
  page-pad-max: 96px
  section-pad-min: 64px
  section-pad-max: 144px
  card-pad-min: 20px
  card-pad-max: 32px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 1rem 1.35rem
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 1rem 1.35rem
  button-ghost-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
  nav-link:
    textColor: "{colors.secondary}"
    typography: "{typography.nav-link}"
  nav-link-hover:
    textColor: "{colors.tertiary}"
  cart-pill:
    backgroundColor: "rgba(236, 228, 211, 0.08)"
    textColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    padding: 0.5rem 1rem
  cart-pill-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
  menu-card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 2rem
  visit-cell:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    padding: 2rem
  chapter-art:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.none}"
  pull-quote:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
  hero-eyebrow:
    textColor: "{colors.tertiary}"
    typography: "{typography.eyebrow}"
---

# Back Home Brew — Landing Page Design System

## Overview

Back Home Brew is a home-based, hand-roasted coffee shop. The landing page reads less like a product site and more like a magazine feature — a cinematic, three-chapter narrative (Origin → Craft → Community) that lets the story do the selling.

The aesthetic is **editorial onyx**: deep near-black canvas, warm bone cream, and a single saturated mustard accent. Display type is enormous, italic, and confident — the page is paced like a printed essay, with full-bleed sections, oversize section headings, and a strong horizontal rhythm. Body type stays quiet and neutral so the display can shout.

The mood is intimate but premium. It should feel like the front matter of a small-batch periodical — slow, considered, hand-made. Avoid anything that signals SaaS, e-commerce template, or generic café: no soft drop shadows, no rounded cards, no playful icons, no gradients used as decoration on content.

## Colors

The palette is a tight three-tone system. Onyx is the primary canvas; bone is the warm relief; mustard is the only accent — used sparingly and with intent.

- **Primary — Onyx (#0E0E0E):** A near-black with a faint warm cast. The dominant background for the hero, chapter sections, visit grid, and footer. Carries the brand's quiet, after-hours feeling.
- **Secondary — Bone (#ECE4D3):** A warm cream that serves two roles: as foreground text on onyx, and as a full-bleed background for the menu strip — a tonal palate cleanser between the dark chapters and the mustard pull-quote.
- **Tertiary — Mustard (#D4A017):** The single accent. Reserved for the italic display word in each headline (`<em>`), the eyebrow labels, the section number labels (Origin / Craft / Community), the primary CTA fill, the pull-quote background, the cart count badge, and the scroll-cue tick. Never used as body color or as a wash on neutral surfaces.
- **Neutral — Onyx Soft (#1A1A1A):** A slightly lifted onyx used for chapter art panels, providing tonal separation without changing perceived hue.
- **Divider on onyx:** `rgba(236, 228, 211, 0.20)` — bone at 20% for hairlines on dark surfaces (chapter meta, visit grid, header bottom border).
- **Divider on bone:** `rgba(14, 14, 14, 0.18)` — onyx at 18% for hairlines on bone surfaces (menu card price rule).

Body-text variants on onyx use bone at descending opacities — `0.86` for hero lede, `0.80` for chapter body, `0.72` for meta and footer.

## Typography

Two typefaces, one display, one body — and the contrast between them carries the brand voice.

- **Display — Playfair Display:** Used for every headline, section title, brand mark, and the giant background numerals on chapter art panels. Always at weight **900**, with tight negative letter-spacing (`-0.06em`) and very tight line-height (`0.92–0.95`). Each headline contains exactly one italic word wrapped in `<em>`, set in mustard — this is the brand's signature typographic gesture and the only place italic is used in the display.
- **Body — Inter:** Used for all running prose, navigation, eyebrows, labels, buttons, metadata, and the brand mark in the navbar. Weights range from **400** (long-form body) to **800–900** (eyebrows, labels, buttons, brand). Body prose has generous line-height (`1.7–1.85`) and stays at natural sentence case. Labels and buttons are uppercase with `0.12–0.22em` tracking — the more administrative the role, the wider the tracking.

Display sizes are fluid and dramatic. The hero headline scales up to **15rem**, chapter and section headings to **8–9rem**, the pull-quote to **9rem**. There is intentionally no mid-tier display size — the page jumps from massive headline to body, with no compromise step. This produces the magazine-feature pacing.

The pull-quote also uses Playfair italic at full weight — the only place italic display escapes the `<em>` rule, because the entire quote is treated as one italic gesture.

## Layout

The page is **edge-to-edge**, not centered in a max-width container. Horizontal padding is fluid: `clamp(1.25rem, 6vw, 6rem)` on most sections, expanding to `clamp(1.25rem, 8vw, 8rem)` on the pull-quote for breathing room. Vertical section padding is `clamp(4rem, 8–9vw, 7–8rem)`.

The composition is built from a small set of patterns:

- **Hero:** full viewport (`min-height: 100vh`), background image with grayscale + brightness reduction and a layered onyx gradient overlay, eyebrow top-left, headline + lede center-left, actions bottom-left, vertical "scroll" cue right.
- **Chapter sections:** asymmetric two-column grid (`0.92fr 1.08fr`) with text on one side and a generative art panel on the other. The middle chapter (Craft) reverses the order via `order: -1` on its art panel — a deliberate zig-zag rhythm.
- **Menu strip & visit grid:** strict bordered grids with **no gutter**. Cells share 1px borders (onyx hairlines on bone, bone-at-20% hairlines on onyx). The menu is a 3-column grid; the visit block is a 4-column grid. Each cell has its own internal padding.
- **Pull-quote:** full-bleed mustard panel with a giant decorative `"` glyph at 18% opacity bleeding off the top-left.

Spacing follows a loose 4/8/16/24/40/64/96 scale, but most spatial decisions are expressed via `clamp()` to flow between mobile and desktop without breakpoints. The mobile breakpoint at **880px** collapses every multi-column grid to a single column and shrinks display sizes to `clamp(3rem, 15vw, 5.5rem)`.

## Elevation & Depth

This system is **flat by conviction**. There are no drop shadows on cards, buttons, or navigation. Depth is conveyed exclusively through:

1. **Tonal layering** — onyx (#0E0E0E) → onyx-soft (#1A1A1A) for chapter art panels. The shift is subtle and reads as architectural, not decorative.
2. **Full-bleed color blocks** — the page's vertical rhythm is built from contrasting horizontal bands: onyx hero → onyx chapters → bone menu → mustard pull-quote → onyx visit → onyx footer. Each band is a depth event.
3. **Hairline borders** — 1px lines (onyx on bone, bone-at-20% on onyx) define grid cells and section boundaries. They replace the role that shadows play in conventional UI.
4. **Inset glow on art panels** — the Craft art panel uses `inset 0 0 9rem rgba(0, 0, 0, 0.58)` to vignette inward. This is the only place inset shadow is used; it reads as photographic vignette, not UI elevation.

The fixed header uses a translucent onyx (`rgba(14, 14, 14, 0.62)`) with backdrop blur and a single bone-at-16% bottom hairline — no shadow.

## Shapes

The shape language is **uniformly sharp**. Every interactive element, every card, every grid cell, every button has a **0px corner radius**. There are no exceptions on the landing page surface. The cart count badge inherits the legacy circular pill from the shared header, but on the home body it is restyled to a sharp mustard square.

Curvature appears only as **typographic and illustrative form** — the italic Playfair `<em>` words, the giant bleed numerals on chapter art (01, 02, 03 in outline italic), and the radial-gradient "lens" motifs inside chapter art panels. These curved forms read as content, not chrome.

The brand's softness comes from color warmth (bone, mustard) and from the editorial pacing — not from rounded geometry.

## Components

### Buttons

Two variants, both sharp-cornered, both uppercase, both 1px-bordered.

- **Primary:** mustard fill, onyx text, mustard 1px border. Hover swaps to bone fill with onyx text and a `translateY(-2px)` lift. Used for the single most important action on each section (Order a cup, Get directions).
- **Ghost:** transparent fill, bone text, bone 1px border (`currentColor`). Hover swaps to bone fill with onyx text. Used for the secondary action (Read the story).

Padding is `1rem 1.35rem`. Type is Inter 0.78rem, weight 900, tracking 0.12em, uppercase. Buttons are inline, never full-width on desktop; on mobile under 520px they expand to full width.

### Navigation

Top-fixed, translucent onyx with backdrop blur. Brand mark on the left (Inter 800, uppercase, with the small house SVG glyph in mustard). Nav links and cart pill on the right. Links are uppercase Inter 0.76rem at 800 weight with 0.16em tracking; hover and active state shift to mustard. The cart pill is a sharp bone-at-8% rectangle that fills mustard on hover.

### Eyebrows & Section Labels

The brand's signature small-type element. Inter, weight 900, tracking 0.2em, uppercase, mustard. The hero eyebrow is prefixed with `--` ("-- EST. 2024..."). Chapter numbers (Origin / Craft / Community) and visit cell labels (Hours / Address / Talk to us / Payment) follow the same recipe at slightly tighter tracking (0.18–0.22em). These labels are how the page maintains editorial structure without iconography.

### Menu cards

Bone background, onyx text, sharp corners, no shadow, no hover lift. Each card carries a mustard `N°01` numeral label, a Playfair 900 dish name, an Inter body description, and a bottom price row separated by a 1px hairline (onyx at 18%). The price row is uppercase 0.78rem with the BTC amount in bolder 0.95rem. Cells share borders with the grid — the card is the cell.

### Visit cells

Onyx background, bone text, sharp corners. Mustard label at top, large Playfair 900 headline, Inter body lines. Same edge-shared-border pattern as menu cards.

### Pull-quote

Full-bleed mustard panel. Quote in Playfair 900 italic at hero-scale (up to 9rem), max-width 13ch — designed to wrap dramatically. The `<em>` word inside the quote inverts to onyx (the only place mustard-on-mustard is resolved by switching the accent to primary). Decorative `"` glyph at 18% opacity bleeds top-left. Attribution and three-dot pagination follow in uppercase Inter labels. Dots are 0.75rem onyx-bordered squares — sharp, never circular.

### Chapter art panels

Generative compositions built from CSS gradients (no images). Each panel uses a different geometric motif — concentric rings (Origin), light beam over hatched fill (Craft), three solid circles in mustard/bone/mustard (Community) — and is signed with a giant outlined Playfair italic numeral (01, 02, 03) bleeding off the bottom-right corner. Min-height `34rem` desktop, `24rem` mobile.

## Do's and Don'ts

- **Do** wrap exactly one word per headline in `<em>` and let it land in mustard — this is the brand's typographic signature.
- **Do** use mustard as a *spotlight*, not a *wash*. Reserve it for: italic display words, eyebrows, section number labels, the primary CTA, the pull-quote panel, the cart count, the scroll-cue tick.
- **Do** keep grids edge-to-edge with shared 1px borders and zero gutter. The hairline grid is the page's structural voice.
- **Do** use `clamp()` for all display sizes and section padding so the page flows between viewports without snap.
- **Do** maintain the onyx → bone → mustard → onyx vertical band rhythm. Each section is a depth event.
- **Do** test contrast: bone (#ECE4D3) on onyx (#0E0E0E) clears WCAG AAA; mustard (#D4A017) on onyx clears AA for large text — never use mustard on onyx for body copy.
- **Don't** add corner radii to anything on the landing page. Sharp is the rule, not a default.
- **Don't** add drop shadows to cards, buttons, or panels. Depth comes from tone and hairlines.
- **Don't** introduce a third typeface. Playfair Display + Inter is the entire system.
- **Don't** center body copy or constrain it to a narrow column unless it's a hero or pull-quote. Editorial pages set body to a generous left-aligned `42rem` measure.
- **Don't** use mustard as a body or fill color on neutral surfaces — it loses its accent power instantly.
- **Don't** mix the legacy rounded café aesthetic (Raleway uppercase headings, rounded pill buttons, soft shadows) into `body.home`. The home body is its own scoped system; the legacy styles belong to other pages.
- **Don't** use icons in place of labels in section navigation. Uppercase Inter labels carry the editorial voice.
- **Don't** animate aggressively. The only motion is the hero parallax (background-position drift on scroll) and the pull-quote dot rotation (2.8s interval). Both respect `prefers-reduced-motion`.
