---
name: Ouzy Maulana
description: Two-panel developer profile on a warm near-black ground, lit by one sogan gold taken from the owner's batik shirt.
colors:
  sogan-gold: "#e0b45c"
  night: "#0f0e0c"
  line: "#2a2722"
  head: "#e9e4da"
  body: "#a8a196"
  dim: "#85807a"
  screen-plate: "#ffffff"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.75rem)"
    fontWeight: 200
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  display-strong:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 200
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  role-line:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75rem
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25rem
  stack-line:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5rem
  label:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1rem
    letterSpacing: "0.025em"
  counter:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25rem
    fontFeature: "tnum"
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  gutter-mobile: "24px"
  gutter-tablet: "48px"
  gutter-desktop: "96px"
  card-rule-inset: "20px"
  list-gap: "48px"
  section-gap-mobile: "64px"
  section-gap-desktop: "144px"
components:
  contact-button:
    backgroundColor: "transparent"
    textColor: "{colors.sogan-gold}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
  contact-button-hover:
    backgroundColor: "{colors.sogan-gold}"
    textColor: "{colors.night}"
  lightbox-control:
    backgroundColor: "transparent"
    textColor: "{colors.head}"
    rounded: "{rounded.md}"
    size: "44px"
  lightbox-control-hover:
    textColor: "{colors.sogan-gold}"
  featured-screen:
    backgroundColor: "{colors.screen-plate}"
    rounded: "{rounded.md}"
  thumb:
    backgroundColor: "{colors.screen-plate}"
    rounded: "{rounded.sm}"
  stack-line:
    textColor: "{colors.sogan-gold}"
    typography: "{typography.stack-line}"
  nav-item:
    textColor: "{colors.dim}"
    typography: "{typography.body-sm}"
  nav-item-active:
    textColor: "{colors.head}"
  social-icon:
    textColor: "{colors.dim}"
    size: "44px"
  social-icon-hover:
    textColor: "{colors.sogan-gold}"
---

# Design System: Ouzy Maulana

## Overview

**Creative North Star: "The Sogan Lamp"**

A warm, dark room with one lamp. The ground is a brown-black taken from the shadows of a batik sogan shirt, the text is unbleached cloth, and a single gold, the gold of the sogan motif, marks everything that is live: links on hover, the active section, the stack lines, the closing email, the cursor's pool of light. Identity and navigation stay fixed on the left while the work scrolls on the right, so a recruiter always knows who and where.

The world is quiet and dense in the way a well-kept record is: hairline rules, small mono labels, flat surfaces, real product screens set on white plates. Its one ornament is real: a crop of the owner's batik shirt, used as a fixed selvedge strip down the left edge on desktop and as a band across the top on mobile. Nothing else is decorative.

Structure follows a user-pinned two-panel reference; palette, type, imagery and component details do not, and must not drift back toward it (no navy/teal, no pill tags, no sibling dimming).

**Key Characteristics:**
- Warm near-black ground, cloth-coloured text, one gold accent.
- Two fixed/scrolling panels on desktop; one column with sticky section labels on mobile.
- Name set in weight contrast: extralight over semibold, same size.
- Flat surfaces separated by 1px hairlines; the only glow is the cursor spotlight.
- Real batik raster as the only ornament; real app screens as the main imagery.

## Colors

A warm, low-chroma dark palette with a single saturated gold.

### Primary
- **Sogan Gold** (sogan-gold): the only accent. Hover state of every link and bordered control, the active nav dot, the status dot, highlight dashes, slash-separated stack lines, the contact button, text selection and the focus outline. The spotlight uses it at 7% alpha.

### Neutral
- **Sogan Night** (night): page ground, sticky section label backing, selection text, thumb overflow veil (75%) and the dialog backdrop (96%).
- **Hairline** (line): every border and rule: card left rules, image frames, lightbox controls, the section divider, the scrollbar thumb, the batik strip's edge.
- **Unbleached Cloth** (head): headings, the name, company and school names, inline emphasis, link rest colour.
- **Warm Sand** (body): running text.
- **Faded Ink** (dim): dates, mono labels, inactive nav, social icons at rest, footer.
- **Screen Plate** (screen-plate): white backing behind app screenshots only, so light UI captures sit on their own colour rather than bleeding into the dark ground.

### Named Rules
**The One Lamp Rule.** Gold is the only hue. It marks what is live or current, never large fills; the contact button's hover fill is the single place it covers an area.

**The Hairline Rule.** Separation is a 1px line in the hairline colour, never a tint change or shadow.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui)
**Body Font:** Geist Variable
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular, Menlo)

Both families are self-hosted through Fontsource.

**Character:** A neutral grotesque that does its expressive work through weight contrast rather than a display face; the mono carries all metadata so dates and stacks read as data.

### Hierarchy
- **Display** (200 over 600, clamp(3rem, 6vw, 4.75rem), 0.92, -0.04em): the name only, first name extralight stacked over surname semibold.
- **Headline** (200 with 600 emphasis, clamp(1.75rem, 3vw, 2.5rem), tight, -0.03em): the closing contact question, same weight-contrast device as the name.
- **Role line** (400, 1.125rem): the job title under the name.
- **Title** (500, 1rem, 1.375): card headings (role · company, project names), in head colour.
- **Body** (400, 1rem, 1.65): About copy and the page default. Pretty wrapping on paragraphs, balanced on headings.
- **Body small** (400, 0.9375rem, 1.65): card summaries, highlights, stack definitions, nav labels.
- **Small** (400, 0.875rem): figcaption, status line, project source links, footer, mobile section labels (600).
- **Stack line** (Mono 400, 0.75rem, 1.5rem leading): slash-separated technologies in gold.
- **Label** (Mono 400, 0.75rem, uppercase, 0.025em to 0.05em): dates, stack category terms, the "+N more" toggle, in dim.
- **Counter** (Mono 400, 0.875rem, tabular figures): lightbox position and the "+N" thumb veil.

### Named Rules
**The Weight Contrast Rule.** Large type pairs 200 with 600 at one size; it never changes family or size for emphasis.

**The Mono Is Data Rule.** Mono is used only for dates, labels, stacks and counts, never for prose or headings.

## Layout

Desktop (lg, 1024px+): a centred container (max 1280px, 96px side gutters) splits into a sticky identity panel (46% width, full viewport height, 96px vertical padding, content top and socials bottom) and a scrolling main column (52%). A fixed 28px batik strip with a hairline right edge sits on the far left, outside the container.

Tablet and mobile: a single column with 48px (md) or 24px gutters. A 48px batik band runs across the top. Section labels become sticky bars (night background, hairline bottom, gold 6px dot) bleeding to the gutters; on desktop they are visually hidden but kept for screen readers.

Rhythm: sections separate by 64px / 96px / 144px (mobile / md / lg). Card lists stack at 48px. Cards use an eight-column grid from sm up: two columns for the date, six for content, 24px gap. About pairs copy with a 12rem portrait column. Scroll offsets clear the sticky labels (64px mobile, 96px desktop).

## Elevation & Depth

Flat. No box-shadows anywhere. Depth comes from two sources only: the cursor spotlight, a 640px radial pool of gold at 7% alpha that fades to transparent at 75%, drawn on a fixed layer beneath the content; and the modal backdrop, night at 96% opacity, which nearly blacks out the page behind the lightbox.

### Named Rules
**The Single Glow Rule.** The spotlight is the only light effect. It runs on fine pointers only and is skipped entirely under reduced motion, leaving the page fully flat.

## Shapes

Small, quiet corners. 6px (md) for the larger framed objects: the featured screen, portrait, lightbox frame and controls, the contact button. 4px (sm) for small framed images (thumbs, project thumbnails), the skip link, and the focus outline's corner. Full rounding is reserved for dots: the nav marker, status dot and section-label dot. Everything framed carries a 1px hairline border. The highlight bullet is a 12px by 1px gold dash, not a dot or glyph.

## Components

### Identity panel
The fixed left half. Name (display), role line, gold stack line, status line with an 8px gold dot ("Currently at ..."), the dot nav, and a row of four 44px social icon targets (24px stroked SVG, dim at rest, gold on hover).

### Navigation (dot nav)
Desktop only. Each item is a 6px dot plus a body-small label. Inactive: dot dim at 50% scale, label dim. Hover: dot scales to 100%, label to head. Active (scroll-spied): dot gold at 100%, label head, aria-current set. Dot transition 300ms.

### Featured screen
Opens the main column: a real product screen in a 6px-radius white plate with a hairline border, 16:10, cropped top-left. The whole plate is a button that opens the lightbox. Hover: border turns gold, image scales to 1.02 over 700ms on the expo ease-out. The caption below pairs a small-text line with a gold mono count.

### Experience card
Content block with a 1px hairline left rule and 20px inset. Rule turns gold on hover (300ms). Date in a dim mono label column, then title (role · company, the company an external link with a 14px arrow that nudges up-right on hover), body-small summary, highlights, stack line, thumbs.

### Highlights disclosure
First three items shown, each a gold 12px dash, a head-coloured term, then the description at body-small. A mono uppercase dim "+ N more" / "Show less" toggle (44px tall target, gold on hover, aria-expanded).

### Stack line
Technologies joined by " / " in gold mono at 0.75rem. Never chips or pills.

### Thumbs grid
Four columns, 8px gap, 16:10 tiles on white plates with a 4px radius and hairline border. Hover: border gold, image scales to 1.05 over 500ms expo ease-out. When more screens exist, the fourth tile carries a night/75% veil with "+N" in mono.

### Lightbox dialog
Native modal dialog, up to 1200px or 94vw. Header row: mono counter ("Company · 3 / 8") and three 44px hairline-bordered 6px-radius controls (previous, next, close; head icons, gold border and icon on hover). Screen sits in a white, 6px, hairline-framed plate capped at 78vh, scrolling for tall captures. Caption below in head. Arrow keys step, Esc and backdrop click close, focus is trapped by the browser.

### Project card
Same left-rule card as experience, with a thumbnail in the two-column slot (4px radius; its border warms to gold at 50% on hover). Title link with arrow, body-small description, optional source links with GitHub icon, stack line.

### Contact
Headline in weight contrast, one line of body copy, then the only bordered button: 48px tall, 24px horizontal padding, 6px radius, gold border and text; hover fills gold with night text. Arrow icon nudges up-right. Footer in dim small text.

### Links
Inline links rest in head and turn gold over 200ms. Focus everywhere is a 2px gold outline, 3px offset, 4px corner.

## Do's and Don'ts

### Do:
- **Do** keep gold as the only hue and use it for live or current state, stacks and the contact action.
- **Do** separate content with 1px hairlines and a gold-on-hover left rule, never with shadows or tinted panels.
- **Do** set large type as 200 against 600 at one size with negative tracking (-0.04em display, -0.03em headline).
- **Do** put product screenshots on white plates with a hairline border, 16:10, cropped top-left.
- **Do** gate the spotlight to fine pointers with no reduced-motion preference.
- **Do** keep every interactive target at least 44px.

### Don't:
- **Don't** render stacks as pills or chips; they are slash-separated gold mono lines.
- **Don't** dim sibling cards on hover.
- **Don't** add box-shadows or glows beyond the cursor spotlight.
- **Don't** introduce a second accent or the reference's navy and teal.
- **Don't** use the batik as a generated or vector pattern; only real crops of the shirt photo.
- **Don't** set prose or headings in mono.
