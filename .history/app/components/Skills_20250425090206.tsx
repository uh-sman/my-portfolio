import React from 'react'

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
    <section className='section'>
      <div className="container">
        
        <h2 className="headline-2">
            Essential 
        </h2>

        <p className="">
            Discover the essential skills I utilize to create exceptional web applications. From design to development, I leverage a diverse set of tools and technologies to bring your ideas to life. Explore my skillset and see how I can help you achieve your web development goals.
        </p>
      </div>
    </section>
  )
}

export default Skill
