import React from "react";
import ReviewCard from "./ReviewCard";
import SectionHeading from "./SectionHeading";
import { reviews } from "../data";

const half = Math.ceil(reviews.length / 2);
const rows = [reviews.slice(0, half), reviews.slice(half)];

const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          index="05"
          label="Testimonials"
          title="Kind words from *clients*"
          align="center"
        />
      </div>

      <div className="reveal marquee-mask marquee-pause flex flex-col gap-4">
        {rows.map((row, r) => {
          // Repeat enough cards to fill wide screens, then duplicate for a seamless loop.
          const filled = [...row, ...row];
          return (
            <div
              key={r}
              className={`flex w-max gap-4 [--marquee-duration:60s] ${
                r === 0 ? "animate-marquee" : "animate-marquee-reverse"
              }`}
            >
              {[...filled, ...filled].map((review, i) => (
                <div key={i} aria-hidden={i >= row.length ? true : undefined}>
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
