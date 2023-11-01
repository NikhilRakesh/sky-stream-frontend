import React from 'react'

import { MdDelete } from 'react-icons/md'
import axiosInstance from '../../../Axios'
import { useSnapshot } from 'valtio'
import state from '../../store'

const DomainTab = ({...item}) => {
  const snap = useSnapshot(state);

  const handleDelete = (e)=>{
    e.preventDefault()
    
    axiosInstance.get(`/domain/delete/${item._id}`).then((res)=>{
      console.log("Response: ",res.data);
      state.refreshData = res.data
    }).catch((err)=>{
      console.log("Error: ",err);
    })
  }
   

  return (
    <div className='py-6 px-24 bg-light shadow-md border-b-2'>
    <div className='flex w-[600px] justify-between'>
    <div className='font-semibold'>
       {item.domain}
     </div>
     <div onClick={handleDelete} className='bg-red flex items-center cursor-pointer text-white w-8 justify-center h-9 rounded-md hover:scale-95  hover:text-black'>
     <MdDelete />

     </div>
    </div>
   </div>
  )
}

export default DomainTab
