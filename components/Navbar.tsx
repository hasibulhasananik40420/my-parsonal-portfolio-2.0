import Link from 'next/link'

import { useRef, useState } from 'react'
import { easeIn, motion } from "framer-motion"
import { IoMdClose } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { RxVideo } from 'react-icons/rx'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
const Navbar = () => {
    const ref = useRef<string | any>("")
    const [show, setShow] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        const href = e.currentTarget.href
        const targetId = href.replace(/.*\#/, '')
        const ele = document.getElementById(targetId)
        ele?.scrollIntoView({
            behavior: 'smooth'
        })
        const links = document.querySelectorAll('.nav-link')
        links.forEach((link) => {
            link.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    }
    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4 '>

            <div className='max-w-container h-full mx-auto lgl:px-8 py-1 font-titleFont flex justify-between items-center'>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <span className=''>
                        <h1 className='text-xl text-textGreen w-12 h-12 rounded-full border-2 border-textGreen flex justify-center items-center font-bodyFont'>H</h1>
                    </span>
                </motion.div>
                <div className='hidden mdl:inline-flex items-center gap-7'>
                    <ul className='flex gap-7 text-[15px]'>
                        <Link onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#home'><motion.li initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}

                        >Home</motion.li>
                        </Link>

                        <Link onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#about'><motion.li initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}

                        ><span>01.</span> About</motion.li>
                        </Link>

                        <Link onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#experience'><motion.li initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}

                        ><span>02.</span> Experience</motion.li>
                        </Link>

                        <Link onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#project'><motion.li initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}

                        ><span>03.</span> Project</motion.li>
                        </Link>

                        <Link onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#contact'><motion.li initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}

                        ><span>04.</span> Contact</motion.li>
                        </Link>
                    </ul>

                    <a href="/assest/Hasibul Hasan_Resume .pdf" target='_blank'>
                        <motion.button className='px-4 py-2 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300' initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}>
                                Resume
                            </motion.button>
                    </a>
                </div>

                {/* smail icon */}
                <div onClick={() => setShow(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>

                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>

                    <span className='w-full h-[2px] bg-textGreen inline-flex transform  translate-x-1 group-hover:translate-x-3  transition-all ease-in-out duration-300'></span>
                </div>

                {
                    show && (
                        <div className='absolute mdl:hidden top-0 right-0 w-full h-screen  flex flex-col items-end' ref={(node) => (ref.current == node)} >


                            <motion.div initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2,delay:0.3,ease:easeIn }}
                                className='w-[80%] h-full  bg-[#112240] flex flex-col items-center px-4 py-10 z-50 relative'
                            >
                                <IoMdClose onClick={() => setShow(false)} className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4 duration-300' />





                                <ul className='flex flex-col gap-7 text-[15px] mt-8'>
                                    <Link onClick={() => setShow(false)} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#home'><motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3,delay:0.4,ease:easeIn  }}

                                    >Home</motion.li>
                                    </Link>

                                    <Link onClick={() => setShow(false)} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#about'><motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4,ease:easeIn }}

                                    ><span>01.</span> About</motion.li>
                                    </Link>

                                    <Link onClick={() => setShow(false)} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#experience'><motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.5,ease:easeIn }}

                                    ><span>02.</span> Experience</motion.li>
                                    </Link>

                                    <Link onClick={() => setShow(false)} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' href='#project'><motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6,ease:easeIn }}

                                    ><span>03.</span> Project</motion.li>
                                    </Link>

                                    <Link onClick={() => setShow(false)} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' href='#contact'><motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.7,ease:easeIn }}

                                    ><span>04.</span> Contact</motion.li>
                                    </Link>
                                </ul>


                                <a href="#" target='_blank'>
                                    <motion.button className='mt-6 px-8 py-2 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300' initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{duration:0.7, delay: 0.7,ease:easeIn }}>Resume</motion.button>
                                </a>


                                <div className='flex  gap-4 mt-6'>
                                    <a href="https://github.com/hasibulhasananik40420" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiGithub /></span></a>

                                    <a href="" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><RxVideo /></span></a>

                                    <a href="https://www.linkedin.com/in/hasibul-hasan-06a987229/" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FaLinkedinIn /></span></a>

                                    <a href="https://www.facebook.com/profile.php?id=100048178763954&mibextid=ZbWKwL" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FiFacebook /></span></a>

                                    <a href="https://www.instagram.com/hasibulhasan40420/" target='_blank'> <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><FaInstagram /></span></a>


                                </div>

                                <span className='text-textGreen font-bodyFont text-center mt-4'>hasibulhasan40420@gmail.com</span>




                            </motion.div>

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Navbar