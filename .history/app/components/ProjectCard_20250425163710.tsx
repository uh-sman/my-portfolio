import Image from 'next/image';
import React from 'react'


interface ProjectCardProps {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
    classes?: string;
}
const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }: ProjectCardProps) => {
  return (
    <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1${classes}`}>
      <figure className="">
        <Image 
        src={imgSrc}
        alt={title}
        loading='lazy'
        width={500}
        height={500}
        className={`img-cover ${classes}`} // Add your custom classes here
        />
      </figure>

      <div className="">
        <h3 className="title-1">
            {title}
        </h3>

        <div className="">
            {tags.map((label,key) => (
                <span key={key} className=''></span>
            ))}
        </div>

        <div className="">
            <span className="material-symbols-rounded" aria-hidden="true">
                arrow_downward
            </span>
        </div>        
      </div>

      <a href={projectLink} target="blank" className=""></a>
    </div>
  )
}

export default ProjectCard
