"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "../data";

gsap.registerPlugin(ScrollTrigger);

const intro =
  "I'm Usman — a full-stack software engineer with over four years of experience building production web apps and SaaS products. I build AI features end to end — tutor agents, product recommendations, customer-service assistants — and the parts around them: authentication, role-based access, subscriptions and payments.";

const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 45, suffix: "+", label: "Projects completed" },
  { value: 35, suffix: "%", label: "Faster page loads at Fellor" },
  { value: 95, suffix: "%", label: "On-time sprint delivery" },
];

const About = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Words light up as the paragraph scrolls through the viewport.
        gsap.fromTo(
          ".about-word",
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: "none",
            scrollTrigger: { trigger: ".about-text", start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
      });

      // Count-up numbers
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="about" ref={root} className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow reveal">
              <span className="text-accent-soft">01</span> About me
            </p>
          </div>

          <p className="about-text text-[clamp(1.6rem,3.2vw,2.75rem)] font-medium leading-[1.25] tracking-[-0.02em] lg:col-span-9">
            {intro.split(" ").map((word, i) => (
              <span key={i} className="about-word">
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="reveal-stagger mt-20 grid grid-cols-2 gap-3 lg:mt-28 lg:grid-cols-4 lg:gap-4">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="card spotlight p-6 md:p-8">
              <p className="flex items-baseline text-5xl font-semibold tracking-tight md:text-6xl">
                <span data-count={value}>{value}</span>
                <span className="serif-accent">{suffix}</span>
              </p>
              <p className="mt-3 text-sm text-zinc-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-4 flex items-center justify-between gap-6 rounded-3xl border border-white/[0.07] bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-transparent p-6 md:p-8">
          <div>
            <p className="max-w-[60ch] text-zinc-300 md:text-lg">
              I read specs and designs closely, work well alongside product, design and QA teams,
              and write clearly. Comfortable working remotely and independently against deadlines.
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
              {profile.location} · {profile.timezone} · <span className="text-accent-soft">{profile.availability}</span>
            </p>
          </div>
          <Image src="/images/logo.svg" alt="" width={44} height={44} className="hidden shrink-0 opacity-80 sm:block" />
        </div>
      </div>
    </section>
  );
};

export default About;
