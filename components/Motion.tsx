"use client";

import {useEffect, useRef, type ReactNode} from "react";
import {usePathname} from "next/navigation";
import gsap from "gsap";

export function Motion({children}: {children: ReactNode}) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    let disposed = false;
    let media: gsap.MatchMedia | undefined;
    let mountedMain: HTMLElement | null = null;
    let resizeObserver: ResizeObserver | undefined;
    let refreshFrame = 0;

    // Load scroll effects separately from the first render and keep every
    // animation scoped to the current route, including streamed pages.
    void import("gsap/ScrollTrigger").then(({ScrollTrigger}) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);

      const refresh = () => {
        if (disposed) return;
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => {
          if (!disposed) ScrollTrigger.refresh();
        });
      };

      const mount = () => {
        const main = root.querySelector("main");
        if (!main || main === mountedMain) return;
        media?.revert();
        resizeObserver?.disconnect();
        mountedMain = main;
        media = gsap.matchMedia();
        let openingPlayed = false;

        media.add({
          motion: "(prefers-reduced-motion: no-preference)",
          wide: "(min-width: 768px)",
        }, (context) => {
          if (!context.conditions?.motion) return;
          const wide = Boolean(context.conditions.wide);
          const find = (selector: string) => main.querySelector<HTMLElement>(selector);
          const opening = find("[data-opening-copy]");
          if (opening && !openingPlayed) {
            openingPlayed = true;
            gsap.from(opening, {y: 12, opacity: 0, duration: .55, ease: "power2.out", clearProps: "all"});
          }

          const progress = root.querySelector("[data-reading-progress]");
          if (progress) {
            gsap.to(progress, {
              scaleX: 1, ease: "none",
              scrollTrigger: {trigger: main, start: "top top", end: "bottom bottom", scrub: true},
            });
          }

          const hero = find(".opening-hero");
          const stage = find(".hero-photo-stage");
          if (hero && stage) {
            gsap.fromTo(stage, {yPercent: wide ? -3 : -1.5}, {
              yPercent: wide ? 3 : 1.5, ease: "none",
              scrollTrigger: {trigger: hero, start: "top top", end: "bottom top", scrub: .6},
            });
          }

          const float = (selector: string, trigger: string, from: gsap.TweenVars, to: gsap.TweenVars) => {
            const element = find(selector);
            const section = find(trigger);
            if (!element || !section) return;
            gsap.fromTo(element, from, {
              ...to, ease: "none",
              scrollTrigger: {trigger: section, start: "top bottom", end: "bottom top", scrub: .7, invalidateOnRefresh: true},
            });
          };

          float(".teaching-detail", ".teaching-collage",
            {y: wide ? 42 : 20, rotation: -5},
            {y: wide ? -42 : -20, rotation: 3});
          float(".life-sport", ".life-feature-photos",
            {y: wide ? 20 : 10}, {y: wide ? -20 : -10});
          float(".life-music", ".life-feature-photos",
            {y: wide ? 48 : 22, rotation: 6},
            {y: wide ? -42 : -20, rotation: -4});
          float(".tour-round-photo", ".tour-banner",
            {y: wide ? 28 : 14, rotation: -7},
            {y: wide ? -24 : -12, rotation: 7});

          const programme = find(".programme-section");
          if (programme) {
            gsap.fromTo(programme, {borderBottomLeftRadius: 0}, {
              borderBottomLeftRadius: wide ? 120 : 54, ease: "none",
              scrollTrigger: {trigger: programme, start: "bottom 90%", end: "bottom 20%", scrub: .6},
            });
          }

          // Introductory photographs on the other school pages gently settle
          // within their frames; headings and controls remain stationary.
          const intro = find(".intro-photo");
          const introImage = intro?.querySelector("img");
          if (intro && introImage) {
            gsap.fromTo(introImage, {scale: wide ? 1.07 : 1.025}, {
              scale: 1, ease: "none",
              scrollTrigger: {trigger: intro, start: "top bottom", end: "center center", scrub: .6},
            });
          }
        }, root);

        // Filters, open FAQs and fonts can change the document's height.
        // Observe layout, rather than reading dimensions on every scroll.
        let lastWidth = 0;
        let lastHeight = 0;
        resizeObserver = new ResizeObserver(([entry]) => {
          const {width, height} = entry.contentRect;
          if (Math.abs(width - lastWidth) > 1 || Math.abs(height - lastHeight) > 1) {
            lastWidth = width;
            lastHeight = height;
            refresh();
          }
        });
        resizeObserver.observe(main);
        refresh();
      };

      mount();
      routeObserver.observe(root, {childList: true, subtree: true});
      document.fonts.ready.then(refresh);
      mountCurrentPage = mount;
    });

    let mountCurrentPage = () => {};
    const routeObserver = new MutationObserver(() => mountCurrentPage());
    return () => {
      disposed = true;
      routeObserver.disconnect();
      resizeObserver?.disconnect();
      cancelAnimationFrame(refreshFrame);
      media?.revert();
    };
  }, [pathname]);

  return <div ref={scope}>{children}</div>;
}
