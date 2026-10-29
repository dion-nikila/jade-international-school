"use client";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { home } from "@/content/home";
import { Arrow } from "./Primitives";

export function DayControls() {
  function move(direction: number) {
    const trigger = ScrollTrigger.getById("jade-day");
    if (!trigger) return;
    const step = (trigger.end - trigger.start) / (home.day.chapters.length - 1);
    const next = Math.max(trigger.start, Math.min(trigger.end, window.scrollY + direction * step));
    window.scrollTo({top: next, behavior: "smooth"});
  }
  return <div className="day-controls"><button type="button" onClick={() => move(-1)} aria-label={home.day.previous}><Arrow back/></button><button type="button" onClick={() => move(1)} aria-label={home.day.next}><Arrow/></button></div>;
}
