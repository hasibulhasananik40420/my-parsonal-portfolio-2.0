import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {RxVideo} from 'react-icons/rx'
import {FaLinkedinIn,FaInstagram} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLigth'>
       <div className='flex flex-col gap-4 '>
        <a href="https://github.com/hasibulhasananik40420" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiGithub/></span></a> 
        
        <a href="" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><RxVideo/></span></a> 
        
        <a href="https://www.linkedin.com/in/hasibul-hasan-06a987229/" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FaLinkedinIn/></span></a>

          <a href="https://www.facebook.com/profile.php?id=100048178763954&mibextid=ZbWKwL" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiFacebook/></span></a>

          <a href="https://www.instagram.com/hasibulhasan40420/" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FaInstagram/></span></a>

        
       </div>
        <div className='w-[2px] h-28 bg-textDark'>

        </div>
    </div>
  )
}

export default LeftSide