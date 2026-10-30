export type LinkItem = { label: string; href: string };
export type Media = { src: string; alt: string; label: string; position?: string };
export type Fact = {label: string; value: string | null; verify: boolean; source: string[]; note?: string};
export type EntryPoint = {title: string; description: string; href: string; linkLabel: string; image?: Media; details: Fact[]; nextStep: string};
export type OpeningContent = {
  meta: {title: string; description: string};
  sections: {hero: boolean; information: boolean; startHere: boolean; restOfHome: boolean};
  hero: {title: string; description: string; action: LinkItem; image: Media};
  information: {label: string; facts: Fact[]};
  startHere: {title: string; description: string; entries: EntryPoint[]};
};
export type PathwayContent = {
  slug: string; title: string; description: string; image: Media; facts: Fact[];
  sections: {title: string; body: string}[]; next: {title: string; body: string; link: LinkItem};
  sources: LinkItem[]; sourceLabel: string;
};
export type Programme = { number: string; name: string; description: string; detail: string; href: string };
export type DayChapter = { number: string; moment: string; title: string; description: string; image: Media };
export type Statistic = { value: number | null; suffix: string; label: string; placeholder: string };
export type Testimonial = { quote: string; name: string; role: string; source: string };
export type NewsItem = { category: string; date: string; title: string; href: string; image: Media };
export type HomeContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string[]; italic: string; description: string; primary: LinkItem; secondary: LinkItem; location: string; footnote: string; image: Media; video: string | null };
  statement: { eyebrow: string; text: string; description: string; link: LinkItem; note: string };
  why: { eyebrow: string; title: string; image: Media; pillars: {number: string; title: string; description: string}[] };
  programmes: { eyebrow: string; title: string; description: string; items: Programme[]; note: string };
  day: { eyebrow: string; title: string; description: string; previous: string; next: string; chapters: DayChapter[]; note: string };
  stats: { eyebrow: string; title: string; note: string; items: Statistic[] };
  outcomes: { eyebrow: string; title: string; description: string; link: LinkItem; image: Media; placeholder: string; testimonials: Testimonial[]; previous: string; next: string; sourceLabel: string; slideLabel: string };
  news: { eyebrow: string; title: string; link: LinkItem; items: NewsItem[]; externalLabel: string };
  enquiry: { eyebrow: string; title: string; description: string; notice: string; feeNote: string; admissionsNote: string; contactLabel: string; contactLinks: LinkItem[] };
};
