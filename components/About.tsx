import React from 'react'
import SectionTitle from './SectionTitle'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 '>

      <SectionTitle title='About Me' titleNumber='01' />


      <div className='flex flex-col  lgl:flex-row gap-20'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p >Hello! My name is Hasibul Hasan and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

          <p >Fast-forward to today, and I had the privilege of working at an advertising agency, <span className='font-medium text-textGreen font-titleFont'>a start-up, a huge corporation, and a student-led design</span> studio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, quidem repellat <span className='font-medium text-textGreen font-titleFont'>ab natus possimus? Sint, accusamus!</span></p>

          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse recusandae.</p>

          <p >Here are a few technologies I have been working with recently:</p>


          <div className='max-w-[400px] grid grid-cols-2 gap-2 mt-6 font-titleFont font-medium'>
            <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>JavaScript (ES6+)</span>
            </div> <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>React.js</span>
            </div> <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>MongoDB</span>
            </div>
            <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Node.js</span>
            </div><div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Express.js</span>
            </div><div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Tailwind css</span>
            </div><div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Bootstrap</span>
            </div>
            <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Mongoose</span>
            </div> <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Redux</span>
            </div> <div className='flex items-center gap-2'>
              <span><AiOutlineThunderbolt className='text-textGreen' size={20} /></span>
              <span className='text-sm font-medium text-textDark font-titleFont'>Firebase</span>
            </div>

          </div>
        </div>
        {/* image */}
        <div className='w-full lgl:w-[400px] h-80 relative group'>
          

            <div className='w-full h-full '>
              <img className='rounded-lg h-[400px] w-[400px] object-cover border-2 border-textGreen' src="https://i.ibb.co/KNvnsXG/black-background-with-focus-spot-light-1017-27230.png" alt="" />

              {/* <div className='hidden lgl:inline-block absolute w-full h-full rounded-md top-0 left-0  duration-300'>

              </div>

              <div className='hidden w-full h-full lgl:inline-flex border-2 border-textGreen rounded-md  duration-300'></div> */}

          
          </div>
        </div>
      </div>



    </div>
  )
}

export default About