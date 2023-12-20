import React from 'react'
import '@/styles/update.css'
import { slider_type } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
export default function Update({slide}:{slide:slider_type}) {
  return (
    <div className="flex justify-center items-center mt-[30px] ">

   
    <div className='update_box w-[95%] lg:w-[1170px]  p-[14px] md:p-0 '>
        <div className="update_blur"></div>
     {/* data section */}
     <div className="flex flex-col justify-center  items-center">
        {/* <div className="up_heading pt-[38px] pb-[15px] text-[32px] lg:text-[44px] text-center">
        Our Latest Updates
        </div> */}

        <div className="up_content w-[95%] lg:w-[90%] flex justify-center lg:justify-between relative  lg:flex-row flex-col mt-[40px] ">

     
    <div className="  px-[24px] md:px-0 lg:w-[50%]">
<div className="up_text_heading text-[30px] lg:text-[42px] text-center lg:text-start my-[20px] lg:my-0 ">
 {slide?.name}
</div>
<div className=" text-[13px] text_shadow-h hidden lg:block text-[#81AFDD] drop-shadow-md mt-[40px] lg:text-[20px] text-justify px-[12px] lg:px-0">{(slide?.description && (slide.description.length <=300 ? slide.description :slide.description.substring(0,300)  +"..."))}</div>
{
              slide?.url !==undefined && slide?.url !=='/' &&
<button className="up_btn mt-[60px] hidden lg:block rounded-sm    "><Link href={slide?.url}>Expore...</Link> </button>
             
            } 
    </div>
    <div className="  lg:w-[50%] flex justify-center  ">
        <div className="up_img_box relative h-[360px]  w-[270px] rounded-sm mb-[20px] ">
<Image src={slide?.imageLink} alt={`Slide ${ 1}`} width={400} height={500} className=' h-[360px]  w-[270px]' />
        </div>
    </div>
     </div>
{/* for url btn */}
     {
      slide?.description !==undefined && slide?.description.trim() !=='' &&
<div className="up_msg  block lg:hidden mt-[40px] text-[14px] lg:text-[20px] text-center">{slide?.description}</div>
}
{
          slide?.url !==undefined && slide?.url !=='/' &&
          <>
<button className="up_btn mt-[60px] block lg:hidden rounded-sm  "><Link href={slide?.url}>Expore...</Link> </button>
</>
             
            } 

     </div>
     <div className="mb-[20px]"></div>
    </div>
    </div>
  )
}
