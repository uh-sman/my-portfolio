import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/tesla-clone-img.png",
    title: "Tesla Clone",
    tags: ["Responsive Design", "Clone"],
    projectLink: "https://github.com/uh-sman/Tesla-clone-App.git",
    live_link: "https://incandescent-piroshki-0d87d0.netlify.app/#",
  },
  {
    imgSrc: "/images/carepulse-image.png",
    title: "CarePulse",
    tags: ["Healthcare", "Fullstack", "Appwrite"],
    projectLink: "https://github.com/uh-sman/carepulse",
    live_link: "https://carepulse-ten-gules.vercel.app/",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
    live_link: "",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
    live_link: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
    live_link: "",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    live_link: "",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    live_link: "",
  },
  {
    imgSrc: "/images/youtubeclone-image.png",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/uh-sman/YoutubeClone",
    live_link: "https://youtube-clone-u.netlify.app/",
  },
];
const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, live_link }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
