"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "./SplitText";
import Button from "./Button";
import { ArrowDown } from "./Icons";
import { education, experience, profile } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The timeline line draws itself as you scroll through the roles.
        gsap.fromTo(
          ".exp-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".exp-list", start: "top 65%", end: "bottom 65%", scrub: true },
          }
        );

        gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item) => {
          gsap.from(item, {
            x: 40,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
          });
          gsap.fromTo(
            item.querySelector(".exp-dot"),
            { scale: 0 },
            {
              scale: 1,
              duration: 0.6,
              ease: "back.out(3)",
              scrollTrigger: { trigger: item, start: "top 65%", once: true },
            }
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="experience" ref={root} className="section">
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow reveal mb-6">
              <span className="text-accent-soft">02</span> Experience
            </p>
            <SplitText
              text="Where I've *shipped* real products"
              className="headline words-gradient split-heading max-w-[12ch]"
            />
            <p className="reveal mt-6 max-w-[40ch] leading-relaxed text-zinc-400">
              Over four years of contract and freelance work — production web apps, SaaS
              products and AI features, built remotely with product, design and QA teams.
            </p>

            <div className="reveal card mt-8 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Education</p>
              <p className="mt-2 font-medium text-zinc-100">{education.degree}</p>
              <p className="text-sm text-zinc-400">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-accent-soft">{education.period}</p>
            </div>

            {profile.resumeUrl && (
              <div className="reveal mt-6">
                <Button
                  label="Download CV"
                  href={profile.resumeUrl}
                  target="_blank"
                  variant="ghost"
                  icon={<ArrowDown width={16} height={16} />}
                />
              </div>
            )}
          </div>
        </div>

        <ol className="exp-list relative lg:col-span-8">
          {/* Track + animated progress */}
          <span className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" aria-hidden="true" />
          <span
            className="exp-progress absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent-soft via-accent-violet to-fuchsia-300"
            aria-hidden="true"
          />

          {experience.map(({ role, company, period, meta, points, stack, current, note }) => (
            <li key={`${company}-${period}`} className="exp-item relative pb-10 pl-10 last:pb-0 md:pl-14">
              <span
                className={`exp-dot absolute left-0 top-7 grid h-[15px] w-[15px] place-items-center rounded-full border ${
                  current ? "border-accent-soft bg-accent/20" : "border-white/25 bg-ink-950"
                }`}
                aria-hidden="true"
              >
                <span className={`h-[5px] w-[5px] rounded-full ${current ? "bg-accent-soft" : "bg-zinc-400"}`} />
              </span>

              <article className="card spotlight p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">{period}</p>
                  {current && (
                    <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{role}</h3>
                <p className="mt-1 text-zinc-400">
                  <span className="text-zinc-200">{company}</span>
                  <span className="mx-2 text-zinc-600">·</span>
                  {meta}
                </p>

                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-zinc-400">
                      <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent-soft/70" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                {note && <p className="mt-4 text-sm italic text-zinc-500">{note}</p>}

                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
