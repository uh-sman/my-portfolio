import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <section id="home" className=''>
    <div className="">

        <div>
            <div className="">
                <figure>
                    <Image src="/images/avatar-1.jpg" alt='my-image' width={40} height={40} className='image-cover'/>
                </figure>
                <div className="">
                    <span className="">
                        
                    </span>
                </div>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Hero
