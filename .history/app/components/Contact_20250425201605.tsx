import React from 'react'


const Contact = () => {
  return (
    <section id='contact' className='section'>
        <div className="container">
            <h2 className="headline-2 mb-8">
            Get in touch with me
            </h2>
    
            <form action="" className='flex flex-col gap-4'>
            <input type="text" placeholder='Your Name' className='input' />
            <input type="email" placeholder='Your Email' className='input' />
            <textarea name="" id="" cols={30} rows={10} placeholder='Your Message' className='input'></textarea>
            <button type="submit" className='btn btn-secondary'>Send Message</button>
            </form>
        </div>
      
    </section>
  )
}

export default Contact
