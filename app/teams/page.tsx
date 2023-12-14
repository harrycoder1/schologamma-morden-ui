import Image from 'next/image'
import React from 'react'
import '@/styles/teams.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';


export const ProfileCard = () =>{
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

export const RenderPositionWise = ({title}:{title:string} )=>{

  return (
    <div className="team_item_position_vise_cont ">
  
  <div className="team_title_pos  font-bold lg:text-[40px] text-[28px]  text-white shadow-md text-center">{title}:</div>

  {/* User Profile Card here : */}
  <div className="flex flex-wrap justify-center items-center">
  {[1,2,3,4,56].map(item =>(
  <ProfileCard />
))}
  </div>

</div>
  )
}
export default function Teams() {
  return (
    <div>
<div className="upper_team_cont flex flex-col-reverse lg:flex-row lg:justify-between">
<div className="heading-span font-extrabold text-[44px] lg:text-[60px] flex justify-center items-center ">
  <div className="">Schologamma Family 2022-2023
    </div></div>
<div className="team_dorp_cont flex justify-end items-center">
<select name="Committies " id="cars" className='dropdown_btn w-[120px] lg:w-[250px]  focus:outline-none focus-within:outline-none'>
    <option value="volvo">2023-2024</option>
    <option value="saab">2022-2023</option>
    <option value="opel">2021-2020</option>
    {/* <option value="audi">Discipline</option> */}
  </select>
</div>

</div>
<div className="team_cont">
{/* position  --> Admin , Head , Co-Head */}

{["Admins" , "Heads" , "Members"].map(item =>(
  <RenderPositionWise title={item} />
)) }


</div>


    </div>
  )
}
