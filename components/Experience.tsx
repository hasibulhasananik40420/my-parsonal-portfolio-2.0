import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactDB from './Works/ReactDB'
import Google from './Works/Google'
import Apple from './Works/Apple'
import Splash from './Works/Splash'
import Amazon from './Works/Amazon'

const Experience = () => {
    const [workReactDB, setWorkReactDB] = useState(true)
    const [workGoogle, setWorkGoogle] = useState(false)
    const [workApple, setWorkApple] = useState(false)
    const [workSplash, setWorkSplash] = useState(false)
    const [workAmazon, setWorkAmazon] = useState(false)

    const handleReactDB = () => {
        setWorkReactDB(true)
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkSplash(false)
        setWorkAmazon(false)
    }

    const handleGoogle = () => {
        setWorkReactDB(false)
        setWorkGoogle(true)
        setWorkApple(false)
        setWorkSplash(false)
        setWorkAmazon(false)
    }

    const handleApple = () => {
        setWorkReactDB(false)
        setWorkGoogle(false)
        setWorkApple(true)
        setWorkSplash(false)
        setWorkAmazon(false)
    }

    const handleSplash = () => {
        setWorkReactDB(false)
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkSplash(true)
        setWorkAmazon(false)
    }

    const handleAmazon = () => {
        setWorkReactDB(false)
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkSplash(false)
        setWorkAmazon(true)
    }





    return (
        <div id='experience' className='max-w-containerxs mx-auto py-16 lgl:py-24 px-4'>
            <SectionTitle title='Where I have Worked' titleNumber='02' />

            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul>
                    <li onClick={handleReactDB} className={`${workReactDB ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Ayana network</li>

                    <li onClick={handleGoogle} className={`${workGoogle ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Google</li>

                    <li onClick={handleApple} className={`${workApple ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Apple</li>

                    <li onClick={handleSplash} className={`${workSplash ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Splash</li>

                    <li onClick={handleAmazon} className={`${workAmazon ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Amazon</li>

                </ul>
                {workReactDB && <ReactDB />}
                {workGoogle && <Google />}
                {workApple && <Apple />}
                {workSplash && <Splash />}
                {workAmazon && <Amazon />}
            </div>

        </div>
    )
}

export default Experience