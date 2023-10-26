import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Checkbox } from '@chakra-ui/react'
import axiosInstance from '../../../Axios';
import state from '../../store';


function CreateUser({value,handleClose}) {

  
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    domain: "",
    color: "",
    limit:"",
    expiryDate: "",
    addUser: true,
    deleteUser: false,
    createChannel: false,
    deleteChannel: false,
  });

  const handleChange = (e) => {
    const { name, value,type,checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: newValue })
    console.log(formData.limit);

  }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("Clicked :",formData);
        axiosInstance.post('/users/6537e7fc196d01d19ed28e53/create-user/',formData).then((res)=>{
          state.refreshData= res.data.data
          console.log("response :",res.data.data);
        }).catch((err)=>console.log("error :",err))
    }

  
    

  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
    <div
      className={`w-[45rem] pb-3 h-[30rem] rounded-3xl  border-2 border-gray bg-slate-100  ${
        value ? "z-10" : "-z-10"
      }`}>
    
      <div className="h-[60px] flex justify-end items-center w-full px-10 border-b-[1px]">
        <div
          className="hover:text-red text-3xl"
          onClick={() => {
            handleClose(false);
            console.log("button");
          }}>
        
          <IoCloseCircleOutline className='cursor-pointer'/>
        </div>
      </div>
<div className='justify-center flex w-full px-16 flex-col'>
  <form onChange={handleChange}>
     <div className=' justify-center py-6 flex gap-10'>
        <div className=' gap-1 flex flex-col '>
        <label htmlFor='name'>Name</label>
        <input type='text'   id='name' name='name' className='rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' />
        </div>
        <div className=' gap-1 flex flex-col '>
        <label>Email</label>
        <input type='email' name='email' className='rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' />
        </div>
        <div className=' gap-1 flex flex-col '>
        <label>Password</label>
        <input type='password' name='password' className='rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' />
        </div>    
            
     </div>

     <div className='flex gap-10 justify-center'>
     <div className=' gap-1 flex flex-col '>
        <label>Domain</label>
        <input type='text' name='domain' className=' rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' />
        </div> 
        <div className='flex gap-7'>
        <div className=' gap-1 flex flex-col '>
        <label className=''>Color</label>
        <input type='color' name='color'  className='cursor-pointer rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-10' />
        </div> 

        <div className=' gap-1 flex flex-col items-center'>
        <label>Channellimit</label>
        <input type='number' name='limit' className=' rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-16'/>
        </div> 
        <div className=' gap-1 flex flex-col '>
        <label>Expiry Date</label>
        <input type='date' name='expiryDate' className='cursor-pointer rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' />
        </div>
        </div>

     </div >
     
     <div className='pt-12 text-xl text-blue font-semibold'>
        <h1>Permissions</h1>
     </div>

     
<div className='flex justify-between items-center py-10'>
<div className='flex  items-center justify-center gap-2'>
  <input type='checkbox' name='addUser' id='addUser' className='outline outline-[1px] w-3 h-3' />
  <label htmlFor='' >Create User</label>
</div>
<div className='flex  items-center justify-center gap-2'>
  <input type='checkbox' name='deleteUser' id='deleteUser' className='outline outline-[1px] w-3 h-3' />
  <label htmlFor='' >Delete User</label>
</div>
<div className='flex  items-center justify-center gap-2'>
  <input type='checkbox' name='createChannel' id='createChannel' className='outline outline-[1px] w-3 h-3' />
  <label htmlFor='' >Create Channel</label>
</div>
<div className='flex  items-center justify-center gap-2'>
  <input type='checkbox' name='deleteChannel' id='deleteChannel' className='outline outline-[1px] w-3 h-3'  />
  <label htmlFor='' >Delete Channel</label>
</div>
</div>
    
        <div className='px- py-3 justify-end flex'>
            <div className='cursor-pointer w-fit h-fit px-3 py-1 hover:scale-105 transform text-white bg-blue rounded-md' onClick={handleSubmit}>
           <h1>Create User</h1>
           </div>
        </div>
        </form>
        
</div>

        
    </div>
    
  </div>
  )
}

export default CreateUser
