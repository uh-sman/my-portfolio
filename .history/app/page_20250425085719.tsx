import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill/>
      </main>
    </>
  );
}

//  <div className="container max-w-2xl h-screen">
//    <Header />
//  </div>;
