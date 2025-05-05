import Image from "next/image";
import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <Image
                src="/images/avatar-1.jpg"
                alt="my-image"
                width={40}
                height={40}
                className="image-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building scalable Modern Website for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              label="Scroll down"
              icon="arrow_downward"
              href="#about"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to from-sky-400 via-sky-400 to-65% rounded-[60px] overflow-hidden">
            <Image
              src="/images/my-image.png"
              // src="/images/hero-banner.png"
              alt="my-image"
              width={656}
              height={500}
              priority
              className=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
