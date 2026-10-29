import type {Metadata} from "next";
import localFont from "next/font/local";
import {site} from "@/content/site";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Motion} from "@/components/Motion";
import "lenis/dist/lenis.css";
import "./globals.css";

const display = localFont({src: [{path: "../public/fonts/newsreader-400.ttf", weight: "400", style: "normal"}, {path: "../public/fonts/newsreader-500.ttf", weight: "500", style: "normal"}], variable: "--font-display", display: "swap"});
const sans = localFont({src: [{path: "../public/fonts/dm-sans-400.ttf", weight: "400", style: "normal"}, {path: "../public/fonts/dm-sans-600.ttf", weight: "600", style: "normal"}], variable: "--font-body", display: "swap"});
export const metadata: Metadata = {metadataBase: new URL(site.url), title: {default: site.name, template: `%s | ${site.name}`}, icons: {icon: "/icon.svg"}};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang={site.language} className={`${display.variable} ${sans.variable}`}><body>
    <a className="skip-link" href="#main">{site.skipLink}</a>
    <Motion><Header/><div id="page-content">{children}<Footer/></div></Motion>
  </body></html>;
}
