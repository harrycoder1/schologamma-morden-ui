"use client"
import Image from 'next/image'
import React ,{useContext , useState ,useEffect} from 'react'
import '@/styles/teams.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import { HeadCoHeadMemberFetch, ProfileCard ,RenderPositionWise} from '@/components';
import DataContext from '@/context/data/DataContext';
import { data_teams_object_type, team_data_type } from '@/types';
import { sortAndSplitByPosition } from '@/utils/teamFunc';
// import {HeadCoHead}


export default function Teams() {
  const dd = useContext(DataContext) ;
console.log(dd)
const [teams , setTeams] = useState<data_teams_object_type[]>([])
const [sortedTeams , setSortedTeams] = useState<{ [key: string]: team_data_type[] }>({})
useEffect(() => {
  if( dd?.teamsP.length!==0){
    // const sort = sortEventsByUpcoming(dd?.eventDataP)
    // console.log("this is my sorted array is :")
    // console.log(sort)
    dd?.teamsP.length !== 0 &&   setTeams(dd.teamsP)
   const aa = sortAndSplitByPosition(dd.teamsP[0].data)
  //  sorted teams
  // console.log(dd.teamsB)
  console.log("sorte teams :")
  console.log(aa)
   setSortedTeams(aa)
    // setSortedTeams()
  }

}, [dd?.teamsP.length])


  return (
    <div>
<div className="upper_team_cont flex flex-col-reverse lg:flex-row lg:justify-between">
<div className="heading-span font-extrabold text-[44px] lg:text-[60px] flex justify-center items-center ">
  <div className="">Schologamma Family {teams[0]?.year }-{Number(teams[0]?.year)+1}
    </div></div>
<div className="team_dorp_cont flex justify-end items-center">
<select name="Committies " id="cars" className='dropdown_btn w-[120px] lg:w-[250px]  focus:outline-none focus-within:outline-none disabled:cursor-not-allowed' disabled={teams.length ==1 ||teams.length ==1 }>
  {teams?.map(item =>(
<option value="volvo">{item.year }-{Number(item.year)+1}</option>
  ))}
  
    {/* <option value="audi">Discipline</option> */}
  </select>
</div>

</div>
<div className="team_cont">
{/* position  --> Admin , Head , Co-Head */}

{/* <ProfileCard item ={teams[0]?.data[0]}/> */}
{/* for Admin */}
<div className="team_item_position_vise_cont ">
  
  <div className="team_title_pos  font-bold lg:text-[40px] text-[28px]  text-white shadow-md text-center">Admins:</div>

  {/* User Profile Card here : */}
  <div className="flex flex-wrap justify-center items-center">
  {sortedTeams["President"]?.map(item  =>(
<ProfileCard item ={item}/> 

))}
  </div>
  {/* for others */}
  <div className="flex flex-wrap justify-center items-center">
  {teams[0]?.data.map(item  =>( (item.type ==="652534787f2fdadef417a74c" && item.position !=="President")  &&
<ProfileCard item ={item}/> 

))}
  </div>
</div>

{/* for head ,coHead , Member */}
<HeadCoHeadMemberFetch sortedTeams={sortedTeams}/>



</div>
    </div>
  )
}
