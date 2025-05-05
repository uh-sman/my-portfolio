import Image from 'next/image';
import React from 'react'


interface SkillCardProps {
    imagSrc: string;
    label: string;
    desc: string;
    classes?: string;
}
const SkillCard = ({ imagSrc, label, desc, classes }: SkillCardProps) => {
  return (
    <div className=''>
      <figure className="">
        <Image src="" alt="" />
      </figure>
    </div>
  )
}

export default SkillCard
