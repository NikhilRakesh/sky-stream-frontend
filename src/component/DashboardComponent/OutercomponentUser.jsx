import React, { useEffect, useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import UserTab from './UserTab'
import axiosInstance from '../../../Axios'
import SkelitonList from './SkelitonList';
import CreateUser from './CreateUser';
import { snapshot, useSnapshot } from 'valtio';
import state from '../../store';



function OutercomponentUser() {
  
  const snap = useSnapshot(state)


  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [createuser,setCreateuser] = useState(false)
   
  

  useEffect(()=>{

      axiosInstance.get('/users').then((res)=>
       setData(res.data)).then(()=>setLoading(false))  
      .catch((err)=>console.log(err))
   
  },[snap.refreshData])
  
  return (
    <div className='bg-gray relative'>
    <div className='flex justify-between items-center border-b-2 border-gray
     px-20 py-9 text-blue font-bold bg-white'>
        
      <div className="name flex items-center ">NAME
      <MdOutlineExpandMore/>
      </div>
      <div className="status flex items-center  ">STATUS
      <MdOutlineExpandMore />
      </div>
      <div className="expiryDate flex items-center ">CREATED DATE
      <MdOutlineExpandMore/>
      </div>

      <div className="expiryDate flex items-center ">EXPIRY DATE
      <MdOutlineExpandMore/>
      </div>
      <div className=' cursor-pointer hover:scale-105 transform ease-in-out w-fit h-fit bg-blue px-2 py-1 rounded-lg text-white' onClick={()=>{
        setCreateuser(!createuser)
      }}>
         Create User 
      </div>
     
    </div>
    <div>
      {
        createuser ? (<CreateUser value={createuser} handleClose ={setCreateuser}/>) : null
      

      }
    </div>
    <div>
      {
        loading ? ( <div><SkelitonList />
        <SkelitonList /><SkelitonList /><SkelitonList /><SkelitonList /><SkelitonList /> </div>
      ) : data?.user?.map((item,index)=><UserTab key={index} {...item}/>)
      }
   
    </div>
    </div>
    
  )
}
export default OutercomponentUser
