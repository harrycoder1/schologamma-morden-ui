// import React from 'react'
import { ProfileCard } from '.'
import Image from 'next/image'
// import React from 'react'
import '@/styles/teams.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import { team_data_type } from '@/types';
function RenderPositionWise({title ,eve}:{title:string ,eve:team_data_type}) {
  return (
    <div className="team_item_position_vise_cont ">
  
    <div className="team_title_pos  font-bold lg:text-[40px] text-[28px]  text-white shadow-md text-center">{title}:</div>
  
    {/* User Profile Card here : */}
    <div className="flex flex-wrap justify-center items-center">
    {[1,2,3,4,56].map(item =>(
    <ProfileCard item={eve} />
  ))}
    </div>
  
  </div>
  )
}

export default RenderPositionWise
