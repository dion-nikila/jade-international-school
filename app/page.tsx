import type {Metadata} from "next";
import {home} from "@/content/home";
import {site} from "@/content/site";
import {Arrow, ButtonLink, Eyebrow, JadeMark, Picture, SplitText, TextLink} from "@/components/Primitives";
import {DayControls} from "@/components/DayControls";
import {Statistics} from "@/components/Statistics";
import {Testimonials} from "@/components/Testimonials";
import {EnquiryForm} from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: {absolute: home.meta.title}, description: home.meta.description,
  openGraph: {title: home.meta.title, description: home.meta.description, type: "website", images: [{url: "/media/hero-placeholder.webp", width: 960, height: 539, alt: home.hero.image.alt}]},
  // Keep the review prototype out of search until its content and production domain are approved.
  robots: {index: false, follow: false},
};

export default function Home() {
  return <main id="main">
    <section id="top" className="hero jade-surface" aria-labelledby="hero-title">
      <div className="shade-wash" aria-hidden="true"/>
      <Picture media={home.hero.image} className="hero-image" priority sizes="100vw"/>
      <div className="hero-scrim" aria-hidden="true"/>
      <div className="container hero-content"><Eyebrow className="hero-eyebrow">{home.hero.eyebrow}</Eyebrow>
        <h1 id="hero-title">{home.hero.title.map(line => <span key={line} className={`hero-line ${line === home.hero.italic ? "hero-italic" : ""}`}><span>{line}</span></span>)}</h1>
        <div className="hero-copy"><p>{home.hero.description}</p><ButtonLink link={home.hero.primary}/></div>
      </div>
      <div className="container hero-bottom"><span className="hero-location"><span aria-hidden="true"/>{home.hero.location}</span><span className="hero-footnote">{home.hero.footnote}</span><a href={home.hero.secondary.href}>{home.hero.secondary.label}<Arrow diagonal/></a></div>
    </section>

    <section className="statement section-space" id="the-jade-approach" aria-labelledby="statement-title">
      <div className="container"><Eyebrow>{home.statement.eyebrow}</Eyebrow><h2 id="statement-title"><SplitText text={home.statement.text}/></h2>
        <div className="statement-bottom"><div className="statement-seal" aria-hidden="true"><JadeMark/></div><p>{home.statement.description}</p><TextLink link={home.statement.link}/></div>
      </div>
    </section>

    <section className="why section-space" id="why-jade" aria-labelledby="why-title">
      <div className="container why-grid"><div className="why-visual"><div data-reveal><Eyebrow>{home.why.eyebrow}</Eyebrow><h2 id="why-title" className="section-title">{home.why.title}</h2></div><Picture media={home.why.image} parallax/></div>
        <div className="pillars">{home.why.pillars.map(pillar => <article className="pillar" key={pillar.number} data-reveal><span className="small-label">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}<p className="why-footnote small-label">{home.statement.note}</p></div>
      </div>
    </section>

    <section className="programmes section-space jade-surface" id="programmes" aria-labelledby="programmes-title">
      <div className="shade-wash" aria-hidden="true"/><div className="container"><div className="section-heading" data-reveal><div><Eyebrow>{home.programmes.eyebrow}</Eyebrow><h2 id="programmes-title" className="section-title">{home.programmes.title}</h2></div><p>{home.programmes.description}</p></div>
        <div className="programme-list">{home.programmes.items.map(item => <a className="programme" href={item.href} key={item.number}><span className="small-label">{item.number}</span><div><h3>{item.name}</h3><p>{item.description}</p><small>{item.detail}</small></div><Arrow diagonal/></a>)}</div><p className="programme-note">{home.programmes.note}</p>
      </div>
    </section>

    <section className="day-section" id="a-day-at-jade" aria-labelledby="day-title"><div className="day-pin"><div className="container"><div className="day-heading"><div><Eyebrow>{home.day.eyebrow}</Eyebrow><h2 className="section-title" id="day-title">{home.day.title}</h2></div><div className="day-intro"><p>{home.day.description}</p><DayControls/></div></div></div>
      <div className="day-window"><div className="day-track">{home.day.chapters.map(chapter => <article className="day-card" key={chapter.number}><Picture media={chapter.image} sizes="(max-width: 1023px) 100vw, 60vw"/><div className="day-card-content"><span className="day-number">{chapter.number}</span><div><p className="small-label">{chapter.moment}</p><h3>{chapter.title}</h3><p>{chapter.description}</p></div></div></article>)}</div></div>
      <div className="container day-bottom"><p>{home.day.note}</p><div className="day-progress" aria-hidden="true"><span/></div></div>
    </div></section>

    <section className="statistics section-space" aria-labelledby="stats-title"><div className="container"><div className="stats-heading"><div><Eyebrow>{home.stats.eyebrow}</Eyebrow><h2 className="section-title" id="stats-title">{home.stats.title}</h2></div><p className="todo">{home.stats.note}</p></div><Statistics items={home.stats.items}/></div></section>

    <section className="outcomes section-space" id="beyond-jade" aria-labelledby="outcomes-title"><div className="container"><div className="outcomes-grid"><div className="outcomes-intro" data-reveal><Eyebrow>{home.outcomes.eyebrow}</Eyebrow><h2 className="section-title" id="outcomes-title">{home.outcomes.title}</h2><p>{home.outcomes.description}</p><TextLink link={home.outcomes.link}/><p className="todo">{home.outcomes.placeholder}</p></div><div className="outcomes-story"><Picture media={home.outcomes.image}/><Testimonials/></div></div></div></section>

    <section className="news section-space" id="stories" aria-labelledby="news-title"><div className="container"><div className="section-heading" data-reveal><div><Eyebrow>{home.news.eyebrow}</Eyebrow><h2 className="section-title" id="news-title">{home.news.title}</h2></div><TextLink link={home.news.link} diagonal/></div>
      <div className="news-grid">{home.news.items.map(item => <article className="news-card" key={item.title} data-reveal><a href={item.href} target="_blank" rel="noreferrer"><Picture media={item.image}/><div className="news-meta"><span>{item.category}</span><span>{item.date}</span></div><div className="news-title"><h3>{item.title}</h3><Arrow diagonal/></div><span className="sr-only">{home.news.externalLabel}</span></a></article>)}</div>
    </div></section>

    <section className="enquiry section-space" id="enquire" aria-labelledby="enquiry-title"><div className="container enquiry-grid"><div className="enquiry-intro" data-reveal><Eyebrow>{home.enquiry.eyebrow}</Eyebrow><h2 className="section-title" id="enquiry-title">{home.enquiry.title}</h2><p>{home.enquiry.description}</p><div className="enquiry-contact"><span className="small-label">{home.enquiry.contactLabel}</span>{home.enquiry.contactLinks.map(link => <a href={link.href} key={link.href}>{link.label}<Arrow diagonal/></a>)}</div><p className="todo">{home.enquiry.feeNote}</p><p className="todo">{home.enquiry.admissionsNote}</p></div>
      <div className="enquiry-form-wrap"><p className="prototype-notice">{home.enquiry.notice}</p><EnquiryForm/></div>
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": "School", name: site.name, description: home.meta.description, telephone: site.telephone, email: site.email, address: {"@type": "PostalAddress", ...site.postalAddress}, sameAs: [site.source]}).replace(/</g, "\\u003c")}}/>
  </main>;
}
