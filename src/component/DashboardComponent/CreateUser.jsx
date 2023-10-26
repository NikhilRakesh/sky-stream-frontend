import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import RadioButton from './RadioButton';

function CreateUser({value,handleClose}) {
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPasswod] = useState('')
    const [domain,setDomain] = useState('')
    const [color,setColor] = useState('')
    const [channellimit,setChannellimit] = useState('')
    const [date,setDate] = useState('')


    const handleSubmit =()=>{
        console.log(name,email,password,domain,color,channellimit,date)
    }


    const obj = [
        {name:"Create User"},
        {name:"Delete User"},
        {name:"Create Channel"},
        {name:"Delete Channel"}
    ]

    useEffect(()=>{
      
    })
   
    
    

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
     <div className=' justify-center py-6 flex gap-10'>
        <div className=' gap-1 flex flex-col '>
        <label>Name</label>
        <input type='text' className='rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className=' gap-1 flex flex-col '>
        <label>Email</label>
        <input type='email' className='rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className=' gap-1 flex flex-col '>
        <label>Password</label>
        <input type='password' className='rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' onChange={(e)=>setPasswod(e.target.value)}/>
        </div>    
            
     </div>

     <div className='flex gap-10 justify-center'>
     <div className=' gap-1 flex flex-col '>
        <label>Domain</label>
        <input type='text' className=' rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36'onChange={(e)=>setDomain(e.target.value)} />
        </div> 
        <div className='flex gap-7'>
        <div className=' gap-1 flex flex-col '>
        <label className=''>Color</label>
        <input type='color'  className='cursor-pointer rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-10' onChange={(e)=>setColor(e.target.value)}/>
        </div> 

        <div className=' gap-1 flex flex-col items-center'>
        <label>Channellimit</label>
        <input type='number' className=' rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-16'onChange={(e)=>setChannellimit(e.target.value)}/>
        </div> 
        <div className=' gap-1 flex flex-col '>
        <label>Expiry Date</label>
        <input type='date' className='cursor-pointer rounded-md outline px-2 flex items-center outline-gray outline-1 h-8 w-36' onChange={(e)=>setDate(e.target.value)}/>
        </div>
        </div>

     </div >
     <div className='pt-12 text-xl text-blue font-semibold'>
        <h1>Permissions</h1>
     </div>
     <div className='radio py-8 flex justify-between '>
       {
       obj.map((item,index)=><RadioButton key={index} {...item} />)
       }
        </div>

        <div className='px- py-3 justify-end flex'>
            <div className='cursor-pointer w-fit h-fit px-3 py-1 hover:scale-105 transform text-white bg-blue rounded-md' onClick={handleSubmit}>
           <h1>Create User</h1>
           </div>
        </div>

</div>

        
    </div>
    
  </div>
  )
}

export default CreateUser
