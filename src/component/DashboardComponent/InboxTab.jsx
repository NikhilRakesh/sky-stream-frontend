import React from 'react'

function InboxTab() {

  return (
    <div className='border-b-2 border border-b-gray shadow-lg  flex w-full justify-between bg-white rounded-lg px-10 h-16 items-center'>
      <div className='name flex gap-3 items-center font-semibold'> 
        <input type='checkbox' className='w-5 h-5' />
         <h1>Mukesh</h1>
      </div>
      <div className='email text-red'> 
         <h1>sample@gmail.com</h1>
      </div>
      <div className='phone '>
        <h1>+91 9999999999</h1>
      </div>
      <div  className='subject font-bold'>
         <h1>Subscription Renewal</h1>
      </div>
      <div className='message '>
         <p> Hey mukesh, have you lorem</p>
      </div>
    </div>
  )
}

export default InboxTab
