import React from 'react'
import '@/styles/teams.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="user_card_box rounded-md m-[12px] w-[300px] flex flex-col justify-center items-center p-[40px] ">
    <div className="user_blur"></div>
    <div className="img_box relative w-[150px] h-[150px] rounded-full bg-gray-600">
    {/* <Image src={'/'} width={200} height={200} alt='name' className='w-[100%] h-[100%]'/> */}
    
    </div>
    <div className="user_detail flex flex-col justify-center items-center mt-[24px] text-[18px]">
      <div className="text-cyan-300 font-extrabold tex-[24px] ">TechSpot Committee</div>
      <div className="text-slate-400 font-bold">Head</div>
    
      <div className="text-[16px]">Name: <span className='font-extrabold'> Harish Hedau</span></div>
      <div className="social_media_cot flex flex-row ">
      <div className='social_media_btn hover:text-blue-400'><Link href=""><FaLinkedinIn /></Link></div> 
       <div className='social_media_btn hover:text-blue-700'> <Link href=""><FaFacebookF /></Link> </div> 
        <div className='social_media_btn hover:text-pink-500'><Link href=""><FiInstagram/></Link></div>
      
    
      
      </div>
      <div className="text-[16px] cursor-pointer hover:text-orange-600 mt-[18px] text-orange-400 font-semibold">view more...</div>
    </div>
    
    
      </div>
  )
}
