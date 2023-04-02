import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <div id='contact' className='max-w-contentContainer mx-auto py-24 lg:py-32 flex flex-col justify-center items-center gap-7'>
        <SectionTitle title='What’s Next?' titleNumber='04'/>

         
            <h1 className='text-2xl md:text-3xl lgl:text-4xl font-titleFont font-bold'>Get In Touch</h1>
        <p className='text-textDark  text-center max-w-xl'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>


        <a href="mailto:hasibulhasan40420@gmail.com" target='_blank'>
        <button  className='font-medium w-36 h-12 rounded-lg text-textGreen font-titleFont text-[15px] border border-textGreen hover:bg-hoverColor duration-300'>Say Hello</button>
        
        </a>
         </div>
        
       
  )
}

export default Contact