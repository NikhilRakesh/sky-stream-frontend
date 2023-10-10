
import React, { useEffect , useState } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import '../pages/Home.css'
import Header from '../component/HomeComponent/Header'
import Banner from '../component/HomeComponent/Banner'
import Cta from '../component/HomeComponent/Cta'
import Section1 from '../component/HomeComponent/Section1'
import Section2 from '../component/HomeComponent/Section2'
import Section3 from '../component/HomeComponent/Section3'
import Section4 from '../component/HomeComponent/Section4'
import Footer from '../component/HomeComponent/Footer'

function Home() {
  const [viewPort, setViewPort] = React.useState(window.innerWidth);
  
  const snap = useSnapshot(state)

  const handleScroll =()=>{
    state.scroolY = window.scrollY 
  }

  useEffect(() => {
    
    window.addEventListener("resize", handleScroll);
    
   if(viewPort < 768){
    state.deviceType = "Mobile";

   }
   else if(viewPort < 991)
   {
    state.deviceType = "Tablet";
   }
   else
   {
    state.deviceType = "Desktop"
   }

   return()=>{
    window.removeEventListener("resize", handleScroll);
   }

  }, [viewPort])

  console.log(snap.deviceType);


  return (
    <div className='background-gradiant min-h-screen md:pt-8 py-4 relative'>
    <Header />
    <Banner />
    <Cta />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
    </div>
  )
}

export default Home
