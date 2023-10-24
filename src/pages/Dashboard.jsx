import React from 'react'
import DashboardHeader from '../component/DashboardComponent/DashboardHeader'
import Sidebar from '../component/DashboardComponent/Sidebar'
import Livenow from '../component/DashboardComponent/Livenow'
import Right from '../component/DashboardComponent/Right'

function Dashboard() {
  return (
    <div className='flex flex-col lg:flex-row' >
     <div className='lg:w-[12rem] w-full'> <Sidebar />
     </div> 
     <div className='w-full pl-5'>
     <Right />
      </div>     
      
    </div>
  )
}

export default Dashboard