"use client";
import React, { useEffect, useRef } from "react";
import { navItems } from "../data";

// Desktop pill nav with a sliding indicator that follows the active section.
const Navbar = ({ active }: { active: string }) => {
  const nav = useRef<HTMLElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const place = () => {
      const link = nav.current?.querySelector<HTMLAnchorElement>(`a[href="${active}"]`);
      if (!link || !indicator.current) return;
      indicator.current.style.width = `${link.offsetWidth}px`;
      indicator.current.style.transform = `translateX(${link.offsetLeft}px)`;
      indicator.current.style.opacity = "1";
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <nav
      ref={nav}
      className="glass relative isolate hidden items-center rounded-full p-1 md:flex"
      aria-label="Primary"
    >
      <span
        ref={indicator}
        className="absolute left-0 top-1 -z-10 h-[calc(100%-0.5rem)] rounded-full bg-zinc-50 opacity-0 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        aria-hidden="true"
      />
      {navItems.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
            active === href ? "text-ink-950" : "text-zinc-400 hover:text-zinc-50"
          }`}
          aria-current={active === href ? "true" : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
