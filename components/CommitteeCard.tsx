import Link from 'next/link'
import React from 'react'
import '@/styles/events.css'
import { committee_data_type } from '@/types'
import Image from 'next/image'

export default function ({committee}:{committee:committee_data_type}) {
  return (
<div className=" event_card_box  h-auto  cursor-pointer mx-[14px] my-[20px] w-[340px] p-[40px] rounded-[30px] ">
        <div className="cmte_blur2 "></div>
    
          <div className="commitee_container flex flex-col items-center justify-center ">
            <div className="committee_img h-[200px] w-[200px] rounded-full relative  bg-slate-500">
                <Image src={committee?.photo} width={400} height={400} alt='name' className='w-[100%] rounded-full h-[100%]'/> 
            </div>
            <div className="detail_committee text-white mt-[12px] text-[24px] text-center font-bold hover:text-cyan-300">
               <Link href={`/committee/${committee?._id}`}> {committee?.name} </Link>
            </div>
    
       
    </div>
          </div>
  )
}
