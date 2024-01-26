import React from 'react'
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>

            <motion.h3 initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }} className='text-lg font-titleFont text-textGreen tracking-wide'>Hi, my name is</motion.h3>

            <motion.h1 className='text-4xl lgl:text-6xl font-titleFont font-medium flex flex-col' initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}>Hasibul Hasan. <span className='text-textDark mt-2 lgl:mt-4'>I build things for the web.</span></motion.h1>

            <motion.p className='text-base md:max-w-[650px] text-textDark font-medium' initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                {""}
                I am a web developer with 2+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem {""}
              
              
                <span className='inline-flex relative text-textGreen font-titleFont cursor-pointer h-7 overflow-x-hidden group '>Learn More


                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>


                </span>


            </motion.p>


            <motion.button initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }} className='w-52 h-14 font-titleFont rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300'>Checkout my project!</motion.button>


        </div>
    )
}

export default Banner