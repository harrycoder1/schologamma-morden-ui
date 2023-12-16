"use client" ;
import React ,{useState ,useEffect ,useContext}from 'react'
import '@/styles/events.css'
// import { EventCard } from '@/components/EventsInfo'
import Image from 'next/image'
import Link from 'next/link'
// import { EventCard } from '@/components/EventsInfo'
import { CommitteeCard } from '@/components'
import DataContext from '@/context/data/DataContext';
import { committee_data_type } from '@/types';

function Committee() {
  
  const dd = useContext(DataContext) ;
  console.log(dd)
  const [committteeData , setCommitteeData] = useState<committee_data_type[]>([])
  useEffect(() => {
    if( dd?.committeeP.length!==0){
      
      dd?.committeeP.length !== 0 &&   setCommitteeData( dd.committeeP)
    }
  
  }, [dd?.committeeP.length])

  return (
    <div>
      <div className="upper_committee heading-span text-center text-[32px] lg:text-[44px] font-extrabold mt-[40px] ">Meet Our Committees</div>
      <div className="text-slate-500 text-[16px] lg:text-[22px] font-semibold text-center"> At Schologamma, our vibrant and dynamic community thrives through the dedication and collaborative efforts of various committees. Each committee plays a crucial role in shaping the forum's activities, events, and initiatives.</div>
      <div className="flex mt-[34px] justify-center items-center flex-wrap  ">

        {/* for committee Card */}
   {committteeData?.map((item ,index) =>(item._id !=="652534787f2fdadef417a74c" ) && (
    <CommitteeCard key={index} committee= {item} />
   ))}
      </div>
   
    </div>
  )
}

export default Committee
