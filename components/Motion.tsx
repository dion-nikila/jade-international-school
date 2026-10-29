"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function Motion({children}: {children: ReactNode}) {
  const scope = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    let lenis: Lenis | undefined;
    let tick: ((time: number) => void) | undefined;
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        lenis = new Lenis({duration: 1.05, smoothWheel: true, syncTouch: false, anchors: true, prevent: node => document.body.style.overflow === "hidden" || Boolean(node.closest("[data-lenis-prevent]"))});
        lenis.on("scroll", ScrollTrigger.update);
        tick = time => lenis?.raf(time * 1000);
        gsap.ticker.add(tick);

        gsap.from(".hero-line > span", {yPercent: 115, duration: 1.1, stagger: .13, ease: "power3.out", delay: .1});
        gsap.from(".hero-copy, .hero-eyebrow", {y: 20, opacity: 0, duration: .9, stagger: .1, delay: .4, ease: "power2.out"});
        gsap.to(".hero-image .picture-inner", {yPercent: 10, ease: "none", scrollTrigger: {trigger: ".hero", start: "top top", end: "bottom top", scrub: true}});

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
          gsap.from(el, {y: 32, opacity: 0, duration: .85, ease: "power2.out", scrollTrigger: {trigger: el, start: "top 93%", once: true}});
        });
        gsap.from(".statement .split-word", {opacity: .48, stagger: .12, scrollTrigger: {trigger: ".statement", start: "top 70%", end: "bottom 65%", scrub: .5}});
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el => {
          gsap.fromTo(el, {yPercent: -5}, {yPercent: 5, ease: "none", scrollTrigger: {trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true}});
        });
        gsap.to(".shade-wash", {opacity: 1, ease: "none", scrollTrigger: {trigger: scope.current, start: "top top", end: "bottom bottom", scrub: true}});

        return () => {
          if (tick) gsap.ticker.remove(tick);
          lenis?.destroy(); lenis = undefined;
        };
      });
      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = document.querySelector<HTMLElement>(".day-track");
        const viewport = document.querySelector<HTMLElement>(".day-window");
        if (!track || !viewport) return;
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        gsap.to(track, {x: () => -distance(), ease: "none", scrollTrigger: {id: "jade-day", trigger: ".day-pin", start: "top 96px", end: () => `+=${distance()}`, pin: true, scrub: .8, invalidateOnRefresh: true, onUpdate: self => {
          const progress = document.querySelector<HTMLElement>(".day-progress span");
          if (progress) gsap.set(progress, {scaleX: self.progress});
        }}});
      });
    }, scope);
    let disposed = false;
    const refresh = () => {if (!disposed) ScrollTrigger.refresh();};
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      disposed = true;
      window.removeEventListener("load", refresh);
      media.revert(); context.revert();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);
  return <div ref={scope}>{children}</div>;
}
