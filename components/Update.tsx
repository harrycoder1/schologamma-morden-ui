import React from 'react'
import '@/styles/update.css'
import { slider_type } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
export default function Update({slide}:{slide:slider_type}) {
  return (
    <div className="flex justify-center items-center mt-[150px] ">

   
    <div className='update_box w-[95%] lg:w-[1170px]  p-[14px] md:p-0 '>
        <div className="update_blur"></div>
     {/* data section */}
     <div className="flex flex-col justify-center  items-center">
        <div className="up_heading pt-[38px] pb-[15px] text-[38px] lg:text-[64px] text-center">
        Our Latest Updates
        </div>

        <div className="up_content flex justify-center lg:justify-between  lg:flex-row flex-col mt-[40px] ">

     
    <div className="up_left  px-[24px] md:px-0 lg:w-[43%]">
<div className="up_text_heading text-[30px] lg:text-[42px]">
 {slide?.name}
</div>
<div className="up_msg mt-[40px] text-[14px] lg:text-[20px] text-center">{slide?.description}</div>
{
              slide?.url !==undefined && slide?.url !=='/' &&
<button className="up_btn mt-[60px] hidden lg:block rounded-sm    "><Link href={slide?.url}>Expore...</Link> </button>
             
            } 
    </div>
    <div className="up_right  lg:w-[43%] flex justify-center  ">
        <div className="up_img_box relative  lg:w-[334px] w-[250px] rounded-sm mb-[20px] ">
<Image src={slide?.imageLink} alt={`Slide ${ 1}`} width={400} height={500} className='w-[100%] h-[100%]' />
        </div>
    </div>
     </div>
{/* for url btn */}
     {
              slide?.url !==undefined && slide?.url !=='/' &&
<button className="up_btn mt-[60px] block lg:hidden rounded-sm  "><Link href={slide?.url}>Expore...</Link> </button>
             
            } 

     </div>
     
    </div>
    </div>
  )
}
