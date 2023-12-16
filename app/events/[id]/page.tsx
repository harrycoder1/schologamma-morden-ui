"use client"
import { EventCard, ViewEvent } from '@/components/EventsInfo'
import DataContext from '@/context/data/DataContext'
import { event_data_type } from '@/types'
import { getObjectByID } from '@/utils/getIdByname'
import { sortEventsByUpcoming } from '@/utils/sortEvent'
// import { IoArrowRedoOutline } from "react-icons/io5";
import React, { useState ,useEffect ,useContext} from 'react'

export default function EventByID({params}:{params:any}) {
const [eventData ,setEventData] =useState<any>({})
  const[isView , setIsView] = useState(false)

  const dd = useContext(DataContext) ;
console.log(dd)
const [sortEventData , setSortEventData] = useState<event_data_type[]>([])
useEffect(() => {
  if( dd?.eventDataP.length!==0){
    const sort = sortEventsByUpcoming(dd?.eventDataP)
    console.log("this is my sorted array is :")
    console.log(sort)
    dd?.eventDataP.length !== 0 &&   setSortEventData(sort)
  }

}, [dd?.eventDataP.length])

// const cond =
  if(getObjectByID(params.id , sortEventData) === undefined ){
    return <><div className=" text-[32px] lg:text-[42px]">404 | Not found</div></>
  }
  return (
    <div className='mt-[42px]'>
        <div className="flex flex-col lg:flex-row ">

      
    <div className="">
<ViewEvent setIsView={setIsView} eventData={getObjectByID(params.id , sortEventData)}/>
    </div>
    <div className="lg:ml-[24px]">

<div className="text-[26px] font-bold mt-[24px] text-white">Related Events :</div>
<div className="related_eve_card flex flex-row lg:flex-wrap lg:justify-center lg:items-center  overflow-x-scroll lg:overflow-y-scroll lg:h-[600px]">
    {sortEventData.map((item , index) =>(
    <EventCard item={item} key={index} />

    ))}
</div>    </div>  </div>
    </div>
  )
}
