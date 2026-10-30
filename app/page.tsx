import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {home} from "@/content/home";
import {site} from "@/content/site";
import {StartEntry, VerifiedFacts} from "@/components/SchoolContent";

export const metadata: Metadata = {
  title:{absolute:home.meta.title}, description:home.meta.description,
  openGraph:{title:home.meta.title,description:home.meta.description,type:"website",images:[{url:home.hero.image.src,width:1024,height:768,alt:home.hero.image.alt}]},
  robots:{index:false,follow:false},
};
export default function Home() {
  return <main id="main">
    {home.sections.hero && <section className="opening-hero" aria-labelledby="hero-title">
      <Image className="opening-photo" src={home.hero.image.src} alt={home.hero.image.alt} fill preload sizes="100vw" style={{objectPosition:home.hero.image.position}}/>
      <div className="photo-legibility" aria-hidden="true"/>
      <div className="page-width opening-content"><div data-opening-copy><h1 id="hero-title">{home.hero.title}</h1><p>{home.hero.description}</p><Link className="primary-button" href={home.hero.action.href}>{home.hero.action.label}</Link></div></div>
    </section>}
    {home.sections.information && <section className="school-information" aria-label={home.information.label}><div className="page-width"><p className="hero-photo-caption">{home.hero.image.label}</p><VerifiedFacts facts={home.information.facts} className="information-facts"/></div></section>}
    {home.sections.startHere && <section className="start-section page-width" id="start-here" aria-labelledby="start-title"><div className="start-heading"><h2 id="start-title">{home.startHere.title}</h2><p>{home.startHere.description}</p></div><div className="start-grid"><StartEntry entry={home.startHere.entries[0]} feature/><div className="examination-entries">{home.startHere.entries.slice(1).map(entry=><StartEntry key={entry.href} entry={entry}/>)}</div></div></section>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"School",name:site.name,description:home.meta.description,telephone:site.telephone,email:site.email,address:{"@type":"PostalAddress",...site.postalAddress},sameAs:[site.source]}).replace(/</g,"\\u003c")}}/>
  </main>;
}
