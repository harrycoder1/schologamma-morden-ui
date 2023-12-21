import React from 'react'
import { about_card } from '@/constants'

import '@/styles/about.css'
import '@/styles/animation.css'
import TextOnScroll from './TextOnScroll'
export default function About() {
  return (
   
 <div className="flex justify-center items-center mt-[50px] md:mt-[150px] ">

   
<div className='about_box w-[95%]  md:w-auto lg:w-[1170px]'>
    <div className="about_blur"></div>
 {/* data section */}
<div className="about_data_cont p-[16px] lg:p-[73px]">

<div className="upper_cont flex flex-col justify-between lg:flex-row">
<div className="left_upper_cont mb-[16px] lg:mb-0 ">
  <div className="line_upper"></div>
  <div className="heading_upper_cont" id='aboutus'>Who we are</div>
</div>
<div className="right_upper_cont ">

  <div className="right_upper_cont_msg">
  Schologamma Forum, an initiative under the esteemed Computer Science Department, serves as a hub for organizing a diverse range of technical and non-technical events. Our primary aim is to empower students, foster collaboration, and ignite a passion for continuous learning.
  </div>
</div>

</div>
<div className="down_cont mt-[80px]">

  <div className="down_head_cont flex  justify-between items-center">
    <div className="down_head_cont_head">
    The possibilities are beyond your imagination
    </div>

{/* <div className="down_head_cont_msg">Explore The Library</div> */}
  </div>

<div className="down_card_cont mt-[85px] flex flex-col lg:flex-row justify-center">

{/* for cards */}
{about_card.map(item=>(
  <TextOnScroll animation='fade-in-left' >

 
  <div className="down_card ">
<div className="left_upper_cont mt-[20px] mb-[12px] lg:mb-[20px]">
  <div className="line_upper"></div>
  <div className="heading_upper_cont ">{item.title}</div>

</div>

<div className="">
    <div className="down_card_msg">{item.message}
    </div>
  </div>
</div>
</TextOnScroll>
))}


</div>

</div>

</div>
</div>
</div>
   
  )
}
