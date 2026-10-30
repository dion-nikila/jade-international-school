# Jade International School

A separate, multi-page school prototype built with the school's original crest, sampled purple and green, and genuine Jade photography.

Public source: https://github.com/dion-nikila/jade-international-school

## Run

Use Node 24, recorded in `.nvmrc`.

```sh
npm ci
npm run dev
```

Preview: http://localhost:3005

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Pages

- `/`: photographic hero, school facts, three-route Start here explorer, classroom feature, school life, campus explorer, filterable gallery, student voice, school stories, admissions and FAQs.
- `/about`: classroom approach, teaching and school life.
- `/academics`: programme directory and route comparison.
- `/starting-school`: preschool and primary.
- `/igcse-and-a-levels`: Cambridge and Edexcel pathways.
- `/fast-track-a-levels`: the one-year A Level programme.
- `/foundation`: NCC International Foundation Diploma.
- `/school-life`: sports, arts and the complete interactive photo gallery.
- `/admissions`: entry routes, visit preparation and FAQs.
- `/news`: four school stories, each with an individual page.
- `/contact`: published school contacts and map link.
- `/visit`: tour enquiry preparation and direct contact options.

## Interactions

Programme tabs support arrow keys, Home and End. Campus photographs switch on selection. Gallery filters, an accessible native modal, previous/next buttons, arrow keys and Escape support photo exploration. The mobile menu contains focus and restores it on dismissal. Native FAQ disclosures work without JavaScript.

The tour planner prepares a WhatsApp message from a programme, time preference and optional questions. The parent reviews and sends it in WhatsApp. It never claims a tour is confirmed. No personal information is collected or stored by the planner.

Motion includes a scoped GSAP opening event, slow hero-photo depth, floating photo compositions, a curved programme-section transition, gentle introductory photo zoom and a reading-progress line. ScrollTrigger follows native scrolling, with less movement on phones. Reduced-motion preferences remove these effects. No repetitive scroll reveals, scroll hijacking or autoplay carousel. DM Sans is self-hosted through next/font/local.

## Branding and sources

The original 800 × 800 logo is unchanged. Source and SHA-256: `public/brand/SOURCE.json`. Colour sampling: `content/brand.md`. The six-colour system uses crest purple #431448, leaf green #29B14D, shield grey, white, black and a purple-tinted neutral. Green buttons use black text for contrast.

Shared programme, photography, FAQ and story content is in `content/school.ts`. Individual pathway facts and sources remain in their content files. Unknown fees, future open-day dates, current subject availability, intake dates and accreditation year are not asserted as verified facts. The preschool's public pages show different addresses, so visitors are asked to confirm their section's visit location.

See `MEDIA_README.md`, `docs/revision/EXPANDED_MEDIA_SOURCES.json` and `docs/revision/MEDIA_SOURCES.json` for image provenance. Archived school events are labelled as past events. No fictional students, staff, statistics, testimonials or campus photographs were generated.

## Validation and publication

See `docs/revision/EXPANDED_REVIEW.md` for final build, responsive and interaction checks. Earlier Step 1–3 captures are retained as history, not the current design.

Next.js App Router, TypeScript, Tailwind, next/image, next/font and GSAP. No new application dependency was added. Lenis remains installed but is not loaded by the UI.

The prototype is noindex with disallow-all robots. Import this repository into Vercel using its Next.js preset and set `NEXT_PUBLIC_SITE_URL` when a deployment domain is chosen. Production publication, school approval and media permissions remain launch work.

The unused `/api/enquiry` validation stub returns `preview: true, delivered: false`. It does not store or send data and is not connected to a public form. The visit planner uses the school's published WhatsApp contact instead.
