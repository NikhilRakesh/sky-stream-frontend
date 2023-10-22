import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import UserTab from './UserTab'

function OutercomponentUser() {
  return (
    <div className='bg-gray relative'>
    <div className='flex justify-between items-center border-b-2 border-gray
     px-20 py-9 text-blue font-bold bg-white'>
        
      <div className="name flex items-center gap-2">NAME
      <MdOutlineExpandMore/>
      </div>
      <div className="status flex items-center gap-2">STATUS
      <MdOutlineExpandMore />
      </div>
      <div className="expiryDate flex items-center gap-2">EXPIRY DATE
      <MdOutlineExpandMore/>
      </div>

      <div>
    
      </div>
     
    </div>
    <div>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
        <UserTab/>
    </div>
    </div>
    
  )
}
export default OutercomponentUser
