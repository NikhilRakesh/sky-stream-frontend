import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import PreviewLive from './PreviewLive'

function LiveTabs() {
  const [live,setLive] = useState(false)
  return (
    <div className='' > 
    <div className='flex justify-between items-center w-full h-10 border-b-4 py-10 bg-white  '>
      <div className='name'>
         Mukesh Kumar
      </div>
      <div>
        12:14:30
      </div>
      <div className='text-red'>Live</div>
      <div className='flex items-center gap-2' onClick={()=>setLive(!live)}>
        <h1>Preview</h1>
        <AiFillPlayCircle className='text-blue text-xl' />
      </div>
      
    </div>
    {
      live ? <div className='flex items-center just'>
        <PreviewLive View={live} handleClose={setLive} />
      </div> : null
    }
    </div>
  )
}

export default LiveTabs
