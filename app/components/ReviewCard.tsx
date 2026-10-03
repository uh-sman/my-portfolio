import Image from "next/image";
import React from "react";
import { Quote, Star } from "./Icons";

interface ReviewCardProps {
  content: string;
  company: string;
  imgSrc: string;
  name: string;
}

const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return (
    <figure className="card spotlight flex w-[320px] shrink-0 flex-col p-6 md:w-[420px] md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-1 text-amber-300" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} width={16} height={16} />
          ))}
        </div>
        <Quote width={28} height={28} className="text-white/10" />
      </div>

      <blockquote className="mb-8 text-zinc-300 md:text-lg md:leading-relaxed">“{content}”</blockquote>

      <figcaption className="mt-auto flex items-center gap-3">
        <Image
          src={imgSrc}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
        />
        <div>
          <p className="font-medium text-zinc-100">{name}</p>
          <p className="text-sm text-zinc-500">{company}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default ReviewCard;
