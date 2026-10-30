# Expanded site review

## Result

The school prototype now has 16 marketing routes: Home, About, Learning, three existing pathways, NCC Foundation, School life, Admissions, News, four individual stories, Contact and Visit. The home page is substantially expanded with genuine photography and useful interactive features.

Purple #431448 is prominent in the entire masthead, facts strip, programme explorer, admissions panels, page introductions, tour banner and footer. The original logo remains byte-for-byte unchanged on white. Natural photography supplies the visual variety. No fabricated award counters or empty sections were added.

## Verification

- ESLint, TypeScript and the Next.js production build pass after the final changes.
- All 16 routes return HTTP 200 and retain noindex metadata.
- All 16 pages were checked at 360, 390, 768, 1024 and 1440 pixels. No document-level horizontal overflow and one H1 per page. The programme comparison deliberately scrolls within its own keyboard-focusable region on narrow screens.
- Captured each page at 390 and 1440 pixels after normal load readiness. Evidence is in expanded-qa. Full home captures and feature captures are included.
- Programme tabs: click, arrow keys and Home checked; exactly one panel visible. All tabs reference existing panels.
- Campus explorer: selecting Computer room updates the large photo, title and description. The description is announced politely.
- Gallery: sport filtering shows two sport photographs; opening, previous/next, arrow keys, Escape and focus restoration checked. The final dialog is centred and its selected photograph is loaded.
- Mobile navigation opens, focuses the first menu link and closes with Escape, restoring the menu-button focus. Underlying content is inert while it is open.
- Visit planner: changing programme, preferred time and questions updates the WhatsApp message. The link was inspected without sending anything to the school.
- FAQ disclosure expands and collapses.
- No console warnings or errors in the final production browser tab.
- Rendered copy checked for the banned words and em dashes. None found.
- Logo SHA-256 remains c378d7eccf1144654ce1b629283124d6e2fea368cdceb90c0dc8a94875f21372. No dependency changes.

## Visual critique and refinements

The purple now reads as a main brand colour instead of a small link accent. Large photographs, an image/text programme panel, a classroom collage, an interactive room selector and an editorial story grid vary the structure. The white/tinted sections provide separation between stronger purple surfaces.

The initial mobile tab arrangement left an unbalanced final row; it was changed to three equal columns and checked at every target width. The About and preschool introductory crops were adjusted to preserve faces. Screenshot review caught an uncentred gallery dialog, which was fixed and checked with the photograph fully loaded. One decorative background circle was removed from the contact panel.

The AVOID list is respected: no tracked all-caps labels, accent words in headlines, serif/cream/gold treatment, repetitive rounded/shadow cards, decorative content numbering or section-by-section scroll reveals. Numbers appear only in admissions steps. Motion responds to visitor choices alongside a single scoped opening animation.

## Limits

This is a prototype. No school tour is falsely confirmed and no enquiry is stored or sent by a backend. Current fees, intake dates, entry requirements and subject availability are confirmed with the school. Past event photographs are labelled as archive material.

Reduced-motion CSS and the GSAP media query were inspected in code; operating-system reduced-motion emulation was not available in the browser tooling. No Lighthouse, LCP, CLS or full accessibility-audit score is claimed. Archive image resolution remains a visible quality limit on large displays.
