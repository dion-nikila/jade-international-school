# Public school preview

Live website: https://dion-nikila.github.io/jade-international-school/

Source code: https://github.com/dion-nikila/jade-international-school

The site is published through GitHub Pages from the `gh-pages` branch. All 16 marketing pages are exported as static HTML. The deployment includes `.nojekyll` so the `_next` scripts and fonts are served.

`npm run build:pages` sets the repository base path and public URL, disables the server image optimizer for this build, and writes `out/`. The shared SchoolImage component prefixes public image paths. Next/Link handles internal page prefixes. Logo and social image metadata use the public asset URLs. The original unused enquiry API stub is archived outside the app; the active tour planner uses WhatsApp and needs no server.

Verification: GitHub reports the Pages build as built. All 16 marketing routes, the original logo and the hero photo return HTTP 200 over HTTPS. The public browser preview was checked for real image loading, scroll effects, client navigation to School life and the gallery modal. No browser errors or warnings were observed. The static export and the normal local server build both pass TypeScript. HTTP results are in PAGES_HTTP_CHECKS.json.

Source changes on main do not automatically rebuild the manual deployment branch. Re-run the Pages export and publish its contents to gh-pages when updating the public preview. Keep source files on main and generated website files on gh-pages.
