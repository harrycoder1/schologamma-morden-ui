"use client"
import React from 'react'
import '@/styles/header.css'
import { useEffect, useState } from 'react';
const words = [
  "Where Innovation Meets Inspiration!",
  "Your Journey at Schologamma Forum Begins Here",
  "Explore Schologamma's Dynamic Community",
  "Schologamma Forum's Tech-Powered Environment",
  " Schologamma's Pathway to Success",
  "Schologamma Forum's Inspiring Journey",
  "Your Story Starts at Schologamma",
  "Schologamma Forum's Interactive Learning Hub",
  "Building Dreams, Creating Futures: Schologamma's Vision for Tech Enthusiasts",
  "Schologamma Forum's Playground for Innovation",
  " Schologamma Forum's Gateway to Tech Excellence"
];


export default function Header() {


  const [displayedText, setDisplayedText] = useState<string>(''); 
  // State to manage displayed text

  useEffect(() => {
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 15;
    const speed = 70;

    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          skip_count++;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= words.length) {
            i = 0;
          }
        }
      }
      const part = words[i].substring(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setDisplayedText(part); // Update displayed text in state
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center  mt-[112px] h-auto overflow-hidden' >
      {/* heading start here */}
      <div className=" flex flex-row justify-center items-center h-auto  overflow-hidden ">
  <span>
    <div className="heading-span font-extrabold text-[37px] lg:text-[62px]  px-[8px] word">
      Welcome to Schologamma Forum
      </div>
    <div className="heading-span2 font-extrabold text-center mt-[4px] text-[24px] lg:text-[32px] h-min-[80px] h-auto">
    {displayedText}
      
    
    </div>
  </span>
</div>
<div className="h-description lg:w-[59%] my-[54px] ">At Schologamma Forum, we're dedicated to fostering a vibrant community within the Computer Science Department. We strive to create an environment that encourages both technical prowess and holistic development among our students</div>
    </div>
  )
}