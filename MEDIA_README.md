# Media replacement schedule

All current photography is **placeholder archive photography**, locally stored as WebP and visibly labelled in the prototype. It comes from Jade International School's published website; it is not stock imagery presented as the campus. Approval for final public reuse, subject consent and replacements is still required. Do not infer student identities, dates or outcomes from these photographs.

| Asset in `/public/media` | Current source | Intended replacement | Aspect ratio / recommended size | Format / budget |
| --- | --- | --- | --- | --- |
| `hero-placeholder.webp` | Official Home page science-lab image | Professionally photographed learning moment with subject on right and negative space on left; include a mobile crop | Desktop 16:9, 2400×1350; mobile 3:4, 900×1200 | WebP/AVIF, desktop ≤300KB and mobile ≤150KB |
| `learning-placeholder.webp` | Same official lab image; temporary repeated crop | Natural participative classroom scene | 4:5, 1200×1500 | WebP/AVIF, ≤180KB |
| `science-placeholder.webp` | Same official lab image | Wide practical-learning photograph for the school-day story | 16:9, 1600×900 | WebP/AVIF, ≤180KB |
| `sport-placeholder.webp` | Official Sports page, in-house futsal court | Wide school sport photograph with room for mobile cropping | 16:9, 1600×900 | WebP/AVIF, ≤180KB |
| `community-placeholder.webp` | Official Sports page, team photograph | School-life image; replace separately in outcomes with approved graduate portrait and in news with a matching graduation image | School day/news 3:2, 1500×1000; portrait 4:5, 1000×1250 | WebP/AVIF, ≤180KB each |

The current files retain their source aspect ratios and are cropped in CSS, never stretched. Next/Image serves responsive optimized sizes. Hero is preloaded; other images use default lazy loading. Source URLs are registered in `docs/media-sources.json`.

## Optional future hero video

The Phase 1 hero uses the image option allowed by the brief. No empty, misleading or fake video is shipped. If a real film is approved, add `hero-film.webm` (VP9) and `hero-film.mp4` (H.264), 1920×1080, 16:9, 10–15 seconds, muted, no essential text/audio, target ≤3MB. Provide the approved hero poster above. Add an accessible play/pause control, load video only after the poster/LCP and only for suitable connections, and use the still poster under reduced motion. `home.hero.video` is currently `null`; wiring real video is deliberately deferred until there is a real approved asset.

## Brand and fonts

The geometric jade mark and typographic wordmark are design proposals, not an official crest. Replace with school-approved SVG artwork before launch. `app/icon.svg` follows the same prototype direction. Local Newsreader (400/500) and DM Sans (400/600) font assets include their respective `*-OFL.txt` files.
