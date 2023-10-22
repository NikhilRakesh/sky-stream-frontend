import React from 'react'
import DashboardHeader from './DashboardHeader'
import OutercomponentDashboard from './Outercomponent'
import OutercomponentInbox from './OutercomponentInbox'
import OutercomponentUser from './OutercomponentUser'
import OutercomponentLive from './OutercomponentLive'
import { Route, Routes } from 'react-router-dom'
import OutercomponentChannel from './OutercomponentChannel'

function Right() {
  return (
    <div className='w-[100%] min-h-screen '>
      <DashboardHeader />
    <Routes>
      <Route path='/dashboard' element={<OutercomponentDashboard />} />
      <Route path='/inbox' element={<OutercomponentInbox /> } />
      <Route path='/user' element={<OutercomponentUser />} />
      <Route path='/live' element={<OutercomponentLive />} />
      <Route path='/channel' element={<OutercomponentChannel />}/>
    </Routes>
      </div>
   
  )
}

export default Right
