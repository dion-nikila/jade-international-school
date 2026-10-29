import Image from "next/image";
import type { ReactNode } from "react";
import type { LinkItem, Media } from "@/content/types";

export function Arrow({diagonal = false, back = false}: {diagonal?: boolean; back?: boolean}) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`arrow ${back ? "arrow-back" : ""}`}>
    {diagonal ? <path d="M5 19 19 5M5 5h14v14"/> : <path d="M4 12h16m-7-7 7 7-7 7"/>}
  </svg>;
}

export function JadeMark({className = ""}: {className?: string}) {
  return <svg className={className} viewBox="0 0 48 56" fill="none" aria-hidden="true">
    <path d="m24 2 20 12v26L24 54 4 40V14L24 2Z"/>
    <path d="M24 2v52M4 14l20 13 20-13M4 40l20-13 20 13M14 8v38m20-38v38"/>
  </svg>;
}

export function Eyebrow({children, className = ""}: {children: ReactNode; className?: string}) {
  return <p className={`eyebrow ${className}`}><span aria-hidden="true"/>{children}</p>;
}

export function TextLink({link, light = false, diagonal = false, className = ""}: {link: LinkItem; light?: boolean; diagonal?: boolean; className?: string}) {
  return <a className={`text-link ${light ? "text-link-light" : ""} ${className}`} href={link.href}>{link.label}<Arrow diagonal={diagonal}/></a>;
}

export function ButtonLink({link, outline = false}: {link: LinkItem; outline?: boolean}) {
  return <a href={link.href} className={`button-link ${outline ? "button-outline" : ""}`}><span>{link.label}</span><Arrow/></a>;
}

export function Picture({media, className = "", priority = false, sizes = "(max-width: 767px) 100vw, 50vw", parallax = false}: {media: Media; className?: string; priority?: boolean; sizes?: string; parallax?: boolean}) {
  return <figure className={`picture ${className}`}>
    <div className="picture-inner" data-parallax={parallax || undefined}>
      <Image src={media.src} alt={media.alt} fill sizes={sizes} preload={priority} style={{objectPosition: media.position}}/>
    </div>
    <figcaption>{media.label}</figcaption>
  </figure>;
}

export function SplitText({text, className = ""}: {text: string; className?: string}) {
  return <span className={`split-text ${className}`} aria-label={text}>
    {text.split(" ").map((word, i) => <span key={`${i}-${word}`} className="split-word" aria-hidden="true">{word}{" "}</span>)}
  </span>;
}
