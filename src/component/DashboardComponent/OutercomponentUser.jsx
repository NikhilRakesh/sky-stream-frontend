import React, { useEffect, useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import UserTab from './UserTab'
import axiosInstance from '../../../Axios'

function OutercomponentUser() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
    
  useEffect(()=>{

      axiosInstance.get('users').then((res)=>
       setData(res.data)).then(()=>setLoading(false))  
      .catch((err)=>console.log(err))
   
  },[])
  
  return (
    <div className='bg-gray relative'>
    <div className='flex justify-between items-center border-b-2 border-gray
     px-20 py-9 text-blue font-bold bg-white'>
        
      <div className="name flex items-center gap-2 min-w-[250px]">NAME
      <MdOutlineExpandMore/>
      </div>
      <div className="status flex items-center gap-2 ">STATUS
      <MdOutlineExpandMore />
      </div>
      <div className="expiryDate flex items-center gap-2">EXPIRY DATE
      <MdOutlineExpandMore/>
      </div>

      <div>
    
      </div>
     
    </div>
    <div>
      {
        loading ? <div className='flex justify-center items-center h-96'>Loading</div> : data?.user?.map((item,index)=><UserTab key={index} {...item}/>)
      }
   
    </div>
    </div>
    
  )
}
export default OutercomponentUser
