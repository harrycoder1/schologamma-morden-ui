import React from 'react'
import '@/styles/header.css'
export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center  mt-[112px] h-auto overflow-hidden' >
      {/* heading start here */}
      <div className=" flex flex-row justify-center items-center h-auto  overflow-hidden ">
  <span>
    <div className="heading-span font-extrabold text-[37px] lg:text-[62px] px-[8px]">Welcome to Schologamma Forum</div>
    <div className="heading-span2 font-extrabold text-center mt-[4px] text-[24px] lg:text-[32px]">
      Where Innovation Meets Inspiration!
    
    </div>
  </span>
</div>
<div className="h-description lg:w-[59%] my-[54px] ">At Schologamma Forum, we're dedicated to fostering a vibrant community within the Computer Science Department. We strive to create an environment that encourages both technical prowess and holistic development among our students</div>
    </div>
  )
}