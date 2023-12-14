"use client"
import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import {GrFormNext ,GrFormPrevious} from 'react-icons/gr'
import Link from 'next/link';
import { FetchURL } from '@/utils/url';
import Image from 'next/image';

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


  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the slide to the next one
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>{
      if(prevIndex >= (slides.length -1)) return (0)
     else  return (prevIndex + 1) });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>{
      if(prevIndex <= 0) return slides.length-1
     else  return (prevIndex - 1) })
  }



  useEffect(() => {
    // Use setInterval to automatically change the slide every 2 seconds
    const interval = setInterval(nextSlide, 4500);

    return () => {
      // Clear the interval to avoid memory leaks
      clearInterval(interval);
    };
  }, [currentIndex]);

//   const sendURL = (e,value)=>{
//     // e.preventDefault();

//   }

  return (
    <div className='mt-[50px] md:mt-[83px] relative'>
      <div className="z-[3] h-fit ">
        {/* {slides?.map((item, index) => ( */}

          <div
            // key={ite}
            // className={`slide ${index === currentIndex ? 'active' : ''}`}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: index === currentIndex ? 1 : 0 }}
          ><>

          <Update slide={slides[currentIndex]} />
            {/* <Image 
              // initial={{ opacity: 0, scale: 0.5 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.5 }}
              width={1028} height={559} className='w-screen h-fit'
            src={slides[currentIndex]?.imageLink} alt={`Slide ${ 1}`} />
            {
              slides[currentIndex]?.url !==undefined && slides[currentIndex]?.url !=='/' &&
              <div className='absolute bottom-0 left-0 right-0 text-cyan-200 drop-shadow-lg   rounded-md flex justify-center items-center '>
              <button className='bg-black opacity-40 w-fit px-[2px] py-[1px]  rounded-full text-[9px] md:text-[12px] ' > <Link href={`${slides[currentIndex]?.url}`}>Expore...</Link>
                </button>
             </div>
            } */}
       

  </>

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
  );
};

export default Sliders;
