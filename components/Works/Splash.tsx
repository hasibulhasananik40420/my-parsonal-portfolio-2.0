import React from 'react'
import { motion } from "framer-motion"
import { TiArrowForward } from 'react-icons/ti'
const Splash = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className='w-full'
>
    <h1 className='flex gap-1 font-titleFont text-xl font-medium'>Not yet work
        <span className='text-textGreen font-titleFont font-medium text-xl'>@Splash</span></h1>
    <p className='text-sm font-titleFont text-textDark font-medium mt-1'>Wish to join</p>

    <div className='flex gap-2 text-base  text-textDark mt-6'>
        <span className='text-textGreen mt-1'><TiArrowForward /></span>
        <span>Write modern, performant, maintainable code for a diverse array of client and internal projects</span>
    </div>
    <div className='flex gap-2 text-base  text-textDark mt-6'>
        <span className='text-textGreen mt-1'><TiArrowForward /></span>
        <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</span>
    </div>
    <div className='flex gap-2 text-base  text-textDark mt-6'>
        <span className='text-textGreen mt-1'><TiArrowForward /></span>
        <span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</span>
    </div>


</motion.div>
  )
}

export default Splash