# Scroll motion update

Requested after the expanded website review: make scrolling feel more fun.

## Effects

- Home hero photograph moves at a different rate inside an oversized, clipped frame. Captions and controls stay in place.
- The smaller classroom photograph drifts and tilts as the classroom collage passes through the viewport.
- The school-life photographs move in opposite directions; the overlapping stage photograph gently rotates.
- The purple programme section develops a curved lower corner as it leaves the viewport.
- The round tour photograph slowly rolls and drifts into position.
- Introductory photographs on other pages gently settle from a small zoom within their frames.
- A three-pixel green line under the masthead follows reading progress. It is decorative and hidden from assistive technology.

Use the existing GSAP/ScrollTrigger package, loaded in a separate client chunk. No additional dependency, scroll hijacking, pinned section, hidden content or decorative copy. Movement is smaller below 768px. All effects are scoped to the current page and cleaned up on route changes. Layout changes from FAQs and gallery filters refresh measurements through ResizeObserver.

## Verification

ESLint, TypeScript and production build checked. In the browser, real scroll input changed the hero translation from approximately -26px to +26px and advanced the reading line. The school-life photograph changed from a six-degree tilt and 48px offset to a much smaller tilt and offset as the section moved through view. The purple section corner changed with scroll.

Home checked at 360, 390, 768, 1024 and 1440 pixels with no document-level horizontal overflow. Navigating to About replaced the Home effects with the introductory photo effect and kept one reading-progress element. Reduced-motion queries remove the animation setup and hide the reading line; operating-system preference emulation is unavailable in the current browser tooling, so no emulated reduced-motion test is claimed.

Screenshots and browser DOM measurements are in motion-qa.
