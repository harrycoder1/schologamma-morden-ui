"use client"
import { EventCard, ViewEvent } from '@/components/EventsInfo'
import { it } from 'node:test'
import React, { useState } from 'react'
import '@/styles/events.css'
export default function Committee() {
    const [isView ,setIsView] = useState(false)
  return (
    <div>
  
  {/* data start her  */}
  <div className="mt-[32px] flex flex-row">
<div className="comte_left">
<ViewEvent setIsView={setIsView}  />

</div>
<div className="comte_right lg:ml-[42px]  cmte_box ">
    <div className="cmte_blur"></div>
<div className="search_bar mt-[30px] flex flex-row justify-center ">
<input  placeholder='Enter the event name focus:outline-none focus-within:outline-none' className='search_input focus-visible:outline-none'/>
<button className='search_btn lg:mr-[12px] ' >Search</button> 
<select name="Committies " id="cars" className='dropdown_btn focus:outline-none focus-within:outline-none'>
    <option value="volvo">choose committee</option>
    <option value="saab">Technical</option>
    <option value="opel">Digital</option>
    <option value="audi">Discipline</option>
  </select>
</div>




{/* other category  */}
<div className="flex flex-row justify-center mt-[20px]">


{["Latest","Upcomming" ,"offline" , "QUize" ,"Online" ].map(item =>(

    <div className="cmte_search_link_txt px-[20px] py-[8px] cursor-pointer  ">
        {item}
    </div>
))}

<select name="type" id="" className='dropdown_btn focus:outline-none  focus-within:outline-none'>
    <option  value="">type of Events</option>
    <option value="saab">cultural</option>
    <option value="opel">seminar</option>
    <option value="audi">illuminati</option>
  </select>
</div>

{/* for search events container */}
<div className="eve_container">
    {/* all cards here... */}
    <div className=" flex flex-row justify-center flex-wrap overflow-y-visible mt-[23px]">
    
  
{[1,2,3,4,5,6,77,4,3,54,5,6,67,4,4,].map(item=>(
<EventCard /> 

))}

</div>
</div>
</div>
  </div>
    </div>
  )
}
