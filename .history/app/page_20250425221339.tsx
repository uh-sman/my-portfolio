"use client"
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP,ScrollTrigger);
export default function Home() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')

    elements.forEach((element: any) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",

      })
    })

  })
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

//  <div className="container max-w-2xl h-screen">
//    <Header />
//  </div>;
