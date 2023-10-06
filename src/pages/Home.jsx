
import React from 'react'
import '../pages/Home.css'
import Header from '../component/header'
import Banner from '../component/Banner'
import Cta from '../component/Cta'
import Section1 from '../component/Section1'
import Section2 from '../component/Section2'
import Section3 from '../component/Section3'

function Home() {
  return (
    <div className='background-gradiant min-h-screen md:py-8 py-4 relative'>
    <Header />
    <Banner />
    <Cta />
    <Section1 />
    <Section2 />
    <Section3 />

    </div>
  )
}

export default Home
