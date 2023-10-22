import React from 'react'
import InboxTab from './InboxTab'
import { RiDeleteBin5Line } from 'react-icons/ri'

function OutercomponentInbox() {
  return (
    <div className=' px-5 py-8 flex flex-col gap-2'>
        <div className='justify-end flex '>
         <div className='gap-1 button h-12 w-24 rounded-xl bg-blue flex justify-center items-center text-white font-semibold'>
            <RiDeleteBin5Line />
            <h1>Delete</h1>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
      <InboxTab />
      <InboxTab />
      </div>
    </div>
  )
}

export default OutercomponentInbox
