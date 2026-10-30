import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {pathways} from "@/content/pathways";
import {site} from "@/content/site";
import {SchoolPhoto,VerifiedFacts} from "@/components/SchoolContent";

export const dynamicParams=false;
export function generateStaticParams(){return pathways.map(p=>({pathway:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{pathway:string}>}):Promise<Metadata>{
  const {pathway}=await params;const page=pathways.find(p=>p.slug===pathway);
  if(!page)return {};
  return {title:page.title,description:page.description,openGraph:{title:page.title,description:page.description,images:[page.image.src]}};
}
export default async function PathwayPage({params}:{params:Promise<{pathway:string}>}){
  const {pathway}=await params;const page=pathways.find(p=>p.slug===pathway);
  if(!page)notFound();
  return <main id="main" className="pathway-page page-width"><Link href={site.back.href} className="back-link">{site.back.label}</Link><div className="pathway-heading" data-opening-copy><h1>{page.title}</h1><p>{page.description}</p></div><div className="pathway-grid"><div><SchoolPhoto media={page.image} className="pathway-photo" preload/><VerifiedFacts facts={page.facts} className="pathway-facts"/></div><div className="pathway-copy">{page.sections.map(section=><section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}<div className="pathway-next"><h2>{page.next.title}</h2><p>{page.next.body}</p><Link className="primary-button" href={page.next.link.href}>{page.next.link.label}</Link></div><div className="source-links"><p>{page.sourceLabel}</p>{page.sources.map(source=><a href={source.href} key={source.href}>{source.label}</a>)}</div></div></div></main>;
}
