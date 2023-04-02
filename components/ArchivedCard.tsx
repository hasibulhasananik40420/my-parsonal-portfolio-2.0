import React from 'react'
import {FaRegFolder} from 'react-icons/fa'
import {RxOpenInNewWindow} from 'react-icons/rx'

interface Props{
    title:string
    des:string 
    itemList:string[]
}
const ArchivedCard = ({title,des,itemList}:Props) => {
    // console.log(itemList)
  return (
    <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:translate-y-2 transition-transform duration-300'>
        
        <div className='flex justify-between items-center '>
            <FaRegFolder className='text-textGreen' size={35}/>
            <RxOpenInNewWindow className='' size={25}/>
        </div>

         <div className='group'>
            <h1 className='text-xl font-titleFont font-semibold tracking-wide  group-hover:text-textGreen duration-300'>{title}</h1>
            <p className='text-sm mt-3'>{des}</p>
            <ul className='text-sm font-titleFont font-medium text-textDark flex justify-between  items-center  gap-3 flex-wrap mt-6'>
                {
                    itemList?.map((item,i)=>{
                       return <li key={i}>{item}</li>
                    })
                }
            </ul>
         </div>
    </div>
  )
}

export default ArchivedCard