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
    <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
      <figure className="img-box aspect-square rounded-lg mb-4">
        <Image 
        src={imgSrc}
        alt={title}
        loading='lazy'
        width={500}
        height={500}
        className={`img-cover ${classes}`} // Add your custom classes here
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <h3 className="title-1">
            {title}
        </h3>

        <div className="flex flex-wrap items-center gap-2">
            {tags.map((label,key) => (
                <span key={key} className='h-8 text-sm text-zinc-400 bg-zinc-5'></span>
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
