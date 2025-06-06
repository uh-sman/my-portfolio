import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  content: string;
  company: string;
  imgSrc: string;
  name: string;
  desc: string;
  classes?: string;
}

const ratings = new Array(5);

ratings.fill({
  icon: "star",
  style: { fontVariationSettings: "'FILL' 1" },
});
const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return (
    <div className="">
      <div className="">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="">
        {content}
      </p>

      <div className="">
        <figure className="">
          <Image src={imgSrc} alt={name} className="img-cover"
          />
        </figure>
      </div>
    </div>
  );
};

export default ReviewCard;
