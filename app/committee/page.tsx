import React from 'react'
import '@/styles/events.css'
// import { EventCard } from '@/components/EventsInfo'
import Image from 'next/image'
import Link from 'next/link'
// import { EventCard } from '@/components/EventsInfo'
export const CommitteeCard = () =>{
    return (
        <div className=" event_card_box  h-auto  cursor-pointer mx-[14px] my-[20px] w-[340px] p-[40px] rounded-[30px] ">
        <div className="cmte_blur2 "></div>
    
          <div className="commitee_container flex flex-col items-center justify-center ">
            <div className="committee_img h-[200px] w-[200px] rounded-full relative  bg-slate-500">
                {/* <Image src={"/"} width={400} height={400} alt='name' />  */}
            </div>
            <div className="detail_committee text-white mt-[12px] text-[24px] text-center font-bold hover:text-cyan-300">
               <Link href={'/committee/2321231'}> TechSpot Committee </Link>
            </div>
    
       
    </div>
          </div>
    )
}

function Committee() {
  return (
    <div>
      <div className="upper_committee heading-span text-center text-[32px] lg:text-[44px] font-extrabold mt-[40px] ">Meet Our Committees</div>
      <div className="text-slate-500 text-[16px] lg:text-[22px] font-semibold text-center"> At Schologamma, our vibrant and dynamic community thrives through the dedication and collaborative efforts of various committees. Each committee plays a crucial role in shaping the forum's activities, events, and initiatives.</div>
      <div className="flex mt-[34px] justify-center items-center flex-wrap  ">

        {/* for committee Card */}
   {[1,2,3,4,5,6,67,7,4,5,5].map(item =>(
    <CommitteeCard />
   ))}
      </div>
   
    </div>
  )
}

export default Committee
