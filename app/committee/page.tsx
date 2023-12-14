import React from 'react'
import '@/styles/events.css'
// import { EventCard } from '@/components/EventsInfo'
import Image from 'next/image'
import Link from 'next/link'
// import { EventCard } from '@/components/EventsInfo'
import { CommitteeCard } from '@/components'

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
