import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <section id="home" className=''>
    <div className="">

        <div>
            <div className="">
                <figure>
                    <Image src="/images/avatar-1.jpg" alt='usman' width={40} height={40}/>
                </figure>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Hero
