import React from 'react'
import Migration from '../assets/images/migration.png'

function Section3() {
  return (
    <div className='px-10 py-4 md:py-6 lg:px-40 md:px-20'>
       <h2 className='pt-16 lg:pt-40 text-[24px] md:text-[40px] text-white text-center'>RTMP Server with Load Balancing:</h2>
      <p className='text-[14px] md:text-[18px] text-gray text-center lg:px-44'>Experience the power of load-balanced RTMP servers that distribute traffic efficiently, guaranteeing optimal performance for your streaming needs.</p>
      <div className='flex lg:flex-row flex-col'>

        <div className='Title py-52'>
        <h2 className='text-[30px] text-white'>
        Hassle Free Streaming
        </h2>
        <p className='text-gray lg:w-[50%] pt-2'>
        Experience hassle-free streaming with Sky Streaming Technology. Our cutting-edge technology ensures uninterrupted, low-latency broadcasting, so you can focus on delivering content without worries.
        </p>
        </div>

        <div className='lg:w-[50%]  lg:py-44'>
            <img src={Migration}/>
        </div>

      </div>
    </div>
  )
}

export default Section3;
