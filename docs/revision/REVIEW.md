# Steps 1–3 review

30 October 2026. Stop at Step 3, as requested. Step 4 is not implemented.

## Step 1: actual branding

Recovered the original school crest from Jade's official Home page. Stored the complete PNG unchanged in public/brand and recorded its URL and SHA-256. Sampled exact opaque pixels: green #29B14D, purple #431448 and shield grey #E8E8EA. Tokens and extraction method are documented.

Screenshots: step-1-390.png and step-1-1440.png.

Critique against the AVOID list: authentic colours corrected the invented palette, but the legacy serif headline, accent italics, tracked eyebrow and repeated arrows still looked generic. A colour swap alone was insufficient.

## Step 2: plan before rebuilding

Wrote DESIGN_PLAN.md before Step 3 source changes. It defines six named colours, one sans family, desktop/mobile ASCII wireframes and three principles. Its critique rejects a generic aspirational slogan and identical card grid in favour of Jade's round-table classroom and parent tasks.

Screenshots: step-2-390.png and step-2-1440.png. This was a written plan, so screenshots intentionally show the pre-rebuild page. The old composition remained the problem identified for replacement.

## Step 3: rebuilt opening and real destinations

- Full-bleed real classroom photograph in natural colour. Computed image filter is none and opacity is 1. Only a black bottom gradient supports text contrast.
- One plain headline, one colour and weight, naming Jade's workshop-style learning.
- Same Book a tour label and /visit destination in the header and hero.
- A plain facts strip for curriculum, school address and entry stages. No next-open-day field because a future date is unverified.
- Start here replaces the large statement and circle monogram. Its three parent routes lead to working internal pages.
- The starting-school entry has a larger school photograph. Examination entries use quiet rows separated by rules, with no numbers, icons, rounded cards or shadows.
- Each entry renders only verified detail fields. Unknown ages, qualifications or entry requirements produce no label or placeholder.
- A quiet visit page gives published phone, WhatsApp and email contacts. It does not imply an appointment has been booked automatically.
- The rest of the old Home page is unpublished behind content status flags pending Step 4. It was not restyled as if Step 4 were complete.
- Before finishing, removed the remaining decorative arrow from the retained enquiry component, as well as the invented geometric favicon. No decorative SVG mark remains in the active UI.

Screenshots: step-3-390.png, step-3-1440.png, Home full-page captures, and all three pathway pages plus Visit at both widths.

Final critique against AVOID: no tracked all-caps eyebrow, diamonds, accent/italic words, em dashes, rule-of-three tagline, numerical card labels, empty stats, warm accent, wash, hover card animation or scroll-triggered reveal remains. Original photography carries the visual weight. Text remains quiet and specific. The original photo's resolution is a production limitation; it is not disguised with a synthetic replacement.

## Validation

- ESLint, TypeScript and Next production build pass.
- Five implemented marketing routes return 200, each with one h1.
- All five pages checked at 390px and 1440px with zero horizontal document overflow. Additional Home bounds checked at 360, 768 and 1024px.
- The mobile menu traps focus, makes the page inert, closes with Escape and restores Menu focus. The skip link moves to the main content.
- All three Home entry destinations and the tour page exist. Contact links use the official published phone and email. No message was sent to the school.
- Body-copy scan: no TODO, banned words or em dash on any implemented route.
- verify:true facts are filtered out, including the next open day and the conflicting preschool address.
- Logo hash matches its source manifest.
- Flat-colour contrast: black/green 7.49:1; purple/white 14.66:1; black/purple mist 19.07:1. Hero text was visually checked with the permitted bottom gradient.
- Hero source is about 109KB before responsive Next/Image optimisation. The hero is preloaded; secondary photos are lazy. No video, Lenis loop or ScrollTrigger is loaded in the active UI.
- Reduced motion disables the sole GSAP load event; no pinning, parallax or smooth-scroll effect is active. No browser-emulated reduced-motion run or measured Lighthouse/LCP score is claimed.
- Retained API was tested with synthetic data: delivered remains false. It has no live transport or storage.
- Final production preview checked in a fresh browser tab, including the tour action and return to Home: no browser warnings or errors. The source logo is loaded eagerly, and the load animation skips absent targets during route transitions.

## Remaining approvals

Current grade/age boundaries, subject availability and entry requirements, fees, next intake/open day, accreditation date, recent results, final imagery permissions and production publishing. The school Home and preschool Admission pages disagree about the preschool address; confirm before using it as a destination.
