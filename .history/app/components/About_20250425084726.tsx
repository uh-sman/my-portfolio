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
        <div className="">
            <p className="">
                Welcome! I&apos;m a passionate web developer with a knack for creating stunning and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly web applications that deliver exceptional user experiences. My goal is to bring your ideas to life through innovative design and seamless functionality. Let's collaborate to turn your vision into reality!
            </p>
            <div className="">
                {
                    aboutItems.map(({label, number}, key) => (
                        <div key={key} className="">
                            <div className="">
                                <span className=""></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
