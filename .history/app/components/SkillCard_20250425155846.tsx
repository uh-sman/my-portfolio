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
    <div className={`flex items-center gap-3 ring-2 ring-inset ring-50;0 rounded-2xl p-3 hover:bg-zinc-800 transit`}>
      <figure className="">
        <Image src={imagSrc} alt={label} width={32} height={32}/>
      </figure>
      <div className="">
        <h3>{label}</h3>

        <p className="">
            {desc}
        </p>
      </div>
    </div>
  )
}

export default SkillCard
