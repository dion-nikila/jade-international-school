"use client";
import {useState} from "react";
import {home} from "@/content/home";
import {Arrow} from "./Primitives";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const content = home.outcomes;
  const current = content.testimonials[index];
  return <div className="testimonials">
    <div className="testimonial-stage" aria-live="polite" aria-atomic="true">
      <blockquote key={index}><span className="quote-mark" aria-hidden="true">“</span><p>{current.quote}</p><footer><strong>{current.name}</strong><span>{current.role}</span></footer></blockquote>
    </div>
    <div className="testimonial-bottom"><a href={current.source} target="_blank" rel="noreferrer">{content.sourceLabel}<Arrow diagonal/></a>
      <div className="testimonial-controls"><button type="button" aria-label={content.previous} onClick={() => setIndex((index - 1 + content.testimonials.length) % content.testimonials.length)}><Arrow back/></button><span aria-label={content.slideLabel}>{String(index + 1).padStart(2, "0")}<i>/</i>{String(content.testimonials.length).padStart(2, "0")}</span><button type="button" aria-label={content.next} onClick={() => setIndex((index + 1) % content.testimonials.length)}><Arrow/></button></div>
    </div>
  </div>;
}
