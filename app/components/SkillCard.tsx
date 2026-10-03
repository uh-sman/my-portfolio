import Image from "next/image";
import React from "react";

interface SkillCardProps {
  imgSrc: string;
  label: string;
  desc: string;
}

const SkillCard = ({ imgSrc, label, desc }: SkillCardProps) => {
  return (
    <div className="card spotlight group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-500 hover:bg-ink-700/80">
      <figure className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.04] p-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110">
        <Image src={imgSrc} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      </figure>
      <div>
        <h3 className="font-medium text-zinc-100">{label}</h3>
        <p className="text-sm text-zinc-500">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
