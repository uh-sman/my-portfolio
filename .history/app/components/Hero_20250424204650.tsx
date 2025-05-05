import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-">
              <Image
                src="/images/avatar-1.jpg"
                alt="my-image"
                width={40}
                height={40}
                className="image-cover"
              />
            </figure>
            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="">Building scalable Modern Website for the Future</h2>
          <div className="">
            ButtonPrimary

            ButtonOutline
          </div>
        </div>

        <div className="">
            <figure className="">
              <Image src="/images/hero-banner.png"
              alt="my-image"
                width={656}
                height={500}
              />
            </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
