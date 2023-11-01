import Sidebar from '../component/DashboardComponent/Sidebar'
import Right from '../component/DashboardComponent/Right'
import { useEffect } from 'react'
import axiosInstance from '../../Axios'

function Dashboard() {

  useEffect(() => {
    axiosInstance
      .post("/auth/refresh-token", {}, { withCredentials: true })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

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
