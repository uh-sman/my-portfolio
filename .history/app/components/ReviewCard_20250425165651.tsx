import React from 'react'


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
    icon: ""
})
const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return <div className=''></div>;
};

export default ReviewCard
