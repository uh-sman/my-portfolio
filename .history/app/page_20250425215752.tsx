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

export default function Home() {
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
