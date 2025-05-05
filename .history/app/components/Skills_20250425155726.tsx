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
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Skill I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the essential skills I utilize to create exceptional web
          applications. From design to development, I leverage a diverse set of
          tools and technologies to bring your ideas to life. Explore my
          skillset and see how I can help you achieve your web development
          goals.
        </p>

        <div className="">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard 
            imagSrc={imgSrc}
            label={label} 
            desc={desc} 
            key={key}
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
