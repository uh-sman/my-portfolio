"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [ready, setReady] = useState(false);
  const main = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Keep the page still while the preloader runs.
  useEffect(() => {
    if (ready) {
      lenis?.start();
      ScrollTrigger.refresh();
    } else {
      lenis?.stop();
    }
  }, [ready, lenis]);

  // Shared scroll-reveal animations, driven by class names.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.from(el, {
            y: 50,
            autoAlpha: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".split-heading").forEach((heading) => {
          gsap.from(heading.querySelectorAll(".split-word"), {
            yPercent: 110,
            rotate: 3,
            stagger: 0.05,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((group) => {
          gsap.from(group.children, {
            y: 60,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: main }
  );

  // Feed cursor position to .spotlight cards for their glow effect.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={main}>
      <Preloader onComplete={() => setReady(true)} />
      <Cursor />
      <Header />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
