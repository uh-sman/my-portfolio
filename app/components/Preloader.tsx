"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Counts to 100, then lifts away to reveal the page.
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(root.current, { autoAlpha: 0 });
        onComplete();
        return;
      }

      const count = { value: 0 };
      const tl = gsap.timeline();

      tl.from(".pl-char", {
        yPercent: 110,
        stagger: 0.04,
        duration: 0.8,
        ease: "power4.out",
      })
        .from(".pl-meta", { autoAlpha: 0, y: 10, duration: 0.5 }, "<0.2")
        .to(
          count,
          {
            value: 100,
            duration: 1.6,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counter.current) {
                counter.current.textContent = String(Math.round(count.value)).padStart(3, "0");
              }
            },
          },
          0
        )
        .to(".pl-bar", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0)
        .to(".pl-char", { yPercent: -110, stagger: 0.025, duration: 0.5, ease: "power3.in" })
        .to(".pl-meta", { autoAlpha: 0, duration: 0.3 }, "<")
        .add(onComplete, "-=0.1")
        .to(root.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.9,
          ease: "expo.inOut",
        }, "<")
        .set(root.current, { display: "none" });
    },
    { scope: root }
  );

  const name = "Usman Umar";

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
      style={{ clipPath: "inset(0 0 0% 0)" }}
      aria-hidden="true"
    >
      <div className="flex overflow-hidden text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
        {name.split("").map((c, i) => (
          <span key={i} className={`pl-char inline-block ${i >= 6 ? "font-serif font-normal italic text-accent-soft" : ""}`}>
            {c === " " ? " " : c}
          </span>
        ))}
      </div>

      <div className="pl-meta mt-8 w-56 md:w-72">
        <div className="h-px w-full bg-white/10">
          <div className="pl-bar h-px origin-left scale-x-0 bg-gradient-to-r from-accent-soft to-accent-violet" />
        </div>
        <div className="mt-3 flex justify-between font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          <span>Portfolio ©{new Date().getFullYear()}</span>
          <span ref={counter}>000</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
