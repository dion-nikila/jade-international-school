import type {Metadata} from "next";
import Link from "next/link";
import {site} from "@/content/site";
import {visit} from "@/content/visit";
import {SchoolPhoto} from "@/components/SchoolContent";
export const metadata:Metadata={title:visit.title,description:visit.description};
export default function VisitPage(){
  return <main id="main" className="pathway-page page-width"><Link href={site.back.href} className="back-link">{site.back.label}</Link><div className="pathway-heading" data-opening-copy><h1>{visit.title}</h1><p>{visit.description}</p></div><div className="visit-grid"><div><section className="visit-contact"><h2>{visit.contactTitle}</h2><p>{visit.contactBody}</p><div className="visit-links"><a href={site.telephoneHref}>{site.telephone}</a><a className="primary-button" href={site.whatsapp}>{visit.whatsappLabel}</a><a href={site.emailHref}>{site.email}</a></div></section><section className="visit-contact visit-follow-up"><h2>{visit.addressTitle}</h2><address>{site.address}</address><p>{visit.addressNote}</p></section><section className="visit-follow-up"><h2>{visit.questionsTitle}</h2><p>{visit.questionsBody}</p></section></div><SchoolPhoto media={visit.photo} className="pathway-photo" preload/></div></main>;
}
