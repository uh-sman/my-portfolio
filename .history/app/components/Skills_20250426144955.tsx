import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/typescript.png",
    label: "Typescript",
    desc: "Type Safety",
  },
  {
    imgSrc: "/images/postgresql.png",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/nextjs.png",
    label: "NextJS",
    desc: "Framework for React",
  },
  {
    imgSrc: "/images/redux.png",
    label: "Redux",
    desc: "State Management",
  },
  {
    imgSrc: "/images/material-ui.png",
    label: "Material UI",
    desc: "State Management",
  },
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Skill I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the essential skills I utilize to create exceptional web
          applications. From design to development, I leverage a diverse set of
          tools and technologies to bring your ideas to life. Explore my
          skillset and see how I can help you achieve your web development
          goals.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard 
            key={key}
            imagSrc={imgSrc}
            label={label} 
            desc={desc} 
            classes="reveal-up"
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
