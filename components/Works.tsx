import React from 'react'
import { work_card } from '@/constants'
import '@/styles/works.css'
export default function Works() {
  return (
    <div className=' flex justify-center  mt-[278px]' >
      <div className="flex flex-col lg:flex-row justify-between  w-[340px] md:w-auto lg:w-[1170px]">
      <div className="left_work">
        <div className="left_work_heading">"Immersive Learning: Unveiling the Dynamic World of Schologamma Forum's Events"</div>
        <div className="left_work_link mt-[60px]">View event organizer committies </div>
      </div>
      <div className="right_work">
        <div className="right_work_card_cont">
{work_card.map(item=>(
 <div className="work_card flex flex-col md:flex-row space-x-0 md:space-x-[74px]">
 <div className="work_card_left">
   <div className="work_head_line"></div>
   <div className="work_card_heading">{item.title}</div>
 </div>

 <div className="work_card_right">
{item.message}
 </div>
</div>
  
))}
          {/* work card start here */}
         
        </div>
      </div>
      </div> </div>
  )
}
