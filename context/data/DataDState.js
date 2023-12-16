"use client";
import { FetchURL } from "@/utils/url";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";
const DataState = (props) => {
  
  const data = {
    name: "harish",
  };

  const [eventDataP ,setEventDataP] =useState ([])
const [committeeP ,setCommitteeP] =useState([])
const [teamsP ,setTeamsP] =useState([])
// for committee
useEffect(() => {
  if(committeeP.length==0){


  const fetData =async ()=>{
    const res = await fetch(`${FetchURL}/api/committee`)
    const data = await res.json()
console.log(data)
   data.ok && committeeP.length===0 && setCommitteeP(data.data)

  }
  fetData()
}
}, []) ;


// for events
  useEffect(() => {
    if(eventDataP.length==0){

  
    const fetData =async ()=>{
      const res = await fetch(`${FetchURL}/api/events`)
      const data = await res.json()
  console.log(data)
     data.ok && eventDataP.length===0 && setEventDataP(data.data)

    }
    fetData()
  }
  }, []) ;

  // for teams
  useEffect(() => {
    if(teamsP.length==0){

  
    const fetData =async ()=>{
      const res = await fetch(`${FetchURL}/api/teams`)
      const data = await res.json()
  console.log(data)
     data.ok && teamsP.length===0 && setTeamsP(data.data)
     console.log("teams Data are")
     console.log(data.data)
    //  const sort = sortEventsByUpcoming(data.data)
    //  console.log("sorted Data are :")
  
    //  console.log(sort)
    //  data.ok && eventData.length===0 && setSortEventData(sort)
    //  console.log(sortEventData)
    }
    fetData()
  }
  }, []) ;
  
  // Store auth in sessionStorage whenever it changes
  
  // for logout and destorythe function
  
  return (
    <DataContext.Provider
      value={{
        data: data ,
        eventDataP:eventDataP,
        committeeP:committeeP,
        teamsP:teamsP
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
