import type {MetadataRoute} from "next";
import {site} from "@/content/site";
import {pathways} from "@/content/pathways";
export default function sitemap(): MetadataRoute.Sitemap {return ["",...pathways.map(p=>`/${p.slug}`),"/visit"].map(path=>({url:site.url+path,changeFrequency:"monthly",priority:path ? .7 : 1}));}
