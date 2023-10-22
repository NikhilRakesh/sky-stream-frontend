import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import ChannelTab from './ChannelTab'

function OutercomponentChannel() {
  return (
    <div className=' bg-light'>
        <div className='Heading w-full flex justify-start bg-light gap-x-40 px-16 py-8 text-blue items-center font-semibold border-[1px]'>
            <div className='flex gap-2 items-center '> 
                <h1>CHANNEL NAME</h1>
                <MdOutlineExpandMore className='text-xl'/>
            </div>
            <div className='flex gap-2 items-center '> 
                <h1>CHANNEL NAME</h1>
                <MdOutlineExpandMore className='text-xl'/>
            </div>
           
        </div>
      <div>
        <ChannelTab />
        <ChannelTab />
        <ChannelTab />
        <ChannelTab />
        <ChannelTab />
        
      </div>
    </div>
  )
}

export default OutercomponentChannel
