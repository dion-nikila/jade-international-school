"use client";
import {useEffect, useRef, type ReactNode} from "react";
import {usePathname} from "next/navigation";
import gsap from "gsap";
export function Motion({children}: {children: ReactNode}) {
  const scope=useRef<HTMLDivElement>(null);
  const pathname=usePathname();
  useEffect(()=>{
    const media=gsap.matchMedia();
    const context=gsap.context(()=>{
      media.add("(prefers-reduced-motion: no-preference)",()=>{
        const group=scope.current?.querySelector("[data-opening-copy]");
        if(group)gsap.from(group,{y:12,opacity:0,duration:.55,ease:"power2.out",clearProps:"all"});
      });
    },scope);
    return ()=>{media.revert();context.revert();};
  },[pathname]);
  return <div ref={scope}>{children}</div>;
}
