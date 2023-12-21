"use client"
import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import {GrFormNext ,GrFormPrevious} from 'react-icons/gr'
import Link from 'next/link';
import { FetchURL } from '@/utils/url';
import Image from 'next/image';
import  '@/styles/animation.css'

import { Update } from '.';
import { slider_type } from '@/types';
const Sliders = () => {
//   console.log("this is our fetch url "+process.env.ADMINURL_PATH)
// console.log("we are current in "+process.env.NODE_ENV)


  const [slides , setSlides] = useState<slider_type[]>([])
  useEffect(() => {
  const fetData =async ()=>{
    const res = await fetch(`${FetchURL}/api/slider`)
    const data = await res.json()
console.log(data)
   data.ok && slides.length===0 && setSlides(data.data)
  }
  fetData()
  }, [])

  function changeAnimation(): string {
    const values: string[] = [ 'slide-in-right', 'slide-in-left'];
    const randomIndex: number = Math.floor(Math.random() * values.length);
    const randomValue: string = values[randomIndex];
  return randomValue
  }
  

  const [currentIndex, setCurrentIndex] = useState(0);
const [animationCss,setAnimationCss] =useState("slide-in-left")
  // Function to change the slide to the next one
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>{
      if(prevIndex >= (slides.length -1)) return (0)

     else  return (prevIndex + 1) });
setAnimationCss("slide-in-left")

  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>{
      if(prevIndex <= 0) return slides.length-1
     else  return (prevIndex - 1) })
setAnimationCss("slide-in-right")

  }



  useEffect(() => {
    // Use setInterval to automatically change the slide every 2 seconds
    const interval = setInterval(nextSlide, 4500);
setAnimationCss("slide-in-left")

    return () => {
      // Clear the interval to avoid memory leaks
      clearInterval(interval);
    };
  }, [currentIndex]);

//   const sendURL = (e,value)=>{
//     // e.preventDefault();

//   }

  return (
    // <div className='update_box w-[95%] lg:w-[1170px]  p-[14px] md:p-0 '>

    <div className='mt-[50px] md:mt-[83px] relative'>
          <div className="up_heading pt-[38px] pb-[15px] text-[32px] lg:text-[44px] text-center">
        Our Latest Updates
        </div>
      <div className="z-[3] h-fit ">
        {/* {slides?.map((item, index) => ( */}

          <div className='h-[990px] lg:h-auto '
      
          >
{/*           
<div className="
slide-top "> */}
{slides?.map((item , index)=>(
         index===currentIndex&&
         <div className={`${animationCss} `}>
         <Update slide={slides[currentIndex>0?currentIndex:0]} />

         </div>

))}

          
       

  

          </div>
        
  
        {/* ))} */}
      </div>
      <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 backdrop-blur-sm text-neutral-50 transform -translate-y-1/2 bg-gray-400 opacity-60 p-2 rounded-full"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 
          text-neutral-50
          transform -translate-y-1/2 bg-gray-400 opacity-60 p-2 rounded-full"
        >
          <GrFormNext />
        
            </button>
           
    </div>
    // </div>
  );
};

export default Sliders;
