import Image from 'next/image'
import { number } from 'prop-types'
import React from 'react'


const aboutItems = [
  {
      label: "Project done",
      number: 45,
  },
  {
    label: "Years of experience",
    number: 5,
  },
]
const About = () => {
  return (
    <section id='about' className='section'>
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 revea">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Usman, a passionate web developer with a knack for creating stunning and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly web applications that deliver exceptional user experiences. My goal is to bring your ideas to life through innovative design and seamless functionality. Let's collaborate to turn your vision into reality!
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({label, number}, key) => (
                        <div key={key} className="">
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl ">+</span>
                            </div>

                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <Image src="/images/logo.svg" alt='my-logo' width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
