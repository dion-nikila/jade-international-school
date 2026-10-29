# Phase 1 verification

29 October 2026. Home is the only implemented marketing page in this review stage.

## Checks

- ESLint: passed, no warnings.
- TypeScript (`tsc --noEmit`): passed.
- Next.js production build: passed; Home and metadata are prerendered, `/api/enquiry` is a dynamic route.
- Portable package-lock validation (`npm ci --dry-run`): passed. Node 24 is recommended and recorded in `.nvmrc` and package engines.
- HTTP: Home, image assets, favicon, robots and sitemap returned 200.
- Browser: 360, 390, 768, 1024 and 1440px widths; no horizontal document overflow, header actions fit and hero text stays in bounds.
- School-day story: grid below 1024px, flex/pinned on desktop; exactly one pin spacer at 1440px and zero at 390px. Manual scroll and Next chapter control advanced the track. Jade shade overlay progressed with scroll.
- Menu: desktop and mobile rendering checked. Escape closed it and restored focus to Explore Jade. Underlying page became inert and body scrolling was locked while open.
- Student stories: Next control changed the visible quote, name and index; original story links are present.
- Form: empty submit displayed five field errors and focused the name input. A complete synthetic test returned the explicit preview result. No email was sent or enquiry saved.
- API: empty and invalid-email payloads returned 422; valid synthetic input returned 200 with `preview: true, delivered: false`; malformed JSON returned 400, wrong content type 415 and oversized body 413.
- Core flat-colour text pairs checked mathematically: ink/paper 12.90:1; muted/paper 5.33:1; paper/dark jade 10.73:1; paper/lightest jade 6.32:1; gold/lightest jade 4.72:1; form placeholder/background 4.93:1. The hero uses a dark image scrim; final photography still requires a visual contrast check.
- Reduced-motion rules inspected: no Lenis, GSAP reveal/parallax or desktop pin is created when reduced motion is requested, and CSS stacks the story. Browser-level reduced-motion emulation was unavailable in the current browser controls, so no emulated run is claimed.

## Screenshots

- `home-1440.png`: desktop hero, 1440×900.
- `home-390.png`: mobile hero, 390×844.
- `home-390-full.png`: entire mobile page; review artifact, not a performance measurement.
- `home-1440-day.png`: desktop school-day story.
- `menu-1440.png`, `menu-390.png`: expanded navigation.
- `enquiry-390.png`: synthetic form validation result.
- `width-checks.json`: recorded layout bounds.

## Limits and next phases

No Lighthouse score, slow-4G LCP, measured CLS, assistive-technology certification or cross-browser result is claimed. Those belong to Phase 3. Current checks used the available in-app browser. Photography is provisional and repeated archive imagery needs replacement; all facts marked TODO require school approval. The API intentionally has a placeholder transport. Phase 2 pages and final Vercel deployment are pending review.
