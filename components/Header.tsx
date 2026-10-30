"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import {site} from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const page = document.getElementById("page-content");
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (page) page.inert = true;
    ref.current?.querySelector<HTMLAnchorElement>(".mobile-navigation a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {setOpen(false);toggle.current?.focus();}
      if (event.key === "Tab") {
        const items = Array.from(ref.current?.querySelectorAll<HTMLElement>("a,button") || []).filter(el => el.getClientRects().length);
        const first = items[0], last = items[items.length-1];
        if (event.shiftKey && document.activeElement === first) {event.preventDefault();last?.focus();}
        else if (!event.shiftKey && document.activeElement === last) {event.preventDefault();first?.focus();}
      }
    };
    window.addEventListener("keydown", onKey);
    const breakpoint = window.matchMedia("(min-width: 1000px)");
    const resize = () => {if (breakpoint.matches) setOpen(false);};
    breakpoint.addEventListener("change", resize);
    return () => {document.body.style.overflow = overflow;if(page)page.inert=false;window.removeEventListener("keydown",onKey);breakpoint.removeEventListener("change",resize);};
  }, [open]);

  return <header ref={ref} className="school-header" role={open ? "dialog" : undefined} aria-modal={open || undefined} aria-label={open ? site.menuLabel : undefined}>
    <div className="header-inner">
      <Link className="school-logo" href="/" aria-label={site.homeLabel} onClick={() => setOpen(false)}><Image src={site.logo.src} width={site.logo.width} height={site.logo.height} alt={site.name} loading="eager" unoptimized/></Link>
      <nav className="desktop-navigation" aria-label={site.navLabel}>{site.navigation.map(link => <Link href={link.href} key={link.href} aria-current={pathname===link.href ? "page" : undefined}>{link.label}</Link>)}</nav>
      <div className="header-actions"><Link className="tour-link" href={site.tour.href} onClick={() => setOpen(false)}>{site.tour.label}</Link><button ref={toggle} className="menu-button" aria-expanded={open} aria-controls="school-mobile-navigation" onClick={() => setOpen(!open)}>{open ? site.menuClose : site.menuOpen}</button></div>
    </div>
    <nav id="school-mobile-navigation" className="mobile-navigation" aria-label={site.menuLabel} hidden={!open}>{site.navigation.map(link => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a href={site.telephoneHref}>{site.telephone}</a></nav>
  </header>;
}
