"use client"
import React, { useState } from 'react'
import { navigate_item_type } from '@/types'
import { nav_item } from '@/constants'
import Link from 'next/link'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Nav() {
const [isToogle ,setIsToggle] =useState(false)
  return (
    <div className='text-white '>
<nav className='flex flex-row justify-between items-center mx-[8px] lg:mx-[130px] mt-[42px]  '>
  <div className="left flex flex-row">

  <span className='text-red-300 font-extrabold lg:px-[15px] px-[4px] py-[8px] '>LOGO</span>
  <div className="hidden lg:block">
  <div className="flex ">

 
  {nav_item.map(item  =>(
    <div className=" px-[35px] py-[8px] text-[18px]"><Link href={item.path}>{item.name}</Link> </div>
  ))}
   </div>
   </div>
  </div>
<div className="right  flex ">
  <div className="hidden lg:block  ">
    <div className="flex flex-row justify-center items-center">
  <button className=''>SignIn</button>
  <button className='bg-red-500 px-[24px] py-[14px] rounded-sm mx-2'>SignUp</button>
  </div>


  </div>
  {/* for mobile view */}

  <div className="lg:hidden">
<button className='text-[24px]' onClick={()=>setIsToggle(pre=>!pre)}>{isToogle?<IoClose />:<RiMenu3Line />} </button>
  </div>
</div>
</nav>
{/* mobile menu  Bar  */}
{isToogle &&
  <div className="absolute top-[40px] right-3 ">
    {/* <button className="close_btn"><IoClose /></button> */}
     <div className="blur_bg flex flex-col ">

 
{nav_item.map(item  =>(
  <div className=" px-[35px] py-[8px] text-[18px]"><Link href={item.path}>{item.name}</Link> </div>
))}

<button className=''>SignIn</button>
  <button className=' '>SignUp</button>
 </div>
  </div>

}

    </div>
  )
}
