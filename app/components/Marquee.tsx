import React from "react";
import { Sparkle } from "./Icons";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "AI Integrations",
  "PostgreSQL",
  "Tailwind CSS",
  "Python",
  "AI Agents",
  "WebSockets",
  "SaaS Platforms",
];

// Tilted, infinitely scrolling band between hero and about.
const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="relative z-10 -my-4 overflow-hidden py-10" aria-hidden="true">
      <div className="-rotate-2 scale-105 border-y border-white/10 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-300 py-4 text-ink-950">
        <div className="flex w-max animate-marquee [--marquee-duration:35s]">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 text-2xl font-semibold tracking-tight md:text-4xl">
              {item}
              <Sparkle width={22} height={22} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
