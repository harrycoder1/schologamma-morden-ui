import type { Metadata } from 'next'
import { Inter , Manrope } from 'next/font/google'
import './globals.css'
import { Footer, Nav } from '@/components'
const monocque = Manrope({weight:["800" , "300" ,"200" , "600" ,"700" ,"400"] ,subsets:['cyrillic' ,'cyrillic-ext'] })
const inter = Inter({ subsets: ['latin'] })
import DataDState from '@/context/data/DataDState'
export const metadata: Metadata = {
  title: 'Schologamma',
  description: 'Schologamma Forum: Empowering students in Computer Science through diverse events, committees, and resources. Join a vibrant community of tech enthusiasts today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monocque.className} myscreen relative overflow-x-hidden`}>
        <DataDState>

    
      <div className="blur-slide-h ">
        <div className="blur_cont">

       
 <div className="blur-01"></div>
 <div className="blur-02"></div>
  <div className="blur-03  "></div>
  <div className="blur-04"></div>
  <div className="blur-05"></div>
  </div>
  </div>
  <div className="w-[100vw] px-[8px] md:px-[32px] lg:px-[64px] xl:px-[128px]">


<Nav /> 
        {children}
        </div>
        </DataDState>
{/* for bottom space only */}
<div className="pb-[80px]"></div>

<Footer />

        </body>
    </html>
  )
}
