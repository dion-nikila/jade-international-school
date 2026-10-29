"use client";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import type {Statistic} from "@/content/types";

export function Statistics({items}: {items: Statistic[]}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      ref.current?.querySelectorAll<HTMLElement>("[data-value]").forEach(el => {
        const target = Number(el.dataset.value);
        const counter = {value: 0};
        gsap.to(counter, {value: target, duration: 1.5, ease: "power2.out", scrollTrigger: {trigger: el, start: "top 95%", once: true}, onUpdate: () => {el.textContent = Math.round(counter.value).toLocaleString();}});
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div className="stats-grid" ref={ref}>{items.map(item => <div className="stat" key={item.label}>
    <div className="stat-value" aria-hidden={item.value === null}><span data-value={item.value ?? undefined}>{item.value ?? "—"}</span>{item.value !== null && <small>{item.suffix}</small>}</div>
    <p>{item.label}</p><small className="todo">{item.placeholder}</small>
  </div>)}</div>;
}
