import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import axiosInstance from '../../../Axios';
import { useSnapshot } from 'valtio';
import state from '../../store';

const CreateChannel = ({value,handleClose}) => {
    const snap = useSnapshot(state)
    const [formData, setFormData] = useState({
        name: "",
        domain: "",
        streamKey: "",
    })

   
    const handleChange =(e)=>{
        const {id,value} = e.target
        setFormData({...formData,[id]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        axiosInstance.post(`/channel/${state.userData._id}`,formData).then((res)=>{
      
         state.refreshData = !snap.refreshData
            handleClose(false);
        
        }).catch((err)=>{console.log("Erorr :",err)
        
      })
    }

  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
    <div
      className={`w-[650px] pb-3 h-fit rounded-md border-gray border-[1px]  bg-slate-100  ${
        value ? "z-10" : "-z-10"
      }`}
    >
      <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] ">
        <div className='flex items-center gap-2'>
        <h1 className=" text-black text-lg font-semibold">Create Channel</h1>
        </div>
        <div
          className="hover:text-red text-3xl text-black"
          onClick={() => {
            handleClose(false);
          }}
        >
          <IoCloseCircleOutline className='cursor-pointer'/>
        </div>
      </div>
      <div className='px-10 py-6'>
        <form onChange={handleChange} onSubmit={handleSubmit} >
      <div className='  rounded-lg text-black flex justify-between'>
        <div className='flex flex-col gap-3 '>
            <label htmlFor='name' className='text-sm'  >Channel Name</label>
            <input id='name' type='text' className='outline outline-gray rounded-lg outline-[1px] px-1 py-2 w-36 '/>
        </div>
        <div className='flex flex-col gap-3 '>
            <label htmlFor='domain' className='text-sm'>Domain</label>
            <select id='domain' type='text' className='outline outline-gray rounded-lg outline-[1px] px-1 py-2 w-36 ' >
              <option id='domain' defaultValue="skystream.com">skystream.com</option>
            </select>
        </div>
        <div className='flex flex-col gap-3 '>
            <label htmlFor='streamKey' className='text-sm'>Stream Key</label>
            <input id='streamKey' type='text' className='outline outline-gray rounded-lg outline-[1px] px-1 py-2 w-36 '/>
        </div>
      </div>
      <div className='pt-8 flex justify-end'>
        <button type='submit' className='hover:scale-105 transition-all bg-blue rounded-lg text-white px-3 py-2'>Create Channel</button>
        </div>
        </form>
      </div>
     
        
       
     
      
    </div>
  </div>
  )
}

export default CreateChannel
