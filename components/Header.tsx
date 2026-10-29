"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Arrow, Eyebrow, JadeMark, Picture } from "./Primitives";

export function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => header.current?.classList.toggle("header-scrolled", window.scrollY > 36);
    onScroll(); window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const page = document.getElementById("page-content");
    if (page) page.inert = true;
    const links = panel.current?.querySelectorAll<HTMLElement>('a[href], button');
    links?.[0]?.focus({preventScroll:true});
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (event.key === "Tab") {
        const items = Array.from(header.current?.querySelectorAll<HTMLElement>('a[href], button') || []).filter(el => el.getClientRects().length > 0);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
        else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {document.body.style.overflow = previousOverflow; if (page) page.inert = false; window.removeEventListener("keydown", onKey);};
  }, [open]);

  function close() {setOpen(false);}

  return <header ref={header} className={`site-header ${open ? "menu-is-open" : ""}`} role={open ? "dialog" : undefined} aria-modal={open || undefined} aria-label={open ? site.menuLabel : undefined}>
    <div className="header-bar">
      <a className="brand" href="#top" aria-label={site.homeLabel} onClick={close}>
        <JadeMark className="brand-mark"/>
        <span className="brand-type"><span className="brand-word">{site.wordmark}</span><span className="brand-sub">{site.submark}</span></span>
      </a>
      <nav className="desktop-nav" aria-label={site.navLabel}>
        {site.navigation.slice(0, 3).map(item => <a key={item.label} href={item.href} onClick={close}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="tour-button" href={site.tour.href} onClick={close}>{site.tour.label}<Arrow diagonal/></a>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="jade-mega-menu" aria-label={open ? site.menuClose : site.menuOpen} onClick={() => setOpen(!open)}>
          <span className="menu-toggle-lines" aria-hidden="true"><i/><i/></span>
        </button>
      </div>
    </div>
    <div id="jade-mega-menu" ref={panel} className="mega-menu" hidden={!open} data-lenis-prevent>
      <div className="mega-links"><Eyebrow>{site.menuLabel}</Eyebrow>
        <nav aria-label={site.menuLabel}>{site.navigation.map(item => <a key={item.number} href={item.href} onClick={close}>
          <span className="menu-number">{item.number}</span><span><strong>{item.label}</strong><small>{item.description}</small></span><Arrow diagonal/>
        </a>)}</nav>
        <a className="menu-contact" href={site.emailHref}>{site.menu.contactLabel}<span>{site.email}</span></a>
      </div>
      <div className="mega-feature"><Picture media={site.menu.image}/><div><Eyebrow>{site.menu.eyebrow}</Eyebrow><h2>{site.menu.title}</h2><p>{site.menu.caption}</p></div></div>
    </div>
  </header>;
}
