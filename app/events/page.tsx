"use client"
import { EventCard, ViewEvent } from '@/components/EventsInfo'
import React, { useState ,useContext ,useEffect } from 'react'
import '@/styles/events.css'
import DataContext from '@/context/data/DataContext'
import { event_data_type } from '@/types'
import { sortEventsByUpcoming } from '@/utils/sortEvent'
import Link from 'next/link'
import { GoLink } from 'react-icons/go'
export default function Events() {
    const [isView ,setIsView] = useState(false)
// const [eventData ,setEventData] =useState<any>({})


const [eventData ,setEventData] =useState<event_data_type[]>([]) ;

const dd = useContext(DataContext) ;
console.log(dd)
const [sortEventData , setSortEventData] = useState<event_data_type[]>([])
useEffect(() => {
  if( dd?.eventDataP.length!==0){
    const sort = sortEventsByUpcoming(dd?.eventDataP)
    console.log("this is my sorted array in event page is  :")
    console.log(sort)
    dd?.eventDataP.length !== 0 &&   setSortEventData(sort)
  }

}, [dd?.eventDataP.length])

const [select ,setSelect] =useState<number>(0)

  return (
    <div className='flex justify-center items-center'>
  
  {/* data start her  */}
  <div className="mt-[32px] flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
<div className="comte_left hidden lg:block">
<ViewEvent setIsView={setIsView} eventData={sortEventData[select]}  />

</div>
<div className="comte_right mt-[20px] lg:mt-0 lg:ml-[42px] w-[96%] cmte_box  lg:w-[805px]">
    <div className="cmte_blur"></div>
<div className="search_bar mt-[30px] flex flex-row justify-center flex-wrap lg:flex-nowrap ">
<input  placeholder='Enter the event name' className='search_input lg:w-[340px]  md:w-auto w-[200px] focus:outline-none focus-within:outline-none  focus-visible:outline-none '/>

  
<button className='search_btn lg:w-[100px] w-[60px] lg:mr-[12px]  ' >Search</button> 
<select name="Committies " id="cars" className='dropdown_btn w-[120px] lg:w-[250px]  focus:outline-none focus-within:outline-none'>
    <option value="volvo">choose committee</option>
    <option value="saab">Technical</option>
    <option value="opel">Digital</option>
    <option value="audi">Discipline</option>
  </select>
</div>




{/* other category  */}
<div className="flex flex-row flex-wrap justify-center mt-[20px]">


{["Latest","Upcomming" ,"offline" , "QUize" ,"Online" ].map(item =>(

    <div className="cmte_search_link_txt px-[20px] py-[8px] cursor-pointer  ">
        {item}
    </div>
))}

<select name="type" id="" className='dropdown_btn w-[120px] lg:w-[250px] focus:outline-none  focus-within:outline-none'>
    <option  value="">type of Events</option>
    <option value="saab">cultural</option>
    <option value="opel">seminar</option>
    <option value="audi">illuminati</option>
  </select>
</div>

{/* for search events container */}
<div className="eve_container mt-[50px]">
    {/* all cards here... */}
    <div className=" flex flex-row justify-center flex-wrap overflow-y-visible mt-[23px]">
    
  
{sortEventData?.map((item ,index)=>(
  <div className="relative">
  <div className='cursor-pointer' onClick={()=>setSelect(index)}>
  <EventCard item={item}  />
  </div>

<div className="lg:hidden white_glass rounded-full p-[12px] text-[20px] absolute top-[36px]   w-[40px] h-[40px] flex justify-center items-center"><Link href={`/events/${item?._id }`} ><GoLink />
</Link></div>
</div>

))}

</div>
</div>
</div>
  </div>
    </div>
  )
}
