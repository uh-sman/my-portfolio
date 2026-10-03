"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Soft trailing ring that grows over links and shows a label over [data-cursor].
const Cursor = () => {
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!window.matchMedia("(pointer: fine)").matches || !ring.current) return;

    const el = ring.current;
    gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      gsap.to(el, { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement;
      const labelled = target.closest<HTMLElement>("[data-cursor]");
      const interactive = target.closest("a, button, input, textarea, [role='button']");

      if (labelled) {
        if (label.current) label.current.textContent = labelled.dataset.cursor ?? "";
        gsap.to(el, { width: 96, height: 96, backgroundColor: "rgba(250,250,250,1)", borderColor: "rgba(250,250,250,0)", duration: 0.4, overwrite: "auto" });
        gsap.to(label.current, { autoAlpha: 1, scale: 1, duration: 0.3 });
      } else {
        gsap.to(label.current, { autoAlpha: 0, scale: 0.6, duration: 0.2 });
        gsap.to(el, {
          width: interactive ? 56 : 32,
          height: interactive ? 56 : 32,
          backgroundColor: interactive ? "rgba(125,211,252,0.12)" : "rgba(125,211,252,0)",
          borderColor: interactive ? "rgba(125,211,252,0.6)" : "rgba(250,250,250,0.35)",
          duration: 0.4,
          overwrite: "auto",
        });
      }
    };
    const onLeave = () => gsap.to(el, { autoAlpha: 0, duration: 0.3 });

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  });

  return (
    <div
      ref={ring}
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 items-center justify-center rounded-full border border-white/35 [@media(pointer:fine)]:flex"
      aria-hidden="true"
    >
      <span
        ref={label}
        className="invisible scale-50 text-xs font-semibold uppercase tracking-widest text-ink-950 opacity-0"
      />
    </div>
  );
};

export default Cursor;
