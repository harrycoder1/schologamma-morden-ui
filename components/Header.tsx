"use client"
import React from 'react'
import '@/styles/header.css'
import { useEffect, useState } from 'react';
const words = [
  "Where Innovation Meets Inspiration!",
  "Your Journey at Schologamma Forum Begins Here",
  "Explore Schologamma's Dynamic Community",
  "Schologamma Forum's Tech-Powered Environment",
  "Schologamma's Pathway to Success",
  "Schologamma Forum's Inspiring Journey",
  "Your Story Starts at Schologamma",
  "Schologamma Forum's Interactive Learning Hub",
  "Schologamma's Vision for Tech Enthusiasts",
  "Schologamma Forum's Playground for Innovation",
  "Schologamma Forum's Gateway to Tech Excellence",
  "Discover Limitless Possibilities at Schologamma",
  "Unleash Your Potential with Schologamma Forum",
  "Where Learning Becomes an Adventure - Schologamma",
  "Embark on a Quest for Knowledge with Schologamma Forum",
  "Elevate Your Skills at Schologamma's Learning Center",
  "Innovate, Learn, and Grow - Schologamma Forum Awaits!",
  "Join the Tech Revolution at Schologamma Forum",
  "Experience Cutting-Edge Education at Schologamma",
  "Unlock New Horizons at Schologamma Forum",
  "Schologamma - Where Ideas Shape the Future",
  "Empowering Minds, Transforming Futures - Schologamma",
  "Schologamma Forum - Your Platform for Innovation",
  "Innovate. Collaborate. Excel. - Schologamma",
  "Schologamma Forum - Redefining Tech Education",
  "Achieve Brilliance with Schologamma's Guidance",
  "Schologamma - Igniting Passion for Technology",
  // Add 50+ more entries below
  "Innovate Your Way to Success with Schologamma",
  "Schologamma - Connecting Minds for Innovation",
  "Step into the Future with Schologamma Forum",
  "Schologamma - Transforming Tech Education",
  "Discover the Magic of Learning at Schologamma",
  "Schologamma Forum - Empowering Tech Enthusiasts",
  "Experience Innovation with Schologamma",
  "Schologamma - Shaping Tech Leaders of Tomorrow",
  "Unlock Your Potential with Schologamma Forum",
  "Schologamma Forum - A World of Opportunities",
  "Inspiring Tech Excellence - Schologamma Forum",
  "Schologamma - Where Ideas Take Flight",
  "Embark on Your Tech Journey with Schologamma",
  "Schologamma Forum - Inspiring Tech Innovators",
  "Create, Innovate, Excel - Schologamma Forum",
  "Schologamma - Fostering Innovation and Growth",
  "Empower Your Future with Schologamma",
  "Schologamma Forum - Where Dreams Become Reality",
  "Explore, Learn, and Succeed with Schologamma",
  "Schologamma - Guiding Your Tech Exploration",
  "Empowering Tech Enthusiasts - Schologamma Forum",
  "Schologamma Forum - Where Innovation Thrives",
  "Fuel Your Passion for Tech with Schologamma",
  // Add more entries...
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
let pre= 1
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
while (pre==i){
  i=   Math.floor(Math.random() * words.length);

}
          
      pre = i
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
    <div className='flex flex-col justify-center items-center mt-[43px] md:mt-[112px] h-auto overflow-hidden' >
      {/* heading start here */}
      <div className=" flex flex-row justify-center items-center h-auto  overflow-hidden ">
  <div>
    <div className="heading-span font-extrabold text-[37px] lg:text-[62px]  px-[8px] word">
      Welcome to Schologamma Forum
      </div>
      <div className="min-h-[78px] md:min-h-[58px] w-full flex justify-center items-center">

      
    <div className="heading-span2 font-extrabold text-center mt-[4px] text-[24px] lg:text-[32px]  h-auto">
    {displayedText}
      
    </div>
    </div>
  </div>
</div>
<div className="h-description lg:w-[59%] my-[54px] ">At Schologamma Forum, we're dedicated to fostering a vibrant community within the Computer Science Department. We strive to create an environment that encourages both technical prowess and holistic development among our students</div>
    </div>
  )
}