import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/tesla-clone-img.png",
    title: "Tesla Clone",
    tags: ["Responsive Design", "Clone"],
    projectLink: "https://github.com/uh-sman/Tesla-clone-App.git",
    liveLink: "https://incandescent-piroshki-0d87d0.netlify.app/#",
  },
  {
    imgSrc: "/images/carepulse-image.png",
    title: "CarePulse",
    tags: ["Healthcare", "Fullstack", "Appwrite"],
    projectLink: "https://github.com/uh-sman/carepulse",
    liveLink: "https://carepulse-ten-gules.vercel.app/",
  },
  {
    imgSrc: "/images/youtubeclone-image.png",
    title: "Youtube Clone",
    tags: ["Entertainment", "Development", "Clone"],
    projectLink: "https://github.com/uh-sman/YoutubeClone",
    liveLink: "https://youtube-clone-u.netlify.app/",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
    liveLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
    liveLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["LL", "SPA"],
    projectLink: "https://github.com/uh-sman/ai-voice-app",
    liveLink: "https://ai-voice-app-tau.vercel.app/",
  },
];
const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, liveLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              liveLink={liveLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
