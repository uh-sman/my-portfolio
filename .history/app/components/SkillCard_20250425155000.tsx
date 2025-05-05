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
        <Image src={imagSrc} alt={label} width={32} height={32}/>
      </figure>
      .
    </div>
  )
}

export default SkillCard
