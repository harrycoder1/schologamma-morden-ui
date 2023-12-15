"use client"
import { EventCard, ViewEvent } from '@/components/EventsInfo'
// import { IoArrowRedoOutline } from "react-icons/io5";
import React, { useState } from 'react'

export default function EventByID({params}:{params:any}) {
const [eventData ,setEventData] =useState<any>({})
  const[isView , setIsView] = useState(false)
  return (
    <div className='mt-[42px]'>
        <div className="flex flex-col lg:flex-row ">

      
    <div className="">
<ViewEvent setIsView={setIsView}/>
    </div>
    <div className="lg:ml-[24px]">

<div className="text-[26px] font-bold mt-[24px] text-white">Related Events :</div>
<div className="related_eve_card flex flex-row lg:flex-wrap lg:justify-center lg:items-center  overflow-x-scroll lg:overflow-y-scroll lg:h-[600px]">
    {[1,2,3,4,56,6,34,3].map(item =>(
    <EventCard item={eventData} />

    ))}
</div>    </div>  </div>
    </div>
  )
}
