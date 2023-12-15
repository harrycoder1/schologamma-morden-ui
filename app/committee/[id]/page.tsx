import React, { useState } from 'react'
import '@/styles/committeebyid.css'
import Image from 'next/image'
import { EventCard } from '@/components/EventsInfo'
// import { ProfileCard, RenderPositionWise } from '@/app/teams/page'
import { ProfileCard } from '@/components'
import { event_data_type } from '@/types'
function CommitteeByID() {
const [eventData ,setEventData] = useState<any>({})

  // profile page of each committees
  return (
    <div>
      <div className="mt-[50px] flex  flex-col lg:flex-row lg:justify-between">

        <div className="left_cmte w-[95%] h-[1000px] lg:w-[384px] left_box  flex flex-col  items-center p-[24px]">
        <div className="img_box relative rounded-full w-[180px] h-[180px] bg-gray-600">
          {/* <Image src="/" width={200} height={200}  alt="name" className="w-[100%] h-[100%]"/> */}
        </div>
        <div className="cmte_name text-[24px] font-bold text-cyan-500  my-[20px]">TechSpot Committee</div>
        <div className="h-description">
        ●“Technology is the catalyst for transformative change, sparking innovation, and illuminating pathways to a brighter future”. Technical committee ensures the quality and relevance of technical education and research initiatives. It facilitates an environment that encourages experimentation, creativity, and continuous learning among department’s faculty and students. ●The primary role of the technical committee is to foster innovation and research within the department. In the heart of the Technical Committee, we fuel a culture of curiosity, encouraging minds to question, explore, and pioneer. By nurturing a collaborative environment where ideas flow freely, we drive groundbreaking research, crafting solutions that solve real-world challenges. ●Criteria for selection of the members are exceptional technical expertise, innovative thinking, and problem-solving skills. Individuals selected for this committee exhibit a deep understanding of the department’s technical requirements, demonstrating their proficiency in various technical domains.
        </div>

        </div>
        <div className="right_cmte w-[95%]  h-[1000px] lg:w-[832px] left_box p-[30px]">
          {/* more items sections */}

          <div className="event_cmte ">
            <div className="text-[28px] lg:text-[36px] font-extrabold text-white shadow-md">Our Events Are :</div>

            <div className="eve_cont_cmte flex flex-row   h-[350px] overflow-x-scroll">
              {[1,2,34,4,5,3,3,3,343,3,32,3,4,3].map(item=>(
                <EventCard item={eventData}/>
              ))}
            </div>
          </div>


          {/* teams section */}
          <div className="event_cmte ">
            <div className="text-[28px] lg:text-[36px] font-extrabold text-white ">Our Team Are :</div>
{/* <div className="profile_cont_cmte">
  
</div> */}
{/* <RenderPositionWise /> */}
<div className="profile_cont_cmte overflow-y-scroll h-[470px]">
{["Head" ,"Co-Heads" ,"Members"].map(item=>(
  <div className="  ">
<div className="text-[20px] font-bold  text-white">{item}</div>
<div className=" flex flex-row flex-wrap justify-center items-center ">
{[1,2,3,4].map(item1 =>(
  <ProfileCard />
))}
</div>


  </div>
))}</div>
            {/* <div className="eve_cont_cmte flex flex-row   h-[350px] overflow-x-scroll">
           
              {[1,2,34,4,5,3,3,3,343,3,32,3,4,3].map(item=>(
                <ProfileCard />
              ))}
            </div> */}
          </div>
        </div>
 
      </div>
      
    </div>
  )
}

export default CommitteeByID
