---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Portfolio home (src/App.jsx), branch design/split

Scope: single-page portfolio. Mode: Experience. Audience: tech recruiters first, freelance clients second. Action: email, LinkedIn, GitHub. Stack: React + Vite + Tailwind CSS v4.

## Direction contract

User-pinned 2026-11-18: use brittanychiang.com as the structural reference, "not plek ketiplek" (not a copy), and add ideas that make it more engaging. The pin beats the roll; no concept round ran. Borrowed: the structure only (sticky identity panel on the left, scrolling content on the right, scroll-spy nav, list cards that dim their siblings on hover, a cursor spotlight). Not borrowed: palette, type, copy and imagery.

THESIS: A two-panel developer profile. Identity and navigation stay fixed while the work scrolls, so a recruiter always knows who and where. Its own world comes from the batik sogan shirt in the portrait, not the reference's navy and teal.

OWN-WORLD: Warm near-black ground #0F0E0C, raised surface #1A1815, hairline #2A2722, headings #E9E4DA, body #A8A196, dim labels #85807A, and one accent, sogan gold #E0B45C, for links, active nav, pills and the spotlight. Geist for text and Geist Mono for dates, labels and pills. Card radius 6px. No pills: stacks are slash-separated mono lines in gold. Cards carry a 1px left rule that turns gold on hover. No sibling dimming. No shadows except the spotlight glow. A batik band (real photo crop) sits at the top on mobile.

STORY: Left panel: name, role, stack line, "Currently at Beyondtech" status, scroll-spy nav (About, Experience, Projects, Contact), social icons. Right: a real Beyondtech screen opens the column ("Now building", opens the gallery), then About with the portrait and the stack, experience cards (date column, role · company link, summary, three highlights, slash-separated stack line, screen thumbnails that open a lightbox gallery), earlier internships and education, project cards with thumbnails, then a closing contact block.

FIRST VIEWPORT: Desktop: a fixed batik selvedge strip (a real crop of the parang border from the portrait shirt) runs down the left edge. The left half holds the name set in weight contrast (Ouzy extralight over Maulana semibold), the role, the gold stack line, the status, a dot-marker nav and the socials. The right half opens on a large real Beyondtech dashboard screen with a "Now building" caption, then the About copy and the portrait at 12rem. Mobile: a single column with the identity block first, and section labels that stick while scrolling.

FORM: user-pinned reference structure (seed c33cb2ee superseded). Signature interactions: a gold cursor spotlight on the page ground (fine pointers only, off under reduced motion), a dot nav whose marker scales up for the active section, card rules that turn gold, and a native <dialog> lightbox for app screens (arrow keys, Esc, focus trapped), reachable from the opening screen and from each role's thumbnails.

ADAPTATIONS: Reviewer round 1 moved the build off the reference's classes (nav, pills, dimming, hover plate, colophon) at the user's "not a copy" pin. Screens keep their blur of contact details and customer/account IDs.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
