import React from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function ChannelTab({...item}) {
    const navigate = useNavigate()
  return (
    <div className='w-full flex justify-between px-24 py-9 border-2 bg-white'>
      <div className='tab flex items-center font-semibold gap-64'>
        <div className='min-w-[40px] mx-w-[60px]'>  <h1 >{item.name}</h1> </div>
        <div className='min-w-[40px] mx-w-[60px]'>    <h1 className='text-red '>Live</h1></div>
        <div className='flex items-center justify-center gap-4 text-sm'>   <h1 className='text-black text-base'>Streamkey : </h1>  { ...item.streamKey} </div>
      </div>
      <div></div>
      <div className='cursor-pointer' ><RiMore2Fill />
        </div>
    </div>
  )
}

export default ChannelTab
