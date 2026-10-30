import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {stories} from '@/content/school';
import {PageIntro,TourBanner} from '@/components/Sections';
export const dynamicParams=false;
export function generateStaticParams(){return stories.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const story=stories.find(s=>s.slug===slug);return story?{title:story.title,description:story.summary}:{};}
export default async function Story({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=stories.find(s=>s.slug===slug);if(!s)notFound();return <main id="main"><PageIntro title={s.title} body={s.summary} image={s.image}><p className="article-category">{s.category} / {s.date}</p></PageIntro><div className="section page-width"><article className="article-layout">{s.paragraphs.map(p=><p key={p}>{p}</p>)}<a className="plain-link" href={s.source}>{s.sourceLabel}</a><div style={{marginTop:40}}><Link className="plain-link" href="/news">Back to school stories</Link></div></article></div><TourBanner/></main>;}
