// import Image from 'next/image'
import { About, EventsInfo, Footer, Header, Nav, Sliders, Update, Works } from '@/components'
export default function Home() {
  return (
    <main className="relative ">

{/* <div className="px-[16px] md:px-[32px] lg:px-[64px]"> */}


{/* <Nav /> */}
<Header/>
{/* <Update /> */}
<Sliders />
<About />
<Works />
<EventsInfo />
{/* <Footer /> */}

{/* </div> */}

    </main>
  )
}
