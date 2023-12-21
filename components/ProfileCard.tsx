import React from 'react'
import '@/styles/teams.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image'
import { team_data_type } from '@/types';
import { committeeByID } from '@/utils/committee';

export default function ProfileCard({item}:{item:team_data_type}) {
  const committee = committeeByID(item?.type)
  return (
    <div className="user_card_box h-[400px] rounded-[28px] m-[12px] w-[300px] flex flex-col justify-center items-center p-[40px] ">
    <div className="user_blur"></div>
    <div className="img_box relative w-[150px] h-[150px] rounded-full bg-gray-600">
  {item?.photoUrl &&  <Image src={item?.photoUrl} width={200} height={200} alt='name' className='w-[100%] rounded-full h-[100%]'/>}
    
    </div>
    <div className="user_detail flex flex-col justify-center items-center mt-[24px] text-[18px]">
    <div className="text-[16px] flex flex-col justify-center items-center text-blue-300"><span className='font-extrabold text-center'> {item?.name &&  item.name.split(' ').length ==2 ? item.name :item.name.split(' ')[0] +" "+item.name.split(' ')[item.name.split(' ').length-1] }</span></div>
    <div className="text-slate-300 font-extrabold text-[14px]  text-center " >{committee?.name ==="Admin"?"":committee?.name}</div>
    <div className=" font-bold text-center text-[15px] text-red-400">{item?.position}</div>

      
    
   
      <div className="social_media_cot flex flex-row justify-center items-center">
{/* for share social links */}
     {item?.linkedinUrl && item.linkedinUrl.startsWith("https://") && <div className='social_media_btn hover:text-blue-400'><Link href={item.linkedinUrl}><FaLinkedinIn /></Link></div> }
     {item?.facebookUrl && item.linkedinUrl.startsWith("https://") && <div className='social_media_btn hover:text-blue-700'> <Link href={item.facebookUrl}><FaFacebookF /></Link> </div> }
        {item?.instragramUrl && item.linkedinUrl.startsWith("https://") && <div className='social_media_btn hover:text-pink-500'><Link href={item.instragramUrl}><FiInstagram/></Link></div>}
      
    
      
      </div>
      <div className="text-[16px] cursor-pointer hover:text-orange-600 mt-[18px] text-orange-400 font-semibold">view more...</div>
    </div>
    
    
      </div>
  )
}
