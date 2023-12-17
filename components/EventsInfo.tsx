"use client";
import React, { useEffect, useState ,useContext} from 'react'
import '@/styles/event_info.css'
import Image from 'next/image'
import { LiaExpandSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { IoArrowRedoOutline } from "react-icons/io5";
import Link from 'next/link';
import { IoIosOpen } from "react-icons/io";
import { GoLink } from "react-icons/go";
import { TimeDifference, committee_data_type, event_data_type } from '@/types';
import { FetchURL } from '@/utils/url';
import { getValueFromOtherByLabel, sortEventsByUpcoming } from '@/utils/sortEvent';
import DataContext from '@/context/data/DataContext'
import { getObjectByID } from '@/utils/getIdByname';
import { getDayFromDateTime, stringToNumDate } from '@/utils/date';
import { currentDate, getEventStatus, getTimeAgoFormatted } from '@/utils/eventFunc';
import { committeeByID } from '@/utils/committee';
import { Timer } from '.';
import { isValidURL } from '@/utils/verifyLink';
import { IoLocationSharp } from "react-icons/io5";
import { SlLayers } from "react-icons/sl";
import { formatDateTime } from '@/utils/timer';

export const ViewEvent =({setIsView ,eventData} :{setIsView:any ,eventData:event_data_type}) =>{
   {/* height: ;
    max-width: 400px;
    width: auto; */}
    const sdateObj = getDayFromDateTime(stringToNumDate(eventData?.sdate));
  const edateObj = getDayFromDateTime(stringToNumDate(eventData?.edate));

  // const [ago , setAgo] = useState<string>("")
  // if( eventData?.updatedAt ){
    // const timeAgo = getDayFromDateTime(stringToNumDate(eventData?.updatedAt))
    // const str = timeAgo.minutes +"min , "+timeAgo.hours+"hr, "+timeAgo.dayOfWeek+"weeks, "+timeAgo.month+"mon "+ timeAgo.year +"year";
    // setAgo(str)
  //  } 
  const committeProfileData =eventData &&  committeeByID(eventData.organizer)


  // for timer :=========Data==============>
  const joinLink = getValueFromOtherByLabel(eventData , "joinLink")
  const syllabusLink = getValueFromOtherByLabel(eventData, "syllabusLink");
  const resultRealeseDate = getValueFromOtherByLabel(eventData , "resultRealeseDate");
  const resultLink = getValueFromOtherByLabel(eventData , "resultLink")
  const venue = getValueFromOtherByLabel(eventData , "venue")
  const socialLink = eventData?.eventsocialLinks
  const registrationLink = eventData?.registrationFormLink
  const isUpcomming:Boolean = stringToNumDate(currentDate.toString() )  < stringToNumDate(eventData?.sdate) //event 
  
  const isResultComming:Boolean =((resultRealeseDate !== undefined ) && (stringToNumDate( resultRealeseDate) > stringToNumDate(eventData.edate)) && (stringToNumDate( resultRealeseDate) >  stringToNumDate(currentDate.toString() )))

  const isResultOut :Boolean =((resultRealeseDate !== undefined ) && (stringToNumDate( resultRealeseDate) > stringToNumDate(eventData.edate)) && (stringToNumDate( resultRealeseDate) < stringToNumDate(currentDate.toString() )))

  // const isResultComming =true
  
  // const isUpcomming:Boolean = stringToNumDate(currentDate.toString() )  < stringToNumDate(eventData?.sdate) //event close
  return (
    <div className="flex justify-center items-center">

  
    <div className="e_view_card w-[90%] lg:w-[400px] ">
  <div className="e_img">
<Image src={eventData?.poster} width={400} height={500} alt='photo' className='h-[100%] w-[100%] rounded-sm'/>
<div className="e_img_view ">

  <button className='text-[24px] bg-black opacity-50 ' onClick={()=>(setIsView(true))}><LiaExpandSolid /></button>
</div>
  </div>

  {/* content start her */}

  <div className="e_content">
  {committeProfileData &&

  <Link href={`/committee/${committeProfileData?._id}`} className=''>

<div className="e_profile flex flex-row p-[18px] hover:text-blue-500" >
  <div className="eve_photo pr-[24px]">
    <Image src={`${committeProfileData?.photo ? committeProfileData.photo :"" }`} width={50} height={50} className='w-[45px] h-[45px] rounded-full shadow-md' alt='name'/>
  </div>
  <div className="event_personal_detail">
    <div className="eve_name ">{committeProfileData?.name} </div>
    <div className="eve_time">{
    // for time go show
   eventData?.updatedAt && getTimeAgoFormatted( new Date( stringToNumDate(eventData?.updatedAt ))) } </div>
  </div>
</div>
</Link>
  }

<div className="p-[18px]">
  
<div className="e_title">{eventData?.name}</div>

<div className="location_event flex justify-end">
  {/* For adding the venue */}
   {eventData?.medium && eventData.medium ==="offline event"&&venue && 
<> <div className="flex justify-center items-center">
  <div className="text-[20px] text-white mr-[4px]"> <IoLocationSharp /> </div>
  <div className=""> {venue} </div>
  </div></>
  }
{/* for online platform */}
{eventData?.medium && (eventData.medium === "online event" || eventData.medium=== "quize competition") && 
<> <div className="flex justify-center items-center">
  <div className="text-[20px] text-white mr-[4px]"> <SlLayers /> </div>
  <div className=""> Online </div>
  </div></>
  }

  </div>
<div className="e_descrip">{eventData?.description}</div>
{socialLink!==undefined && isValidURL(socialLink) &&
  <div className="text-orange-500 font-semibold text-[14px] my-[10px] w-fit  hover: border-orange-500 " ><Link href={socialLink}> Explore...</Link> </div>

}
{/* for  syllabus btn */}
{syllabusLink && isValidURL(syllabusLink) && 
<div className='syllabus_cont flex flex-col justify-center items-center my-[16px]'>
<div className="text-slate-400 text-[13px] mb-2">Dowload Syllabus for quize preparation</div>
<button className='px-[10px] py-[4px] rounded-md bg-sky-600 hover:bg-sky-800 text-white text-[13px] '>Dowload</button>
</div>}

{/* venue */}

{/* start Date and end Date */}
{eventData?.sdate && eventData?.edate &&
  <div className="date_cont">
  {/* <div className="d_start flex justify-center items-center flex-col"> */}
  <div className="flex flex-col justify-center rounded-3xl items-center  d_start p-2 mr-2">
              <span className="text-[10px] font-semibold">Sart:</span>
              <span className="font-extrabold text-sm">
                {sdateObj.day + " " + sdateObj.monthName + " " + sdateObj.year}
              </span>
              <span className="font-extrabold text-sm">
                {sdateObj.hours + ":" + sdateObj.minutes + " " + sdateObj.ampm}
              </span>
            </div>

  {/* </div> */}
  <div className="flex flex-col justify-center d_end rounded-3xl items-center  shadow-xl p-2 ml-2">
              <span className="text-[10px] font-semibold">End:</span>
              <span className="font-extrabold text-sm">
                {edateObj.day + " " + edateObj.monthName + " " + edateObj.year}
              </span>
              <span className="font-extrabold text-sm">
                {edateObj.hours + ":" + edateObj.minutes + " " + edateObj.ampm}
              </span>
            </div>
</div>
}
{/* For resitraion Link */}
{
  registrationLink && isValidURL(registrationLink) && isUpcomming && 
  <div className="flex flex-col justify-center items-center mt-[14px]"> 
  <div className="text-red-100 text-[14px] text-center"></div>
 <button className='bg-red-400 mb-[8px] mr-[8px] border-2  border-red-600 cursor-pointer text-[12px] hover:bg-red-700 text-white  px-[14px] py-[8px] rounded-md w-fit'><Link href={registrationLink}>Register Now</Link> </button>

  </div>
}


{/*  this is our timer or join link or result timer or result link
 */}
<div className=" my-[10px]   flex flex-col justify-center items-center   ">
{/* Add timer here */}
{/* {if(currentDate <)} */}


{/* ====================== for countdown section */}
{isUpcomming &&
<div className='flex flex-col justify-center items-center my-[16px]'> 
  <div className="text-gray-300 text-[14px] text-center mb-2">Event Start in</div>
<Timer startTime={eventData?.sdate} /> 
</div> }

{/* for result */}
{isResultComming && isUpcomming==false && (resultRealeseDate!==undefined) &&
  <div className='flex flex-col justify-center items-center my-[16px]'> 
  <div className="text-cyan-300 text-[13px] text-center mb-2 ">Result will be Declare  at {resultRealeseDate && formatDateTime(resultRealeseDate)}</div>
<Timer startTime={resultRealeseDate.toString()} />
</div>
 }

{isResultOut && resultLink!==undefined && isValidURL(resultLink) && !(stringToNumDate(currentDate.toString()) >= stringToNumDate(eventData.sdate) && stringToNumDate(currentDate.toString())< stringToNumDate(eventData?.edate))&&
  <div className='flex flex-col justify-center items-center my-[10px]'> 
  <div className="text-green-600 text-[13px] text-center">Result has been Declared at :{resultRealeseDate && formatDateTime(resultRealeseDate) }</div>
<button className='bg-green-600 mb-[8px] mr-[8px] border-2  border-green-400 cursor-pointer text-[12px] hover:bg-green-700 text-white  px-[14px] py-[8px] rounded-md w-fit'><Link href={resultLink}>Dowload</Link> </button>
  
</div>
 }

{/* for join link */}
{joinLink && (stringToNumDate(currentDate.toString()) >= stringToNumDate(eventData.sdate) && stringToNumDate(currentDate.toString())< stringToNumDate(eventData?.edate)) && isValidURL(joinLink) &&
<button className='bg-none mb-[8px] mr-[8px] border-2 border-green-400 cursor-pointer text-[12px] hover:bg-green-500 text-white  px-[14px] py-[8px] rounded-md w-fit my-[10px]' ><Link href={joinLink}>Join now</Link> </button>
}

{/*  for say event has been close*/}
{eventData?.edate &&( (stringToNumDate(currentDate.toString()) >stringToNumDate(eventData?.edate)) && (resultLink===undefined || resultLink && !isValidURL(resultLink) ) &&resultRealeseDate ===undefined) &&
(eventData?.other && eventData.other.length ===0 )&& 
  <div className="text-red-600 text-[14px] text-center font-semibold my-[10px]">Event has been ended !</div>

}

{
  eventData?.medium && eventData.medium ==="offline event" && (stringToNumDate(eventData?.sdate)< stringToNumDate(currentDate.toString())) && (stringToNumDate(eventData?.edate)> stringToNumDate(currentDate.toString())) &&
  <div className='h-description  text-[13px] text-teal-600  text-center'>  "🚀 The {eventData?.name} event is underway! Come join us now at {venue && venue} and be a part of this amazing experience."</div>
}
{/* for result date */}
{/* {eventData?} */}

</div>

</div>
  </div>
  

  {/* for margin */}
  <div className="mb-[24px]"></div>
</div>
</div>
  )
}

export const EventCard = ({item   }:{item:event_data_type  }) =>{
  const sdateObj = getDayFromDateTime(stringToNumDate(item?.sdate));
  const edateObj = getDayFromDateTime(stringToNumDate(item?.edate));
 
  return(
    <div className="relative  card_box">
    <div className="event_card_cont   " >
    
    <div className="event_info_card rounded-sm  m-[8px]  " >
      <Image src={`${item?.poster}`} width={300} height={420} alt='name' className='  w-[100%] h-[100%] rounded-sm z-[-18]' />
  <div className="event_blue_glass absolute bottom-[0px]  left-0 right-0 p-[3px]">{item?.name}</div>
  <span className="absolute rounded-full  top-[-3px] bg-red-600 shadow-md right-[-3px] text-[11px] text-white px-[4px] py-[1px] ">{item?.sdate && getEventStatus( new Date(item?.sdate) , new Date (item?.edate))}</span>
  
 
  
    </div>
   {/* Ima here */}
  {/* our card start */}
  <div className="absolute lg:hidden detail_info   top-0 left-0 bottom-0 right-0 w-[100%] h-[100%]  event_blue_glass ">
   
   <div className="  w-full h-full">
   <div className="cont_det p-[16px] relative h-[100%]">
    <div className="title_det text-[26px] font-bold text-blue-200 ">{item.name}</div>
    <div className="h-description text-justify text-[11px]">{item.description.substring(0,150)  }...</div>
    <div className="date_cont mt-[18px]">
  {/* <div className="d_start flex justify-center items-center flex-col"> */}
  <div className="flex flex-col justify-center rounded-3xl items-center  d_start p-2 mr-2">
              <span className="text-[10px]  font-semibold">Sart:</span>
              <span className="font-semibold text-[12px]">
                {sdateObj.day + " " + sdateObj.monthName + " " + sdateObj.year}
              </span>
              <span className="font-semibold text-[12px]">
                {sdateObj.hours + ":" + sdateObj.minutes + " " + sdateObj.ampm}
              </span>
            </div>

  {/* </div> */}
  <div className="flex flex-col justify-center d_end rounded-3xl items-center  shadow-xl p-2 ml-2">
              <span className="text-[10px] font-semibold">End:</span>
              <span className="font-semibold  text-[12px]">
                {edateObj.day + " " + edateObj.monthName + " " + edateObj.year}
              </span>
              <span className="font-semibold text-[12px] ">
                {edateObj.hours + ":" + edateObj.minutes + " " + edateObj.ampm}
              </span>
            </div>
</div>
{/* for read more */}
<div className="absolute bottom-0 left-0 right-0 mt-[12px] flex justify-end">
<button className='  bg-none mb-[8px] mr-[8px] border-2 border-blue-400 cursor-pointer text-[12px] hover:bg-blue-500 text-white  px-[14px] py-[8px] rounded-md w-fit'><Link href={`/events/${item?._id}`}>Expore..</Link> </button>

</div>
   </div>
   </div>
  </div>
  
    
  </div>

  
    {/* </div> */}
 {/* <div className="lg:hidden visible">
<div className="hidden  hover:visible  white_glass rounded-full p-[12px] text-[20px] absolute top-0 left-0 right-0 bottom-0  w-full h-full z-[5]">
  hi bor
  <Link href={`/events/${item?._id }`} ><GoLink />
 </Link>
 </div>
  </div> */}
  </div>
  )
}
export default function EventsInfo() {
const [isView ,setIsView] =useState(false)
// const [eventData ,setEventData] =useState<event_data_type[]>([]) ;

const dd = useContext(DataContext) ;
console.log(dd)
const [sortEventData , setSortEventData] = useState<event_data_type[]>([])
useEffect(() => {
  if( dd?.eventDataP.length!==0){
    const sort = sortEventsByUpcoming(dd?.eventDataP)
    console.log("this is my sorted array is :")
    console.log(sort)
    dd?.eventDataP.length !== 0 &&   setSortEventData(sort)
  }

}, [dd?.eventDataP.length])

const [select ,setSelect] =useState<number>(0)




  return (
    <div className="flex justify-center relative mt-[100px] md:mt-[170px] lg:mt-[250px] ">

    
    <div className=' w-[340px] md:w-auto lg:w-[1172px]'>
<div className="event_info_top flex flex-row justify-center items-center">
  <div className="event_info_top_left text-[32px] lg:text-[64px] ">Engaging Events to Explore
 Opportunities </div>
  <div className="event_info_top_right cursor-pointer"><Link href={'/events'}>Explore The More Events</Link> </div>
</div>
<div className="event_info_down flex flex-col lg:flex-row justify-between  mt-[60px]">

<div className="event_info_left hidden lg:block">
  <div className="flex justify-end ">
  <div className="relative top-[30px] left-5 white_glass text-[26px] p-[12px] rounded-full h-[50px] w-[50px] cursor-pointer  z-10 "><Link href={`/events/${sortEventData[select]?._id}`}> <IoArrowRedoOutline /></Link>
  </div>

  </div>
{/* view card design here */}
<ViewEvent setIsView={setIsView} eventData={sortEventData[select]} />
{/* for view the image */}
{isView && <div className="z-[2] absolute top-[450px] bottom-0 left-0 right-0">
      <div className="flex justify-center  ">

    
 
      <Image width={600} height={800} alt=''src={sortEventData[select]?.poster} />
      <button className="close z-10 text-black opacity-50 w-fit h-fit rounded-full p-[12px] bg-red-600 relative  top-[-23px] left-[-23px]  font-extrabold text-[24px] " onClick={()=>setIsView(false)} >
    <IoMdClose />
      </button>
      </div>
      </div>}

</div>
<div className="event_info_right mt-[50] flex h-[410px] lg:h-[790px] w-[90%]  md:w-[600px] lg:flex-wrap overflow-x-scroll lg:overflow-y-scroll   ">

{/* event cards start here */}
{sortEventData.length==0 && <div className="text-[42px] text-white font-bold">Loading...</div> }
{
sortEventData.length >0 &&
sortEventData?.map( (item ,index)=>(
  <div className='cursor-pointer' onClick={()=>setSelect(index)}>

<EventCard item={item}  />
</div>
))}


</div>

</div>
    </div>

    </div>
  )
}
