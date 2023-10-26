import React, { useState } from 'react'
import Contact from './Contact'

function Button() {
  const [contact,setContact] = useState(false)
  return (
    <div className=''>
        <button className='bg-[#CF088C] text-white px-6 lg:w-56 py-4 rounded-full text-sm' onClick={()=>setContact(true)} >Get 3 days free trial now.</button>
      {
        contact ? <div>
          <Contact view={contact} handleClose={()=>setContact(false)} />
        </div> : null
      }
    </div>
  )
}

export default Button
