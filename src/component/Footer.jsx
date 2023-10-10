import React from 'react'
import Logo from '../assets/images/Logo.png'
import Fb from '../icons/fb'
import Insta from '../icons/Insta'
import Linkdin from '../icons/Linkdin'
import Twiter from '../icons/twiter'

function Footer() {
  return (
    <div className='text-white w-full h-fit bg-darkBlue px-10 py-4 md:py-6 lg:px-40 md:px-20 flex lg:flex-row flex-col gap-4 justify-between items-center' >

    <div className='flex items-center '>
      <div className='w-7'>      
        <img src={Logo} />
      </div>

      <div className='px-4'>Sky Stream</div>
    </div>

    <div className='text-gray'>
    Copyright © 2022, host.co.in. All rights reserved.
    </div>

    <div className=' flex gap-4'>
      <div> <Fb /> </div>
      <div> <Insta /> </div>
      <div> <Linkdin /> </div>
      <div> <Twiter /> </div>
    </div>
    
    </div>
  )
}

export default Footer
