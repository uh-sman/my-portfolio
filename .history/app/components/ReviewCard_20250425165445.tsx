import React from 'react'


interface ReviewCardProps {
    content: string;
    company: string;
    imgSrc: string;
    name: string;
    desc: string;
    classes?: string;
}
const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return <div></div>;
};

export default ReviewCard
