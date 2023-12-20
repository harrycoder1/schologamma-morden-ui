// import Image from 'next/image'
import { About, EventsInfo, Footer, Header, Nav, Sliders, Update, Works } from '@/components'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Home() {
  const arr =  [
    {
    "id": 1,
    "imageUrl": "https://res.cloudinary.com/dsepeslgc/image/upload/v1702569086/e3g8ldh8m16qamtfjisd.jpg",
 
    },
    {
    "id": 2,
    "imageUrl": "https://res.cloudinary.com/dsepeslgc/image/upload/v1702569204/utwhemhp7wglscpx7qsv.jpg",
 
    },
    {
    "id":3,
    "imageUrl": "https://res.cloudinary.com/dsepeslgc/image/upload/v1702963729/r65vryeaeylpbpywoxeb.jpg",
 
    },
    {
    "id":4,
    "imageUrl": "https://res.cloudinary.com/dsepeslgc/image/upload/v1702981600/qo7oayysirobw1oeed4q.jpg",
 
    },
    {
    "id":5,
    "imageUrl": "https://res.cloudinary.com/dsepeslgc/image/upload/v1703006099/twizmzqfn4xqkj2qavmk.jpg",

    },
    {
    "id": 6,
    "imageUrl": "https://res.cloudinary.com/dsepeslgc/image/upload/v1703006436/mhue2cokkjkfxtmgkahj.jpg",
 
    }
    ]
  return (
    <main className="relative ">

{/* <div className="px-[16px] md:px-[32px] lg:px-[64px]"> */}


{/* <Nav /> */}
<Header/>
{/* <Update /> */}
{/* <Reveal  */}

{/* <SliderTransition  slides={arr}/> */}
<RevealOnScroll >
<Sliders />

</RevealOnScroll>
<RevealOnScroll ><About /></RevealOnScroll>
<RevealOnScroll ><Works /></RevealOnScroll>
<RevealOnScroll ><EventsInfo /></RevealOnScroll>



{/* <Footer /> */}

{/* </div> */}

    </main>
  )
}
