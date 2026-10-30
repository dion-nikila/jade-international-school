import type {MetadataRoute} from 'next';
import {site} from '@/content/site';
import {pathways} from '@/content/pathways';
import {stories} from '@/content/school';
export default function sitemap():MetadataRoute.Sitemap{return ['',...pathways.map(p=>`/${p.slug}`),'/about','/academics','/school-life','/admissions','/foundation','/news','/contact','/visit',...stories.map(s=>`/news/${s.slug}`)].map(path=>({url:site.url+path,changeFrequency:'monthly',priority:path?.7:1}));}
