import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  content: string;
  company: string;
  imgSrc: string;
  name: string;
  classes?: string;
}

const ratings = new Array(5);

ratings.fill({
  icon: "star",
  style: { fontVariationSettings: "'FILL' 1" },
});
const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span key={key} className="material-symbols-rounded text" style={style}>
            {icon}
          </span>
        ))}
      </div>

      <p className="">{content}</p>

      <div className="">
        <figure className="">
          <Image
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div className="">
          <p className="">{name}</p>

          <p className="">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
