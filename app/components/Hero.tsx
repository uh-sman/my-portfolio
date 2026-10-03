"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import SplitText from "./SplitText";
import { ArrowDown, ArrowUpRight, Sparkle } from "./Icons";
import { profile } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ ready }: { ready: boolean }) => {
  const root = useRef<HTMLElement>(null);

  // Intro sequence, played once the preloader has lifted.
  useGSAP(
    () => {
      if (!ready) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(".hero-word", { yPercent: 110, rotate: 4, stagger: 0.06, duration: 1.2 })
          .from(".hero-badge", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.1)
          .from(".hero-fade", { y: 30, autoAlpha: 0, stagger: 0.1, duration: 1 }, 0.5)
          .from(".hero-portrait", { scale: 0.85, autoAlpha: 0, duration: 1.6, ease: "expo.out" }, 0.2)
          .from(".hero-chip", { scale: 0, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: "back.out(2)" }, 0.9)
          .from(".site-header", { y: -30, autoAlpha: 0, duration: 1 }, 0.4);

        // Scroll-out parallax
        gsap.to(".hero-content", {
          yPercent: -18,
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-visual", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });

      // Mouse parallax on layered elements (desktop only)
      mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-depth]").map((el) => ({
          depth: Number(el.dataset.depth),
          x: gsap.quickTo(el, "x", { duration: 1, ease: "power3" }),
          y: gsap.quickTo(el, "y", { duration: 1, ease: "power3" }),
        }));
        const onMove = (e: MouseEvent) => {
          const dx = e.clientX / window.innerWidth - 0.5;
          const dy = e.clientY / window.innerHeight - 0.5;
          layers.forEach((l) => {
            l.x(dx * l.depth);
            l.y(dy * l.depth);
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [ready] }
  );

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 lg:pt-28"
    >
      {/* Background: grid + aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        <div className="absolute -left-[10%] top-[10%] h-[520px] w-[520px] animate-aurora rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute right-[-5%] top-[30%] h-[460px] w-[460px] animate-aurora rounded-full bg-violet-500/20 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute bottom-[-10%] left-[35%] h-[380px] w-[380px] animate-aurora rounded-full bg-fuchsia-500/10 blur-[120px] [animation-delay:-12s]" />
      </div>

      <div className="container grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="hero-content">
          <div className="hero-badge glass mb-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
            <figure className="h-8 w-8 overflow-hidden rounded-full bg-zinc-700">
              <Image src="/images/avatar-1.jpg" alt={profile.name} width={32} height={32} className="h-full w-full object-cover" />
            </figure>
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-zinc-300">{profile.availability} · {profile.timezone.split(" ")[0]}</span>
          </div>

          <SplitText
            as="h1"
            text="Building *scalable* modern websites for the *future*"
            wordClass="hero-word"
            className="display words-gradient max-w-[14ch]"
          />

          <p className="hero-fade mt-8 max-w-[46ch] text-base leading-relaxed text-zinc-400 md:text-lg">
            I&apos;m <span className="text-zinc-100">{profile.name}</span>, a {profile.role.toLowerCase()} building
            production web apps and SaaS products — with AI features built end to end, from tutor
            agents to customer-service assistants.
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-3">
            <Button label="View my work" href="#work" icon={<ArrowUpRight width={18} height={18} />} />
            {profile.resumeUrl ? (
              <Button
                label="Download CV"
                href={profile.resumeUrl}
                target="_blank"
                variant="ghost"
                icon={<ArrowDown width={16} height={16} />}
              />
            ) : (
              <Button label="Get in touch" href="#contact" variant="ghost" />
            )}
          </div>
        </div>

        {/* Portrait */}
        <div className="hero-visual relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]">
          <div className="hero-portrait relative aspect-[4/5]">
            <div data-depth="-20" className="absolute inset-[8%] rounded-full bg-gradient-to-br from-sky-400/50 via-violet-500/40 to-fuchsia-400/30 blur-3xl" />
            <div data-depth="-10" className="absolute inset-x-[6%] bottom-0 top-[10%] rounded-t-full border border-b-0 border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]" />
            <div data-depth="10" className="absolute inset-0">
              <Image
                src="/images/my-image.png"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 460px, 400px"
                className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_70%,transparent_100%)]"
              />
            </div>
          </div>

          {/* Rotating badge */}
          <div data-depth="30" className="hero-chip absolute -left-2 bottom-[14%] sm:-left-8">
            <div className="glass relative grid h-28 w-28 place-items-center rounded-full">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
                <defs>
                  <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-zinc-300 font-mono text-[9.5px] uppercase tracking-[0.18em]">
                  <textPath href="#circle">Full-stack engineer • AI integration •</textPath>
                </text>
              </svg>
              <Sparkle width={22} height={22} className="text-accent-soft" />
            </div>
          </div>

          <div data-depth="40" className="hero-chip glass absolute -right-2 top-[14%] rounded-2xl px-4 py-3 sm:-right-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Shipped</p>
            <p className="text-2xl font-semibold">
              45<span className="text-accent-soft">+</span>
              <span className="ml-1 text-sm font-normal text-zinc-400">projects</span>
            </p>
          </div>

          <div data-depth="25" className="hero-chip glass absolute bottom-[3%] right-[4%] flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
            Next.js · Python · AI
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="hero-fade absolute inset-x-0 bottom-8 mx-auto hidden w-fit flex-col items-center gap-3 text-zinc-500 transition-colors hover:text-zinc-200 md:flex"
        aria-label="Scroll to about section"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border border-current pt-2">
          <span className="h-2 w-px animate-scroll-dot bg-current" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
