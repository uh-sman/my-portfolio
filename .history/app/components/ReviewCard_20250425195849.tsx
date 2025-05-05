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
    icon: "star",
    style: { fontVariationSettings: "'FILL' 1" },
})
const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return <div className=''>
    <div className="">
       { 
         ratings.map(({icon, style}, key) => (
            <span key={key} className="material-symbols-"></span>
         ))
       }
    </div>
  </div>;
};

export default ReviewCard
