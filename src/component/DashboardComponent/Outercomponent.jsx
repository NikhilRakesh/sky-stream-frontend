import React from 'react'
import Livenow from './Livenow'
import Meter from './Meter'
import Preview from './Preview'
import User from './User'

function OutercomponentDashboard() {
  return (
    <div className='bg-slate-200 h-full px-5 py-9 '>
      <div className='flex gap-5'>
        <Livenow /> 
        <Meter />
      </div>
        <div className='flex gap-5 py-5 '>
         <Preview />
         <User />
        </div>
        
    </div>
  )
}

export default OutercomponentDashboard
