import React from 'react'
import SectionTitle from './SectionTitle'
import { FiGithub } from 'react-icons/fi'
import { GoGithubAction } from 'react-icons/go'
import { BsCrop } from 'react-icons/bs'
// import { VscGithubAction } from 'react-icons/Vs'

const Projects = () => {
    return (
        <div id='project' className='max-w-container mx-auto  lgl:px-10 py-24'>
            <SectionTitle title='Some Things I have Built' titleNumber='03' />

            <div className='w-full flex flex-col justify-center items-center gap-28 mt-10 '>

                <div className='w-full flex flex-col justify-center items-center gap-28 mt-10'>

                    <div className='flex flex-col xl:flex-row gap-6'>
                        <div className='w-full xl:w-2/4 h-auto group'>
                            <a href="https://food-store-6eb9c.web.app/" target='_blank'> <img src="https://i.ibb.co/2ZCX51Q/Screenshot-21.png" alt="" /></a>
                        </div>
                        <div className='w-full xl:w-1/2 flex flex-col gap-5 lgl:justify-between items-end  text-right lgl:ml-[-90px] md:ml-0 z-10'>

                            <p className='text-textGreen font-titleFont text-sm tracking-wide'>Featured Project</p>
                            <h1 className='text-2xl font-bold'>Food Store 2.0</h1>

                            <p className='bg-[#112240] txt-sm md:text-base p-2 md:p-6 rounded-md'>A Food Store website for visualizing personalized store website. View your products, Add your account with O-auth and then make the purchage using stripe.</p>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex gap-3  md:gap-5 text-textDark'>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Firebase</li>
                                <li>Stripe</li>
                                <li>Vercel Deployment</li>
                            </ul>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex gap-3  md:gap-5 text-textDark'>
                                <a href="https://github.com/hasibulhasananik40420/ceommerce-foof-store" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiGithub /></span></a>

                                <a href="https://github.com/hasibulhasananik40420/Ecommerce-food-store-server" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><GoGithubAction /></span></a>

                                <a href="" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><BsCrop /></span></a>


                            </ul>


                        </div>
                    </div>


                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <div className='w-full xl:w-2/4 h-auto group lgl:mr-14 md-mr-0'>
                            <a href="https://assignment-12-fe1d7.web.app/" target='_blank'> <img src="https://i.ibb.co/7Q1B3F2/Screenshot-22.png" alt="" /></a>
                        </div>
                        <div className='w-full xl:w-1/2 flex flex-col gap-5 lgl:justify-between items-end  text-right '>

                            <p className='text-textGreen font-titleFont text-sm tracking-wide'>Featured Project</p>
                            <h1 className='text-2xl font-bold'>Bicycle Parts Manufacturers</h1>

                            <p className='bg-[#112240] txt-sm md:text-base p-2 md:p-6 rounded-md lgl:mr-[-90px] z-10'>A full functional Bicycle Parts Manufacturers where you can view the latest product and order .You can see the profile and dashboard as well.You can also see your oder list and confirm order by stripe. </p>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex gap-3  md:gap-5 text-textDark'>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Firebase</li>
                                <li>Stripe</li>
                                <li>Vercel Deployment</li>
                            </ul>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex gap-3  md:gap-5 text-textDark'>
                                <a href="https://github.com/hasibulhasananik40420/Bicycle-parts-manufacturers-client" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiGithub /></span></a>

                                <a href="https://github.com/hasibulhasananik40420/Bicycle-parts-manufacturers-server" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><GoGithubAction /></span></a>

                                <a href="" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><BsCrop /></span></a>


                            </ul>


                        </div>
                    </div>

                     
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <div className='w-full xl:w-2/4 h-auto group'>
                            <a href="https://medikshop-9b9ed.web.app/" target='_blank'> <img src="https://i.ibb.co/jDZXjyY/Screenshot-23.png" alt="" /></a>
                        </div>
                        <div className='w-full xl:w-1/2 flex flex-col gap-5 lgl:justify-between items-end  text-right lgl:ml-[-90px] md:ml-0 z-10'>

                            <p className='text-textGreen font-titleFont text-sm tracking-wide'>Featured Project</p>
                            <h1 className='text-2xl font-bold'>Kivi Care a Dentist Website</h1>

                            <p className='bg-[#112240] txt-sm md:text-base p-2 md:p-6 rounded-md'>An Kivi Care a Dentist Website for visualizing personalized Kivi Care Website. View your appointment, Add your account with O-auth and then make the purchage using stripe.</p>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex gap-3  md:gap-5 text-textDark'>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Firebase</li>
                                {/* <li>Stripe</li> */}
                                <li>Jwt token </li>
                                <li>Vercel Deployment</li>
                            </ul>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide  flex gap-3  md:gap-5 text-textDark'>
                                <a href="https://github.com/hasibulhasananik40420/medik-website" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiGithub /></span></a>

                                <a href="https://github.com/hasibulhasananik40420/medik-website-server" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><GoGithubAction /></span></a>

                                <a href="" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><BsCrop /></span></a>


                            </ul>


                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects