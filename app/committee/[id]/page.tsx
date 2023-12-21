"use client"
import React, { useState ,useContext ,useEffect } from 'react'
import '@/styles/committeebyid.css'
import Image from 'next/image'
import { EventCard } from '@/components/EventsInfo'
// import { ProfileCard, RenderPositionWise } from '@/app/teams/page'
import { HeadCoHeadMemberFetch, ProfileCard } from '@/components'
import { committee_data_type, event_data_type, team_data_type } from '@/types'
import DataContext from '@/context/data/DataContext'
import { committeeByID } from '@/utils/committee'
import { eventSortByCommittee } from '@/utils/eventFunc'
import { sortAndSplitByPosition, teamsSortByCommittee } from '@/utils/teamFunc'
function CommitteeByID({params}:{params:any}) {
// const [eventData ,setEventData] = useState<any>({})
//FOR FETCH THE DATA FROM THE context api 
// for committee data


const dd = useContext(DataContext) ;
  console.log(dd)
  const [committteeProfile , setCommitteeProfile] = useState<committee_data_type |{}>({
    _id: "",
    name: "",
    email: "",
    description: "",
    photo:""
  })
const [eventByCommitttee , setEventByCommittee] =useState<event_data_type[]>([])
const[teamsByCommittee , setTeamsByCommittee] =useState< { [key: string]: team_data_type[] }>({})
// const [cmteProfile ,setCmteProfile] =useState({})
      // dd?.committeeP.length !== 0 &&   setCommitteeProfile()
    
      // useEffect(() => {
      //   if(cmteprofile?.name !== ""){
      //   const cmteprofile = committeeByID(params.id)

      //     setCommitteeProfile(committeeByID(params.id))
      //         }
      // }, [])

      const committeProfileData =params.id &&  committeeByID(params.id)

     
      
// for events data
  useEffect(() => {
    if( dd?.eventDataP.length!==0){
      
      const dataEvent = eventSortByCommittee(params.id ,dd.eventDataP)
      dd?.eventDataP.length !== 0 &&   setEventByCommittee( dataEvent)
    }
  
  }, [dd?.eventDataP.length])
// 
// for teams data
useEffect(() => {
  if( dd?.teamsP.length!==0){
    const dataTeams = teamsSortByCommittee(dd.teamsP[0].data , params.id)
    const sortTeams = sortAndSplitByPosition(dataTeams)
    dd?.teamsP.length !== 0 &&   setTeamsByCommittee(sortTeams)
  }

}, [dd?.teamsP.length])




if(committeProfileData?.name == "" ) {return <><div className="text--[32px] lg:text-[44px]">404|Not Found</div></>}
  // profile page of each committees
  return (
    <div>
      <div className="mt-[50px] flex  flex-col lg:flex-row lg:justify-between">

        <div className="left_cmte w-[95%] h-auto lg:h-[1000px] lg:w-[384px] left_box  overflow-y-auto flex flex-col  items-center p-[24px]">
        <div className="img_box relative rounded-full w-[180px] h-[180px] bg-gray-600">
         {committeProfileData?.photo && <Image src={`${committeProfileData?.photo}`}width={200} height={200}  alt="name" className="w-[100%] h-[100%] rounded-full"/>}
        </div>
        <div className="cmte_name text-[24px] font-bold text-cyan-500  my-[20px]">{ committeProfileData?.name}</div>
        <div className="h-description">
        {committeProfileData?.description}
        </div>

        </div>
        <div className="right_cmte w-[95%]  h-[1000px] lg:w-[832px] left_box p-[30px]">
          {/* more items sections */}

          <div className="event_cmte ">
            <div className="text-[28px] lg:text-[36px] font-extrabold text-white shadow-md">Our Events Are :</div>

            <div className="eve_cont_cmte flex flex-row   h-[350px] overflow-x-scroll">
              {/* for committies events fetch */}
              {eventByCommitttee.length ===0 && <div className='text-[24px] font-bold flex justify-center items-center text-sky-300 '><div className="text-center">Event Coming Soon...
                </div> </div>}
              {eventByCommitttee?.map(item=>(
                <EventCard item={item}/>
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
<HeadCoHeadMemberFetch  sortedTeams={teamsByCommittee}/>
</div>
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
