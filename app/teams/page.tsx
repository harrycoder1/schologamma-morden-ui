import Image from 'next/image'
import React from 'react'
import '@/styles/teams.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import { ProfileCard ,RenderPositionWise} from '@/components';




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
