---
name: Ouzy Maulana
description: Frontend developer portfolio set as a quiet, typeset record on a cool stone-white page.
colors:
  ink: "#15161a"
  accent: "#2b3a8c"
  paper: "#f5f5f2"
  plate: "#ffffff"
  graphite: "#55575d"
  quiet: "#6c6e73"
  rule: "#dddcd6"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  closing:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)"
    fontWeight: 350
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  contact-link:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 2rem)"
    fontWeight: 350
    lineHeight: 1.6
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.4vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  summary:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.625
  index:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  focus: "2px"
  button: "3px"
spacing:
  row: "1rem"
  row-lg: "1.25rem"
  gutter: "2rem"
  page-x-sm: "1.25rem"
  page-x-md: "2rem"
  page-x-lg: "3rem"
  section-sm: "6rem"
  section-md: "8rem"
  section-lg: "10rem"
  container: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: "2.75rem"
  text-link-hover:
    textColor: "{colors.accent}"
  nav-link:
    textColor: "{colors.graphite}"
    typography: "{typography.body-sm}"
    padding: "0 0.875rem"
    height: "2.75rem"
  nav-link-hover:
    textColor: "{colors.ink}"
  header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "4rem"
  career-index-row:
    textColor: "{colors.ink}"
    typography: "{typography.index}"
    padding: "1.25rem 0"
  career-index-row-hover:
    textColor: "{colors.accent}"
  ledger-row:
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
    padding: "1rem 0"
  project-plate:
    backgroundColor: "{colors.plate}"
  carousel-control:
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    size: "2.75rem"
  carousel-control-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  carousel-slide:
    backgroundColor: "{colors.plate}"
    height: "clamp(210px, 28vw, 400px)"
  carousel-caption:
    textColor: "{colors.graphite}"
    typography: "{typography.body-sm}"
  disclosure-toggle:
    textColor: "{colors.graphite}"
    typography: "{typography.body-sm}"
    height: "2.75rem"
  disclosure-toggle-hover:
    textColor: "{colors.accent}"
---

# Design System: Ouzy Maulana

## Overview

**Creative North Star: "The Typeset Record"**

The page reads like a well-set professional record: a cool stone-white sheet, near-black ink, and one family of type doing all the work. Elegance comes from scale, measure and spacing rather than from ornament. A very large, light, tightly tracked display sits against generous whitespace; everything below it is organised by 1px hairlines into indexes and ledgers that a recruiter can scan in seconds.

Density is low and deliberate. Structure is carried by a 12-column grid, sticky section titles in the left three columns, and horizontal rules; there are no cards, panels, shadows, pills or tinted fills. Colour is almost absent: one deep ink-blue appears only as a response to interaction (hover, focus). The portrait and project screenshots are shown natural, untreated.

Motion is a quiet signature built from one gesture, the hairline drawing left to right. On load the hero lines rise and fade in with a staggered expo ease and the career-index rules draw; further down, each ledger row's hairline draws as it scrolls into view, and each screen carousel fades up once. Scroll-driven motion only runs where view timelines are supported; reduced motion renders every final state with no animation. The world explicitly refuses both the dark-mode developer template and the cream-ground, italic-serif, terracotta editorial default.

**Key Characteristics:**
- Cool stone-white ground, near-black ink, graphite and quiet greys for secondary text.
- One variable grotesque (Bricolage Grotesque, optical-size axis) for every role; weight falls as size rises.
- Hairline rules and whitespace instead of containers.
- One accent, ink-blue, reserved for interaction states.
- Tabular numerals for every date and year.
- Rule-draw (on load in the hero, on scroll in ledgers), the hero rise and one carousel fade as the only signature motion.

## Colors

A near-monochrome stone-and-ink palette with a single cold blue that only appears when the visitor acts.

### Primary
- **Ink** (#15161a): All primary text, headings, the filled "Email me" button, the selection highlight background, and the heavier rule that opens the contact footer.

### Secondary
- **Ink Blue** (#2b3a8c): Interaction only. Link hover colour, primary-button hover fill, career-index company hover, and the 2px focus outline.

### Neutral
- **Stone Paper** (#f5f5f2): The page ground and the sticky header fill; also the button label and selection text colour.
- **Screenshot Plate** (#ffffff): Pure white behind project screenshots only, inside a hairline border, so app captures sit on their own neutral.
- **Graphite** (#55575d): Secondary text: roles, periods, definitions, nav links at rest, availability line.
- **Quiet Grey** (#6c6e73): Tertiary text: captions, stack lists, small group labels ("Stack", "Education", "Earlier"), copyright.
- **Hairline** (#dddcd6): Every 1px rule and border, the at-rest underline colour of text links, and the scrollbar thumb.

### Named Rules
**The One Blue Rule.** Ink Blue never appears at rest. It is a state colour: hover, focus, and nothing else. No blue fills, blue headings or blue decoration.

**The No Tint Rule.** Surfaces are Stone Paper or, for screenshots only, the white plate. No tinted panels, gradients or coloured section bands.

## Typography

**Display Font:** Bricolage Grotesque Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Bricolage Grotesque Variable (same family)

**Character:** One self-hosted variable grotesque with `font-optical-sizing: auto`, so the opsz axis tightens and thins the large sizes and opens the small ones. Display sizes run light (300) and tightly tracked; text sizes run regular; medium (500) is reserved for small emphasis.

### Hierarchy
- **Display** (300, clamp(3.5rem, 8vw, 6rem), 0.95, -0.04em): The hero name, set one word per line.
- **Closing** (300, clamp(2.5rem, 6vw, 5rem), 1.02, -0.035em): The contact footer question, max 16ch.
- **Headline** (300, clamp(2.5rem, 4vw, 3.5rem), 1, -0.03em): Section titles, sticky in the left three columns on large screens.
- **Lede** (350, clamp(1.375rem, 2.2vw, 1.875rem), 1.3, -0.015em): The one-sentence hero statement, max 30ch.
- **Contact Link** (350, clamp(1.25rem, 3vw, 2rem), -0.015em): The large email address in the footer.
- **Title** (400, clamp(1.625rem, 2.4vw, 1.875rem), 1.25, -0.025em): Employer names in Experience.
- **Title Small** (400, 1.5rem, 1.25, -0.02em): Project names.
- **Summary** (400, 1.1875rem, 1.625): The one-paragraph role summary, max 58ch.
- **Index** (500, 1.125rem, -0.01em): Company names in the hero career index.
- **Body** (400, 1.0625rem, 1.6): Base text, definitions, links and buttons. Measures cap at 52 to 60ch.
- **Body Small** (400 or 500, 0.95rem): Header brand (500, -0.01em), nav links, and the notes under earlier roles.
- **Label** (400 or 500, 0.875rem): Captions, stack lists, copyright, and small group labels in sentence case (500).

### Named Rules
**The Light At Scale Rule.** Weight falls as size rises: 300 for display and headline, 350 for lede, 400 for titles and text, 500 only for small emphasis. Never set a large size heavy.

**The Tabular Dates Rule.** Every date, period and year uses tabular numerals so columns of years align.

**The Sentence Case Rule.** Group labels are small, medium-weight, sentence case in Quiet Grey. No uppercase tracking, no labels floating above headings.

## Layout

A centred container capped at 1360px with side padding of 1.25rem, 2rem from 640px, and 3rem from 1024px. Inside it, a single column on small screens becomes a 12-column grid at 1024px with a 2rem column gutter. Sections open with 6rem of top space, 8rem from 640px and 10rem from 1024px; the contact footer opens wider (8rem, then 11rem).

Each section puts its headline in columns 1 to 3 (sticky at 6rem from the top on large screens) and its content in columns 4 to 12. The hero splits 7 columns of text against a 4-column portrait starting at column 9, with the career index spanning the full width beneath. Lists and ledgers use fixed label columns (13rem in Experience, 9rem in Stack) beside a fluid value column, collapsing to stacked rows on small screens. Projects run as a two-column grid from 640px with the first project spanning both. Screen carousels are the one element allowed past the container: their track bleeds to the right viewport edge (cancelling the page padding, and at 1024px up the full gutter outside the 1360px container), while the first slide stays aligned to the content column. The body clips horizontal overflow (`overflow-x: clip`) so the bleed never creates page-level sideways scroll.

Row rhythm is 1rem vertical padding for ledger rows and 1.25rem for index and earlier-role rows. The sticky header is 4rem tall; in-page anchors scroll with 5rem of top padding. All interactive targets are at least 2.75rem tall (3rem for the primary button).

## Elevation & Depth

The system is completely flat. There are no shadows anywhere; depth comes only from the sticky header's paper fill and hairline bottom border sitting over the scrolling page, and from the white plate behind screenshots.

### Named Rules
**The Hairline Structure Rule.** Structure is drawn, not stacked: 1px Hairline rules separate rows, frame screenshots and underline the header. Only one rule is heavier in tone, the Ink rule that opens the contact footer.

## Shapes

Square by default. The only radii are a barely-softened 3px on the primary button and the carousel controls, and 2px on the focus outline. Images, plates, slides and rows have hard corners. The carousel's previous/next controls are 44px squares (2.75rem) with that 3px radius and a 1px Hairline border. Icons are thin 1.75-stroke line drawings: the arrow at 0.8em after outbound and action links, and a 16px chevron in the carousel controls and the disclosure toggle.

## Components

### Buttons
Quiet and solid; there is one.
- **Shape:** Barely softened corners (3px).
- **Primary:** Ink fill with Stone Paper label, 1.5rem horizontal padding, 3rem minimum height, label followed by the arrow icon; full width below 640px.
- **Hover / Focus:** Fill shifts to Ink Blue over 200ms; presses down 1px when active; 2px Ink Blue focus outline at 3px offset. On hover the trailing arrow nudges 2px up and right over 300ms.

### Text Links
- **Style:** Underlined in Hairline at 1px thickness with 0.3em offset; text in the inherited colour.
- **Hover:** Underline takes the current colour and text turns Ink Blue over 250ms.
- Outbound links carry the trailing arrow icon and a 2.75rem minimum target.

### Navigation
- **Style:** Sticky 4rem header on Stone Paper with a Hairline bottom border. Name at left in Body Small medium; three section links at right in Body Small Graphite, turning Ink on hover. Same layout on mobile with tighter link padding.

### Career Index
The hero's signature: a full-width ordered list of employer rows, each opened by a Hairline that draws from left to right on load (1.1s expo ease, staggered 120ms per row). Company in Index type, role in Graphite (hidden below 640px), years right-aligned in tabular Graphite. On row hover the company turns Ink Blue and an Ink Blue arrow (rotated 45 degrees to point right) slides in after the years: absolutely positioned and out of flow, so it never shifts the grid, fading from 0 and moving 4px over 300ms; hidden below 640px.

### Ledger
Definition lists and lists bounded by a top Hairline, with a Hairline under every row. Term in medium Body Ink, value in Graphite, in a fixed-width label column beside a fluid column. Each row's bottom Hairline is drawn as a pseudo-element so it can draw left to right (scaleX from 0, origin left, linear so scroll sets the pace) on the row's own view timeline, from the moment the row has fully entered until it covers 35% of the viewport (entry 100% to cover 35%), so the line draws while the row sits in the lower third. Without view-timeline support, or under reduced motion, the rule is simply present.

### Project Plate
Screenshot on the white plate inside a 1px Hairline border, clipped, at the capture's own aspect ratio. On hover the image scales to 1.02 over 700ms with the expo ease. Below: Title Small name, Graphite description, Label stack in Quiet Grey, and source links.

### Screen Carousel
Employer app screens, one carousel per role, sitting above that role's shipped list. A horizontal scroll-snap track (mandatory, snapping to slide start, 1.25rem gap, thin Hairline scrollbar) that bleeds to the viewport edge (see Layout). Native scroll does the work; the two square controls only nudge it by 80% of the track width and dim to 30% at either end. Controls are Ink chevrons on Stone Paper with a Hairline border, filling Ink with a Stone Paper chevron on hover (never Ink Blue at rest or as a fill).
- **Slides:** each screenshot on the white plate in a 1px Hairline frame, height clamp(210px, 28vw, 400px), width from the capture's own aspect ratio, capped at 84vw; cropped from the top left, zooming to 1.02 on hover over 700ms expo.
- **Controls row:** above the track, right-aligned; no count or note line (removed at the owner's request).
- **Captions:** Body Small Graphite under each slide, wrapping to the slide width.
- **Landing slide:** a full-length page capture shown in a 16:10 frame that scrolls vertically from 640px up (focusable, with a Quiet Grey hint "Scroll the frame to see the full page."); below 640px it is a static top crop.
- **Motion:** the whole carousel fades up 1.5rem once as it enters the viewport (view timeline, entry 5% to 45%); the only reveal on the page.

### Disclosure
For long shipped lists: the first three ledger rows always show, the rest sit in a collapsed grid row (0fr to 1fr over 500ms expo) that is `inert` while closed. The toggle is a Body Small Graphite text button, 2.75rem tall, reading "Show all N" or "Show less", followed by a chevron rotated down or up; it turns Ink Blue on hover and carries `aria-expanded`.

## Do's and Don'ts

### Do:
- **Do** separate content with 1px Hairline (#dddcd6) rules and whitespace.
- **Do** keep Ink Blue (#2b3a8c) for hover and focus states only.
- **Do** set large type light (300 to 350) with negative tracking, and let the opsz axis run automatically.
- **Do** set every date and year in tabular numerals.
- **Do** keep the motion to the hero rise (0.9s), the hero rule draw (1.1s), the scroll-driven ledger rule draw and the single carousel fade, all on cubic-bezier(0.16, 1, 0.3, 1) (the fade is linear on its timeline); gate scroll-driven motion behind view-timeline support and render the final state under reduced motion.
- **Do** show photos and screenshots natural, with no filters or overlays.
- **Do** blur contact details and customer or account IDs in every screenshot before it ships.

### Don't:
- **Don't** use box shadows, cards, tinted panels or pill shapes.
- **Don't** introduce a second typeface; Bricolage Grotesque covers every role.
- **Don't** switch to a cream ground, an italic display serif or terracotta accents.
- **Don't** add uppercase tracked kickers or eyebrow labels above headings.
- **Don't** use Ink Blue as a fill or text colour at rest.
