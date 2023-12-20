// import Image from 'next/image'
import { About, EventsInfo, Footer, Header, Nav, Sliders, Update, Works } from '@/components'
import RevealOnScroll from '@/components/RevealOnScroll'
export default function Home() {
  return (
    <main className="relative ">

{/* <div className="px-[16px] md:px-[32px] lg:px-[64px]"> */}


{/* <Nav /> */}
<Header/>
{/* <Update /> */}
{/* <Reveal  */}
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
