"use client"
import { EventCard, ViewEvent } from '@/components/EventsInfo'
import { it } from 'node:test'
import React, { useState } from 'react'
import '@/styles/events.css'
export default function Committee() {
    const [isView ,setIsView] = useState(false)
const [eventData ,setEventData] =useState<any>({})

  return (
    <div className='flex justify-center items-center'>
  
  {/* data start her  */}
  <div className="mt-[32px] flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
<div className="comte_left hidden lg:block">
<ViewEvent setIsView={setIsView}  />

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
    
  
{[1,2,3,4,5,6,77,4,3,54,5,6,67,4,4,].map(item=>(
<EventCard  item={eventData}/> 

))}

</div>
</div>
</div>
  </div>
    </div>
  )
}
