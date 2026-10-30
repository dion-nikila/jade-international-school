import Image from "@/components/SchoolImage";
import Link from "next/link";
import type {EntryPoint, Fact, Media} from "@/content/types";

export function VerifiedFacts({facts, className=""}: {facts: Fact[]; className?: string}) {
  const published=facts.filter(f=>!f.verify && Boolean(f.value));
  if(!published.length)return null;
  return <dl className={className}>{published.map(f=><div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>;
}
export function SchoolPhoto({media, className="", preload=false, sizes="(max-width: 767px) 100vw, 50vw", caption=true}: {media: Media; className?: string; preload?: boolean; sizes?: string; caption?: boolean}) {
  return <figure className={className}><div className="photo-frame"><Image src={media.src} alt={media.alt} fill preload={preload} sizes={sizes} style={{objectPosition:media.position}}/></div>{caption && <figcaption>{media.label}</figcaption>}</figure>;
}
export function StartEntry({entry, feature=false}: {entry: EntryPoint; feature?: boolean}) {
  return <article className={feature ? "start-entry start-entry-feature" : "start-entry"}>
    {entry.image && <SchoolPhoto media={entry.image} className="entry-photo"/>}
    <div className="entry-content"><h3><Link href={entry.href}>{entry.title}</Link></h3><p className="entry-description">{entry.description}</p><VerifiedFacts facts={entry.details} className="entry-facts"/><p className="entry-next">{entry.nextStep}</p><Link className="plain-link" href={entry.href}>{entry.linkLabel}</Link></div>
  </article>;
}
