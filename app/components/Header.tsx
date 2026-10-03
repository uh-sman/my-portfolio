"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import Navbar from "./Navbar";
import Magnetic from "./Magnetic";
import { navItems, socials, profile } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const header = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (navOpen) lenis?.stop();
    else lenis?.start();
  }, [navOpen, lenis]);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setNavOpen(false);
    lenis?.start();
    lenis?.scrollTo(href, { offset: -40, duration: 1.4 });
  };

  // Track which section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Hide on scroll down, reveal on scroll up; drive the progress bar.
  useGSAP(() => {
    const show = gsap.quickTo(header.current, "yPercent", { duration: 0.5, ease: "power3.out" });
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.set(progress.current, { scaleX: self.progress });
        if (self.scroll() < 120) show(0);
        else show(self.direction === 1 ? -130 : 0);
      },
    });
  });

  // Mobile overlay menu animation.
  useGSAP(
    () => {
      if (!menu.current) return;
      if (navOpen) {
        gsap.timeline()
          .set(menu.current, { display: "flex" })
          .fromTo(menu.current, { clipPath: "circle(0% at 100% 0%)" }, { clipPath: "circle(150% at 100% 0%)", duration: 0.8, ease: "expo.inOut" })
          .fromTo(".m-link", { yPercent: 120 }, { yPercent: 0, stagger: 0.06, duration: 0.7, ease: "power4.out" }, "-=0.35")
          .fromTo(".m-meta", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "-=0.3");
      } else {
        gsap.to(menu.current, {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.6,
          ease: "expo.inOut",
          onComplete: () => {
            gsap.set(menu.current, { display: "none" });
          },
        });
      }
    },
    { dependencies: [navOpen], scope: menu }
  );

  return (
    <>
      <header ref={header} className="site-header fixed inset-x-0 top-0 z-50 pt-4">
        <div className="container flex items-center justify-between gap-4">
          <a href="#home" className="relative z-[51] flex items-center gap-3" aria-label="Home">
            <Image src="/images/logo.svg" alt="" width={36} height={36} priority />
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 sm:block">
              {profile.handle}
            </span>
          </a>

          <Navbar active={active} />

          <div className="flex items-center gap-2">
            <Magnetic strength={0.3}>
              <a href="#contact" className="btn btn-primary hidden h-10 px-5 md:inline-flex">
                <span>Let&apos;s talk</span>
              </a>
            </Magnetic>

            <button
              className="glass relative z-[51] grid h-11 w-11 place-items-center rounded-full md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-5 bg-zinc-100 transition-all duration-500 ${navOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-5 bg-zinc-100 transition-all duration-500 ${navOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="fixed inset-x-0 top-0 z-[55] h-[2px]">
        <div ref={progress} className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent-soft via-accent-violet to-fuchsia-300" />
      </div>

      {/* Mobile menu */}
      <div
        ref={menu}
        className="fixed inset-0 z-[49] hidden flex-col justify-between bg-ink-900/95 px-6 pb-10 pt-28 backdrop-blur-2xl md:!hidden"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <nav className="flex flex-col gap-2">
          {navItems.map(({ label, href }, i) => (
            <div key={href} className="overflow-hidden">
              <a
                href={href}
                onClick={(e) => goTo(e, href)}
                className={`m-link flex items-baseline gap-4 text-5xl font-semibold tracking-tight ${active === href ? "text-zinc-50" : "text-zinc-500"}`}
              >
                <span className="font-mono text-xs text-accent-soft">0{i + 1}</span>
                {label}
              </a>
            </div>
          ))}
        </nav>
        <div className="m-meta flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-50">
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
