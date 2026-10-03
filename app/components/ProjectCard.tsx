"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, GitHub } from "./Icons";

interface ProjectCardProps {
  index: number;
  imgSrc: string;
  title: string;
  subtitle: string;
  tags: string[];
  projectLink: string;
  liveLink: string;
  featured?: boolean;
}

const ProjectCard = ({
  index,
  imgSrc,
  title,
  subtitle,
  tags,
  projectLink,
  liveLink,
  featured = false,
}: ProjectCardProps) => {
  const card = useRef<HTMLElement>(null);
  const hasRepo = projectLink.includes("github.com");

  useGSAP(
    () => {
      const el = card.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Image drifts inside its frame while scrolling.
        gsap.fromTo(
          ".project-img",
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(el, { transformPerspective: 1200 });
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
        const strength = featured ? 3 : 6;
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * strength);
          rx(-((e.clientY - r.top) / r.height - 0.5) * strength);
        };
        const onLeave = () => {
          rx(0);
          ry(0);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: card }
  );

  return (
    <article
      ref={card}
      className={`project-card card spotlight group flex flex-col p-3 [transform-style:preserve-3d] md:p-4 ${
        featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-4" : ""
      }`}
    >
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="View"
        aria-label={`Open ${title} live site`}
        className={`relative block overflow-hidden rounded-2xl bg-ink-700 ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/11]"
        }`}
      >
        <div className="project-img absolute inset-[-8%_0]">
          <Image
            src={imgSrc}
            alt={`${title} preview`}
            fill
            sizes={featured ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-xs text-zinc-300 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </a>

      <div className={`flex flex-1 flex-col px-2 pb-2 pt-5 ${featured ? "lg:justify-between lg:p-6" : ""}`}>
        <div>
          {featured && (
            <p className="eyebrow mb-4 text-[10px]">Featured project</p>
          )}
          <h3 className={`font-semibold tracking-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {title}
          </h3>
          <p className="mt-1 text-zinc-400">{subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary h-10 px-5"
          >
            <span>Live site</span>
            <ArrowUpRight width={16} height={16} className="btn-icon" />
          </a>
          {hasRepo && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost h-10 px-4"
              aria-label={`${title} source code on GitHub`}
            >
              <GitHub width={18} height={18} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
