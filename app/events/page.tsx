"use client"
import { EventCard, ViewEvent } from '@/components/EventsInfo'
import React, { useState ,useContext ,useEffect, ChangeEvent } from 'react'
import '@/styles/events.css'
import DataContext from '@/context/data/DataContext'
import { committee_data_type, event_data_type } from '@/types'
import { sortEventsByUpcoming } from '@/utils/sortEvent'
import Link from 'next/link'
import { GoLink } from 'react-icons/go'
import { getEventsByMedium, getEventsByMedium2, getEventsByOrganizer, getEventsByType, getTodayEvents, getUniqueEventTypesArray, searchEvents } from '@/utils/searchFunc'
export default function Events() {
    const [isView ,setIsView] = useState(false)
// const [eventData ,setEventData] =useState<any>({})


const [eventData ,setEventData] =useState<event_data_type[]>([]) ;

const dd = useContext(DataContext) ;
console.log(dd)
const [sortEventData , setSortEventData] = useState<event_data_type[]>([])
useEffect(() => {
  if( dd?.eventDataP.length!==0){
    setEventData(dd.eventDataP)
    const sort = sortEventsByUpcoming(dd?.eventDataP)
    console.log("this is my sorted array in event page is  :")
    console.log(sort)
    dd?.eventDataP.length !== 0 &&   setSortEventData(sort)
  }

}, [dd?.eventDataP.length])
const [ committeeData , setCommitteeData] =useState<committee_data_type[]>([])
useEffect(() => {
  if( dd?.committeeP.length!==0){
    // setCommitteeData(dd.committeeP)s
    // const sort = sortEventsByUpcoming(dd?.eventDataP)
    // console.log("this is my sorted array in event page is  :")
    // console.log(sort)
    dd?.eventDataP.length !== 0 &&   setCommitteeData(dd.committeeP)
  }

}, [dd?.eventDataP.length])

const [select ,setSelect] =useState<number>(0)
const[searchText ,setSearchText] =useState<string>("")

// handle change function for searching
const handdleText = (e:ChangeEvent<HTMLInputElement>)=>{
e.preventDefault();
setSortEventData(searchEvents(eventData ,e.target.value))
setSearchText(e.target.value)


}

// for search function :



const sortObj = [
  {name:"ToDay",func:getTodayEvents},
  {name:"Upcomming", func:sortEventsByUpcoming},
  {name:"Online", func:getEventsByMedium2},
  {name:"Offline", func:getEventsByMedium},
]
  return (
    <div className='flex justify-center items-center'>
  
  {/* data start her  */}
  <div className="mt-[32px] flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
<div className="comte_left hidden lg:block">
<ViewEvent setIsView={setIsView} eventData={sortEventData[select]}  />

</div>
<div className="comte_right mt-[20px] lg:mt-0 lg:ml-[42px] w-[96%] cmte_box  lg:w-[805px]">
    <div className="cmte_blur"></div>
<div className="search_bar mt-[30px] flex flex-row justify-center flex-wrap lg:flex-nowrap ">
<input  placeholder='Enter the event name'value={searchText} onChange={handdleText} className='search_input lg:w-[340px]  md:w-auto w-[200px] focus:outline-none focus-within:outline-none  focus-visible:outline-none '/>

  
<button className='search_btn lg:w-[100px] w-[60px] lg:mr-[12px]  ' >Search</button> 
<select name="Committies " id="cars" className='dropdown_btn w-[120px] lg:w-[250px]  focus:outline-none focus-within:outline-none' onChange={(e)=>setSortEventData( getEventsByOrganizer(eventData , e.target.value))}>
    <option value="">choose committee</option>

    {committeeData?.map((item,index)=>(
    <option value={item?._id} key={index}>{item?.name}</option>

    ))}
    {/* <option value="opel">Digital</option>
    <option value="audi">Discipline</option> */}
  </select>
</div>




{/* other category  */}
<div className="flex flex-row flex-wrap justify-center mt-[20px]">


{sortObj?.map(item =>(

    <div className="cmte_search_link_txt px-[20px] py-[8px] cursor-pointer  " onClick={()=>setSortEventData( item.func(eventData))}>
        {item.name}
    </div>
))}

<select name="type" id="" className='dropdown_btn w-[120px] lg:w-[250px] focus:outline-none  focus-within:outline-none' onChange={(e)=>setSortEventData(getEventsByType(eventData ,e.target.value))}>
    <option  value="">type of Events</option>
{getUniqueEventTypesArray(eventData)?.map(( item,index)=>
    <option value={item} key={index} >{item}</option>

  )}
  
  </select>
</div>

{/* for search events container */}
<div className="eve_container mt-[50px]">
    {/* all cards here... */}
    <div className=" flex flex-row justify-center flex-wrap overflow-y-visible mt-[23px]">
    
  {sortEventData.length===0 && <><div className="text-[24px] lg:text-[32px]">not found!</div></>}
{sortEventData?.map((item ,index)=>(
  <div className="relative">
  <div className='cursor-pointer' onClick={()=>setSelect(index)}>
  <EventCard item={item}  />
  </div>


</div>

))}

</div>
</div>
</div>
  </div>
    </div>
  )
}
