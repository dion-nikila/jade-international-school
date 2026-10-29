import { site } from "@/content/site";
import { Arrow, Eyebrow, JadeMark } from "./Primitives";

export function Footer() {
  return <footer className="site-footer jade-surface">
    <div className="shade-wash" aria-hidden="true"/>
    <div className="container footer-top"><div><Eyebrow>{site.footer.eyebrow}</Eyebrow><h2>{site.footer.headline}</h2></div><a className="footer-orbit" href="#enquire" aria-label={site.tour.label}><Arrow diagonal/></a></div>
    <div className="container footer-grid">
      <a href="#top" className="footer-brand" aria-label={site.homeLabel}><JadeMark/><span>{site.wordmark}</span></a>
      <nav aria-label={site.footer.linksLabel}><p className="small-label">{site.footer.linksLabel}</p>{site.footer.links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <div className="footer-contact"><p className="small-label">{site.footer.contactLabel}</p><address>{site.address}</address><a href={site.telephoneHref}>{site.telephone}</a><a href={site.emailHref}>{site.email}</a></div>
    </div>
    <div className="container footer-bottom"><span>{site.footer.copyright}</span><span>{site.footer.prototype}</span><a href="#top">{site.footer.backToTop}<Arrow/></a></div>
  </footer>;
}
