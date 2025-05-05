import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  classes?: string;
}

interface MyTooltipProps {
  tooltipContent: string;
}
const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors group ${classes}`}
    >
      {/* group-hover:opacity-60 transition-opacity duration-300 */}
      <figure className="img-box aspect-square rounded-lg mb-4">
        <Image
          src={imgSrc}
          alt={title}
          loading="lazy"
          width={500}
          height={500}
          className={`img-cover ${classes}`} // Add your custom classes here
        />
        <div className="w-11 h-11">
          <a
            href="#"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="checkout live"
            className="material-symbols-rounded absolute top-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            open_in_new
          </a>
        <MyTooltip tooltipContent="checkout live"/>
        </div>
      </figure>
      {/*  */}
      
      <div className="flex items-center justify-between gap-4">
        <h3 className="title-1">{title}</h3>

        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_downward
          </span>
        </div>
      </div>
      <a href={projectLink} target="blank" className="absolute inset-0"></a>
    </div>
  );
};

export default ProjectCard;


const MyTooltip = ({ tooltipContent }: MyTooltipProps) => {
  return (
    <span className="bg-zinc-800 absolute -top-3 right-2">
      <a href="">{tooltipContent}</a>
    </span>
  )
}