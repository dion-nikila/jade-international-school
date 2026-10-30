# Jade International School

Revision review: **Steps 1–3 complete. Step 4 is pending review.**

This is the separate school project, with Jade's actual logo and sampled brand colours, real classroom photography, the revised Home opening and working parent pathway pages.

## Run

Use Node 24 (also recorded in .nvmrc).

```sh
npm ci
npm run dev
```

Open http://localhost:3005.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Review pages

- / — classroom-led hero, verified facts strip and Start here.
- /starting-school — preschool and primary enquiries.
- /igcse-and-a-levels — examination pathways.
- /fast-track-a-levels — the published one-year programme.
- /visit — verified phone, WhatsApp and email routes to arrange a visit.

The Home entry points have real internal destinations. A tour is arranged and confirmed directly with the school, never falsely confirmed by the prototype.

## Official branding

The complete source PNG is unchanged in public/brand/jade-international-school-logo.png. Its provenance and SHA-256 are in public/brand/SOURCE.json.

The sampled green is #29B14D, purple #431448 and shield grey #E8E8EA. White, black and a documented purple/white neutral complete the six-colour plan. These are measurements from the logo, not a claimed official brand manual.

- content/brand.md: pixel sampling and sources.
- app/brand.css: design tokens.
- docs/revision/DESIGN_PLAN.md: plan, wireframes and self-critique written before Step 3.
- docs/revision/REVIEW.md: screenshot critique and validation.
- docs/revision/MEDIA_SOURCES.json: exact photo sources.
- docs/revision/qa/: 390px and 1440px captures after each step and for each implemented page.

The invented monogram, geometric favicon, warm palette, serif display treatment, link arrows, numbered cards, scrolling reveals, colour washes and pinning are removed from the active site. DM Sans is self-hosted using next/font/local. The only animation is a scoped GSAP page-load event for the complete headline group, disabled under reduced motion.

## Facts and publication

All live copy is in typed content files, one per page, with shared identity in content/site.ts. Unknown facts use verify:true and do not render. No TODO or missing-data box appears on the pages. The next open day, entry ages, admission requirements, fees, accreditation year and statistics remain unpublished until verified.

The preschool's Home and Admission pages show different addresses. The location is therefore withheld from the preschool pathway and parents are asked to confirm it with admissions.

The rest of Home is intentionally not in this Step 3 review. Its flags are in content/home.ts. The original draft is retained as unpublished archive-home.ts, imported by no route, with publication disabled and verification required.

## Stack and deployment

Next.js App Router, TypeScript, Tailwind, next/image, next/font and GSAP. Existing Lenis and ScrollTrigger packages remain available for later work but are not loaded by the revised UI. No application dependency was added.

For Vercel, import the repository with the Next.js framework preset and set NEXT_PUBLIC_SITE_URL to the approved preview domain. No key is required. The review remains noindex with disallow-all robots until approved for launch. Final school approval and final deployment are still pending.

## Enquiry handler

The existing POST /api/enquiry validation stub is retained for later admissions work. It returns preview:true and delivered:false and never stores or sends enquiries. It is not presented as a live submission form in this review. The visit page uses the school's published contact details instead.

## Media

All active photographs come from the school or preschool's own public pages. They are neither AI-generated nor colour-tinted. Captions describe visible activities without guessing grades, names or event dates. Approval for final production use and pupil consent still needs to be confirmed. See MEDIA_README.md.
