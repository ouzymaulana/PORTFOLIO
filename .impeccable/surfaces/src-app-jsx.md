---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Portfolio home (src/App.jsx)

Scope: single-page portfolio. Mode: Experience. Audience: tech recruiters first, freelance clients second. Action: email, LinkedIn, GitHub. Stack: React + Vite + Tailwind CSS v4 (user request, 2026-11-17).

## Direction contract

User-pinned on 2026-11-17, replacing the Ticker Wall build the user rejected: "light, editorial, elegant", no references, natural photo. The pin beats the roll; no concept round ran.

THESIS: A quiet, typeset record of serious fintech work. Elegance comes from scale, measure and spacing. Refuses both the dark-mode dev template and the AI editorial default (cream ground, italic display serif, terracotta).

OWN-WORLD: Cool stone-white ground #F5F5F2, ink #15161A, graphite secondary text, hairline rules #DDDCD6, one deep ink-blue accent #2B3A8C for links and focus only. A single family, Bricolage Grotesque, with its optical-size axis: light, tight display at large sizes, regular text at body sizes, tabular numerals for dates. No cards, no shadows, no pills. Hairlines and whitespace carry the structure. The photo is shown natural.

STORY: Visitor reads who he is and what he builds in one sentence, sees the employers and dates as a clean index, scans what was shipped, glances at three projects, and emails.

FIRST VIEWPORT: Thin header (name left, three nav links right). A 12-column grid. Left 7 columns: a display statement at ~5.5rem, then the availability line and the actions (ink "Email me" button plus LinkedIn and GitHub text links). Right 5 columns: natural portrait at 4:5. Under both, a hairline index of roles (company, role, years) spanning the width.

FORM: user-pinned light editorial (seed c33cb2ee superseded by the pin). Signature moment: the display statement sets in line by line on load (a short rise and fade, from a visible default), and the role index rules draw left to right. Reduced motion renders the final state.

ADAPTATIONS: Employer app screens (Beyondtech, BNI Sekuritas) ship in a per-role horizontal scroll-snap carousel that bleeds to the viewport edge, with square prev/next controls; the Beyondtech landing page sits in a 16:10 frame that scrolls vertically from sm up and is a static top crop on mobile (user asked for swipeable galleries, 2026-11-18). Shipped lists show three rows and disclose the rest with "Show all N". Motion beyond the hero: ledger hairlines draw left to right on scroll (view timeline), and the carousel fades in once. Contact details and customer/account IDs in screenshots are blurred.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open
- None.
