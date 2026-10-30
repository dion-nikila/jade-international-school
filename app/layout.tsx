import type {Metadata} from "next";
import localFont from "next/font/local";
import {site} from "@/content/site";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Motion} from "@/components/Motion";
import "./globals.css";
import "./brand.css";

const sans = localFont({src: [{path: "../public/fonts/dm-sans-400.ttf", weight: "400", style: "normal"}, {path: "../public/fonts/dm-sans-600.ttf", weight: "600", style: "normal"}], variable: "--font-body", display: "swap"});
export const metadata: Metadata = {metadataBase: new URL(site.url), title: {default: site.name, template: `%s | ${site.name}`}, icons: {icon: site.logo.src}, robots: {index:false,follow:false}};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang={site.language} className={sans.variable}><body>
    <a className="skip-link" href="#main">{site.skipLink}</a>
    <Motion><Header/><div id="page-content">{children}<Footer/></div></Motion>
  </body></html>;
}
