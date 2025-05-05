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
        width={500}
        height={500}
        
        />
      </figure>
    </div>
  )
}

export default ProjectCard
