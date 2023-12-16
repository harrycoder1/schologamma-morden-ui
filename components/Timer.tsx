"use client";
import React, { useEffect, useState } from 'react'
import'@/styles/timer.css'
import { getTimeRemainingToStart } from '@/utils/timer';
import { timer_reamaning_type } from '@/types';
export default function Timer({startTime}:{startTime:string}) {
const[time ,setTime] =useState<timer_reamaning_type[]>([])
const changeCountFun = () =>{
const timeS = getTimeRemainingToStart(new Date(startTime))
setTime(timeS)
}
  
  useEffect(() => {
    // Use setInterval to automatically change the slide every 2 seconds
    const interval = setInterval(changeCountFun, 1000);

    return () => {
      // Clear the interval to avoid memory leaks
      clearInterval(interval);
    };
  }, [startTime]);
  return (
    <div>
      {time.length !==0 && 
      
    
      <div className="clock-container black_glass">
        {
          time[0].value >0  &&
          <div className="clock-col">
          <p className="clock-day clock-timer">
          {time[0].value}
          </p>
          <p className="clock-label">
          {time[0].name}
          </p>
        </div>
        }
 {
          time[1].value >0  &&
    <div className="clock-col">
      <p className="clock-day clock-timer">
      {time[1].value}
      </p>
      <p className="clock-label">
      {time[1].name}
      </p>
    </div>
}
{
          time[2].value >0  &&
    <div className="clock-col">
      <p className="clock-hours clock-timer">
       { time[2].value}
      </p>
      <p className="clock-label">
      {time[2].name}
      </p>
    </div>
}
{
          time[3].value >0  &&
    <div className="clock-col">
      <p className="clock-minutes clock-timer">
      { time[3].value}
      </p>
      <p className="clock-label">
      {time[3].name}
      </p>
    </div>
}
    <div className="clock-col">
      <p className="clock-seconds clock-timer">
      { time[4].value}
      </p>
      <p className="clock-label">
      {time[4].name}
      </p>
    </div>
  </div>
    }
  </div>
  )
}
