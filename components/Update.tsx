import React from 'react'
import '@/styles/update.css'
export default function Update() {
  return (
    <div className="flex justify-center items-center mt-[150px] ">

   
    <div className='update_box w-[95%] lg:w-[1170px]  p-[14px] md:p-0 '>
        <div className="update_blur"></div>
     {/* data section */}
     <div className="flex flex-col justify-center  items-center">
        <div className="up_heading pt-[38px] pb-[15px] text-[38px] lg:text-[64px] text-center">
        Our Latest Updates
        </div>

        <div className="up_content flex  justify-center  lg:flex-row flex-col mt-[40px] ">

     
    <div className="up_left  px-[24px] md:px-0 lg:w-[43%]">
<div className="up_text_heading text-[30px] lg:text-[42px]">
TechBuzz 2.O
</div>
<div className="up_msg mt-[40px] text-[14px] lg:text-[20px] text-center">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</div>
<button className="up_btn mt-[60px] hidden lg:block rounded-sm  ">Expore...</button>
    </div>
    <div className="up_right  lg:w-[43%] flex justify-center  ">
        <div className="up_img_box lg:w-[334px] w-[250px] rounded-sm mb-[20px] ">

        </div>
    </div>
     </div>
<button className="up_btn mt-[60px] block lg:hidden rounded-sm  ">Expore...</button>

     </div>
     
    </div>
    </div>
  )
}
