"use client";
import React, { useState } from 'react'
import '@/styles/event_info.css'
import Image from 'next/image'
import { LiaExpandSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
export const ViewEvent =({setIsView} :{setIsView:any}) =>{
   {/* height: ;
    max-width: 400px;
    width: auto; */}
  return (
    <div className="flex justify-center items-center">

  
    <div className="e_view_card w-[90%] lg:w-[400px] ">
  <div className="e_img">
<Image src={"/eventcard.jpg"} width={400} height={500} alt='photo' className='h-[100%] w-[100%] rounded-sm'/>
<div className="e_img_view ">

  <button className='text-[24px] bg-black opacity-50 ' onClick={()=>(setIsView(true))}><LiaExpandSolid /></button>
</div>
  </div>

  {/* content start her */}
  <div className="e_content">
<div className="e_profile flex flex-row p-[18px]">
  <div className="eve_photo pr-[24px]">
    <Image src={'/eventcard.jpg'} width={50} height={50} className='w-[45px] h-[45px] rounded-full shadow-md' alt='name'/>
  </div>
  <div className="event_personal_detail">
    <div className="eve_name ">TechSPot Committee</div>
    <div className="eve_time">2 day ,3hr , 45min ago </div>
  </div>
</div>
<div className="p-[18px]">
<div className="e_title">TechBuzz 2.O</div>
<div className="e_descrip">Lorem ipsum dolor sit amet consectetur adipisicing jkfsdjksdfjkl sdfjkklsdkfljks oiuiodfn sdjfd f slkmfsf sfsdf sdf ew ref elit. Fugit mollitia iusto praesentiu.</div>

{/* venue */}
<div className="event_venue">Onnline</div>

{/* start Date and end Date */}
<div className="date_cont">
  <div className="d_start flex justify-center items-center flex-col">
  <span> 2 sep ,2022
    </span> 
    {/* <span>2022</span>  */}
    <span>2:30 PM</span>
  </div>
  <div className="d_end flex justify-center items-center flex-col">
  <span> 2 sep ,2022
    </span> 
    {/* <span>2022</span>  */}
    <span>2:30 PM</span>
  </div>
</div>
{/*  this is our timer or join link or result timer or result link
 */}
<div className=" mt-[4px] eve_timer w-[300px] h-[80px] bg-gray-600 rounded-md ">
  this is our timer or join link or result timer or result link
</div>
<div className="event_btn">
  {/* <button className='eve_read_btn'>Read More...</button> */}
  </div>
</div>
  </div>
  <div className="e_media">

  </div>
</div>
</div>
  )
}

export const EventCard = () =>{
  return(
    <div className="event_card_cont  mt-[50px]" >
    {/* event card */}
      <div className="event_info_card rounded-sm m-[8px]">
        <Image src={"/eventcard.jpg"} width={700} height={1020} alt='name' className='w-[100%] h-[100%] rounded-sm z-[-18]' />
    <div className="event_blue_glass absolute bottom-[20px] left-0 right-0 ">TechBuzz 2.O</div>
    <span className="absolute rounded-full  top-[-3px] bg-red-600 shadow-md right-[-3px] text-[11px] text-white px-[4px] py-[1px] ">upcoming</span>
      </div>
     
    
    
      
    </div>
  )
}
export default function EventsInfo() {
const [isView ,setIsView] =useState(false)
  return (
    <div className="flex justify-center relative">

    
    <div className='mt-[250px] w-[340px] md:w-auto lg:w-[1172px]'>
<div className="event_info_top flex flex-row justify-center items-center">
  <div className="event_info_top_left text-[32px] lg:text-[64px] ">Engaging Events to Explore
 Opportunities</div>
  <div className="event_info_top_right">Explore The More Events</div>
</div>
<div className="event_info_down flex flex-col lg:flex-row justify-between  mt-[60px]">

<div className="event_info_left">

{/* view card design here */}
<ViewEvent setIsView={setIsView}  />
{/* for view the image */}
{isView && <div className="z-[2] absolute top-[450px] bottom-0 left-0 right-0">
      <div className="flex justify-center  ">

    
 
      <Image width={600} height={800} alt=''src={'/eventcard.jpg'} />
      <button className="close z-10 text-black opacity-50 w-fit h-fit rounded-full p-[12px] bg-red-600 relative  top-[-23px] left-[-23px]  font-extrabold text-[24px] " onClick={()=>setIsView(false)} >
    <IoMdClose />
      </button>
      </div>
      </div>}

</div>
<div className="event_info_right flex  w-[330px] md:w-[600px] lg:flex-wrap overflow-x-scroll lg:overflow-y-scroll ">

{/* event cards start here */}
{[1,2,3,4,5].map(item=>(
 <EventCard />
))}


</div>

</div>
    </div>

    </div>
  )
}
