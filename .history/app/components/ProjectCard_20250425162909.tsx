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
    <div className="">
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
            {tags.map((label) => (
                <span></span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
