import React from "react";
import SkillCard from "./SkillCard";
import SectionHeading from "./SectionHeading";
import { Sparkle } from "./Icons";
import { capabilities, skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[400px] max-w-3xl rounded-full bg-violet-600/10 blur-[140px]" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          index="03"
          label="Stack & capabilities"
          title="The tools I use to *craft* great products"
          desc="JavaScript, TypeScript and Python across the stack — from AI features and real-time APIs to the auth, payments and testing that make products production-ready."
        />

        <div className="reveal-stagger grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ imgSrc, label, desc }) => (
            <SkillCard key={label} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>

        <h3 className="reveal mb-6 mt-20 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          What I bring to a team
        </h3>

        <div className="reveal-stagger grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, items, highlight }, i) => (
            <div
              key={title}
              className={`card spotlight p-6 md:p-7 ${
                highlight
                  ? "border-accent/25 bg-gradient-to-br from-sky-500/[0.12] via-violet-500/[0.08] to-transparent md:col-span-2 lg:col-span-1 lg:row-span-2"
                  : i === capabilities.length - 1
                    ? "md:col-span-2 lg:col-span-3"
                    : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {highlight && <Sparkle width={16} height={16} className="text-accent-soft" />}
                <h4 className={`font-semibold tracking-tight ${highlight ? "text-xl" : "text-lg"}`}>{title}</h4>
              </div>
              {highlight && (
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  I build AI features end to end — then test model responses against real user
                  scenarios and tune them until they&apos;re reliable.
                </p>
              )}
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      highlight
                        ? "border-accent/25 bg-accent/10 text-sky-100"
                        : "border-white/[0.08] bg-white/[0.03] text-zinc-400"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
