"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import Button from "./Button";
import Magnetic from "./Magnetic";
import { ArrowUp, ArrowUpRight } from "./Icons";
import { navItems, profile, socials } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const root = useRef<HTMLElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".footer-char", {
          yPercent: 100,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: { trigger: ".footer-name", start: "top 95%", end: "bottom bottom", scrub: 1 },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  const name = profile.name.toUpperCase();

  return (
    <footer ref={root} className="relative overflow-hidden border-t border-white/[0.06] pt-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-[400px] max-w-5xl rounded-full bg-gradient-to-r from-sky-500/15 via-violet-500/15 to-fuchsia-500/10 blur-[140px]" aria-hidden="true" />

      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="headline text-gradient reveal max-w-[14ch]">
              Let&apos;s build something <span className="serif-accent">amazing</span> together.
            </h2>
            <div className="reveal mt-10">
              <Button
                label="Start a project"
                href={`mailto:${profile.email}`}
                icon={<ArrowUpRight width={18} height={18} />}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Sitemap</p>
              <ul className="space-y-3">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="group inline-flex items-center text-zinc-300 transition-colors hover:text-zinc-50">
                      <span className="h-px w-0 bg-accent-soft transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Social</p>
              <ul className="space-y-3">
                {socials.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-zinc-50"
                    >
                      {label}
                      <ArrowUpRight width={14} height={14} className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] py-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Back to home">
            <Image src="/images/logo.svg" alt="" width={32} height={32} />
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} <span className="text-zinc-300">{profile.handle}</span>. All rights reserved.
            </span>
          </a>

          <Magnetic strength={0.4}>
            <button
              onClick={() => lenis?.scrollTo(0, { duration: 2 })}
              className="glass grid h-12 w-12 place-items-center rounded-full text-zinc-300 transition-colors hover:text-zinc-50"
              aria-label="Back to top"
            >
              <ArrowUp width={18} height={18} />
            </button>
          </Magnetic>
        </div>
      </div>

      <div className="footer-name pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <p className="flex justify-center whitespace-nowrap text-[14vw] font-semibold leading-[0.8] tracking-[-0.06em]">
          {name.split("").map((c, i) => (
            <span
              key={i}
              className="footer-char inline-block bg-gradient-to-b from-white/20 to-white/[0.02] bg-clip-text text-transparent"
            >
              {c === " " ? " " : c}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
