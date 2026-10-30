import Link from "next/link";
import {site} from "@/content/site";
export function Footer() {
  return <footer className="school-footer"><div className="page-width footer-content"><div><p className="footer-name">{site.name}</p><address>{site.address}</address><p className="copyright">{site.footer.copyright}</p></div><nav aria-label={site.footer.linksLabel}>{site.navigation.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><div className="footer-contacts"><p>{site.footer.contactLabel}</p><a href={site.telephoneHref}>{site.telephone}</a><a href={site.emailHref}>{site.email}</a></div></div></footer>;
}
