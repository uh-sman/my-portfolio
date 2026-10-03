import React from "react";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { works } from "../data";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading
          index="04"
          label="Selected work"
          title="Projects I'm *proud* of"
          desc="A selection of products I've designed and engineered — from AI-powered platforms to full-stack apps and polished interfaces."
        />

        <div className="reveal-stagger grid gap-4 md:grid-cols-2 lg:gap-6">
          {works.map((work, i) => (
            <ProjectCard key={work.title} index={i} featured={i === 0} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
