import React from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function ChannelTab() {
    const navigate = useNavigate()
  return (
    <div className='w-full flex justify-between px-24 py-9 border-2 bg-white'>
      <div className='tab flex items-center font-semibold gap-64'>
          <h1>Facebook</h1>
          <h1 className='text-red'>Live</h1>
          <h1>Streamkey : ----------</h1>
      </div>
      <div></div>
      <div className='cursor-pointer' ><RiMore2Fill />
        </div>
    </div>
  )
}

export default ChannelTab
