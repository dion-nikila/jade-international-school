# Jade International School

A separate school website prototype. **Phase 1: design system and Home page.** The preschool project and the parent workspace are unchanged.

## Run

Requires Node.js 20.19+, 22.13+ or 24+ (Node 24 used for this build).

```sh
npm ci
npm run dev
```

Open <http://localhost:3005>. Production check:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, GSAP/ScrollTrigger, Lenis, `next/image`, and self-hosted `next/font/local`. No UI kit or additional application dependency. React, ESLint, PostCSS, type packages and compiler packages are standard Next.js tooling.

## Project structure

- `app/`: Home, metadata, robots/sitemap, API route and global design tokens.
- `components/`: reusable typography, buttons, photography, navigation, footer, animations and form.
- `content/home.ts`: typed Home content and section data.
- `content/site.ts`: shared school identity, navigation, footer and verified contacts.
- `content/enquiry.ts`: form labels and validation/response messages.
- `lib/enquiry.ts`: shared client/server validation.
- `public/media/`: explicitly labelled placeholder archive imagery. See `MEDIA_README.md`.
- `docs/RESEARCH.md`: source register, reference studies and decisions.
- `docs/qa/`: browser screenshots and verification report.

## Review scope

The Home page includes the cinematic hero, word reveal, Why Jade, academic pathways, pinned school-day story, statistics placeholders, outcomes, two published student quote excerpts, news, enquiry form, mega-menu and footer. The menu currently links to Home sections so there are no dead page links.

**Phase 2 is pending user review:** About, Academics, Admissions, Campus & Student Life, Graduates & Outcomes, News list/detail and Contact.

**Phase 3 is pending:** final page transitions, measured Lighthouse/performance work and cross-browser QA. No Lighthouse score is claimed for Phase 1.

## Content requiring approval

All missing facts are marked `[TODO: …]`: grades, ages, current curriculum/subject availability, entry requirements, fees, intake/tour dates, verified statistics, graduate destinations and daily timetable. No example performance values animate as if they were real school results. The count-up component accepts verified numeric data once supplied.

The headline, editorial copy, geometric jade mark and wordmark are proposed creative direction, not approved school branding. The photographs are from the school's public archive and need an approved replacement and consent/usage review before launch. They are labelled in the preview. Student quote excerpts link to their published sources; confirm republication permission and current relevance before launch.

## Enquiries

`POST /api/enquiry` validates JSON and returns `preview: true, delivered: false`. **There is no email provider, storage, logging of enquiry bodies, or real delivery.** The UI does not pretend a message was sent. The parent can instead use verified call, email and WhatsApp links. Use synthetic data when reviewing.

## Vercel

Import this repository into Vercel, use the detected Next.js framework, and set `NEXT_PUBLIC_SITE_URL` to the approved deployment URL. No secret or email-provider key is required for the prototype. Do not add a real school domain until the school approves launch. The prototype intentionally returns `noindex` and a disallow-all robots policy. Change those in Phase 3 after content approval. The sitemap contains only the implemented Home route.

## Motion and accessibility

GSAP contexts, ScrollTriggers, event handlers and Lenis ticker/instance are cleaned up on unmount. Reduced motion disables smooth scroll, pinning, parallax and text effects. Horizontal storytelling becomes a vertical sequence below 1024px and under reduced motion. Content is visible without the animation layer. Navigation has an Escape-close dialog, keyboard focus containment and an inert page underneath. The form has explicit labels, inline errors and a live result message.

## Media and fonts

See `MEDIA_README.md`. Newsreader and DM Sans are self-hosted with their SIL Open Font License notices in `public/fonts/`.
