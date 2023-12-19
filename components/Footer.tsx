import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

const socialLinks =[
  {
    name:"LinkedinIn",
    path:"https://www.linkedin.com/in/schologamma-forum-jdcoem-1b97b7254/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
    logo:<FaLinkedinIn />
  }
  ,
  
  {
    name:"FaceBook",
    path:"https://www.facebook.com/p/Schologamma-100023190350766/?paipv=0&eav=AfYk4dZvNZRPoBl4-TNCRIo8k9aR4CDIV61DPDRqbbXRIGShTvejK_MDf4U12ntCyBc&_rdr",
    logo:<FaFacebook />
  },
  { name:"Instagram",
    path:"https://www.instagram.com/schologamma_jd/?img_index=1",
    logo:<FaInstagram />
  },
  {name:"YouTube",
path:"https://www.youtube.com/channel/UCtrut_BYJYtiBI-FZTmcSvA" ,
logo:<FaYoutube />}
]

const quickLinks = [

  {name:"Events" ,
path:"/events"
},
{
  name:"Committies",
  path:'/committee'
},
{
  name:"Teams",
  path:'/teams'
},
{
  name:"AboutUs",
  path:'#aboutus'
}
]
export default function Footer() {
  return (
    <div className='mx-[8px] md:mx-[16px] lg:mx-[64]'>
      <footer className="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://res.cloudinary.com/dgsfahc3m/image/upload/v1702995973/WhatsApp_Image_2023-12-19_at_7.48.23_PM_1_be0exv.jpg"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <div className="flex justify-center items-center w-full sm:w-fit">

        <p className='bg-[#78aeecb3]  w-[200px] h-[200px] flex justify-center items-center rounded-full'>
       <Image src={'/schologammalogo.png'} width={400} height={400}  alt='schologamma Logo' className='w-[130px] h-[130px]'/>
        </p>
        </div>
       

        <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
          <li> <b> Address</b> <br />
Valni Near Hanuman Temple, Borgoan, Kalmeshwar Road, Phata

Nagpur, Maharashtra 441501

</li>
          <li>schologamma7@jdcoem.com</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          {socialLinks?.map(item =>(
            <li>
            <a
              href={item.path}
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">{item.name}</span>
<span className="text-[24px]">    {item.logo}</span>
      
            </a>
          </li>
          ))}
          

          
        </ul>
        </div>

{/* for other sections */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Quick Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            {quickLinks.map(item =>(
              <li>
              <Link href={item.path} className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              {item.name}
              </Link>
            </li>
            ))}
            

            
          </ul>
        </div>

   
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
       

         

        </ul>

        <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
          &copy; 2022. Schologamma Forum. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
