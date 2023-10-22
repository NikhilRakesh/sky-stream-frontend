import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import LiveTabs from './LiveTabs'

function OutercomponentLive() {
  return (
    <>
    <div className='bg-gray relative'>
    <div className='w-full px-24 py-5 bg-white '>
        <div className='header flex justify-between  font-bold border-b-2 pb-10'>

        <div className="name text-blue flex  items-center gap-2">NAME
      <MdOutlineExpandMore/>
      </div> 
      <div className="name text-blue flex items-center gap-2">DURATION
      <MdOutlineExpandMore/>
      </div>
      <div>

      </div>
      <div>

      </div>
          
        </div>
        <div className='tabs flex flex-col gap-2 '>
           <LiveTabs />
           <LiveTabs />
           <LiveTabs />
           <LiveTabs />
           <LiveTabs />
           
        </div>
       
      
    </div>
     </div>
    {
      
    }
    </>
  )
}

export default OutercomponentLive
