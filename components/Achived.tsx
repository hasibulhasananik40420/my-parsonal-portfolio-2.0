import { useState } from 'react'
import ArchivedCard from './ArchivedCard'
import { motion } from 'framer-motion'
const Achived = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className='max-w-contentContainer mx-auto  py-24 lgl:px-4'>
            <h1 className='text-2xl md:text-3xl font-bold text-textLigth text-center font-titleFont'>Other Noteworthy Projects</h1>
            <p className='text-textGreen font-titleFont text-sm text-center'>view the archive</p>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                <ArchivedCard title='Bazzer ecommerce app' des='Bazar app is ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae '
                    itemList={['Reactjs', 'Tailwind Css', 'Redux']} />

                <ArchivedCard title='Ecommerce Food Store' des='Food store ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae'
                    itemList={['Reactjs', 'Nodejs', 'Tailwind Css', 'Firebase Auth']} />

                <ArchivedCard title='Barbar shop' des='Barbar shop ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae'
                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                <ArchivedCard title='E-learning platform' des='E-learning ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae'
                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                <ArchivedCard title='Kivi Care a Dentist Website' des='Kivi Care ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                <ArchivedCard title='Bicycle Parts Manufacturers' des='Bicycle ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae'
                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />


                {
                    showMore && (
                        <>

                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}>

                                <ArchivedCard title='show more 1' des=' ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                            </motion.div>

                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}>

                                <ArchivedCard title='show more 1' des=' ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                            </motion.div>

                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}>

                                <ArchivedCard title='show more 1' des=' ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                            </motion.div>

                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}>

                                <ArchivedCard title='show more 1' des=' ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                            </motion.div>

                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}>

                                <ArchivedCard title='show more 1' des=' ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                            </motion.div>

                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}>

                                <ArchivedCard title='show more 1' des=' ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt dolore exercitationem ullam repudiandae .'
                                    itemList={['Reactjs', 'Tailwind Css', 'Firebase Auth']} />

                            </motion.div>


                        </>
                    )}




            </div>

            <div className='flex justify-center items-center mt-12'>
                {
                    !showMore ? <button onClick={() => setShowMore(true)} className='font-medium w-36 h-12 rounded-lg text-textGreen font-titleFont text-[15px] border border-textGreen hover:bg-hoverColor duration-300'>Show More</button>
                    :
                    <button onClick={() => setShowMore(false)} className='font-medium w-36 h-12 rounded-lg text-textGreen font-titleFont text-[15px] border border-textGreen hover:bg-hoverColor duration-300'>Show Less</button>
                }
            </div>
        </div>
    )
}

export default Achived