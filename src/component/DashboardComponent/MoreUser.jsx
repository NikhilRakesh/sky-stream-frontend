import React, { useState } from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { Switch } from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

function MoreUser({show,handleView,view}) {
   
  return (
    <div>
    <div className={`flex px-5 py-10 justify-between ${show ? 'z-0': '-z-10'} border-b-2`}>
      <div className="cursor-pointer preview flex flex-col items-center gap-2">
        <label>Preview</label>
        <div className='text-xl text-blue'>  <AiOutlinePlayCircle /></div>
       
      </div>
      <div className="createUser flex flex-col items-center gap-2 cursor-pointer">
       <label htmlFor='createUser'>Create User</label>
       <Switch id='createUser' />
      </div>
      <div className="DeleteUser flex flex-col items-center gap-2 cursor-pointer">
      <label htmlFor='DeleteUser'>Delete User</label>
       <Switch id='DeleteUser' />
      </div>
      <div className="createChanel flex flex-col items-center gap-2 cursor-pointer">
      <label htmlFor='createChannel'>Create Channel</label>
       <Switch id='createChannel' />
      </div>
      <div className="DeleteChanel flex flex-col items-center gap-2 cursor-pointer">
      <label htmlFor='Delete Channel'>Delete Channel</label>
       <Switch id='Delete Channel' />
      </div>
      <div className="ChanelLimit flex flex-col items-center gap-2 cursor-pointer">
        <h1>Channel Limit</h1>
        <NumberInput size='sm'  maxW={24}  min={0}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
      </div>
      <div className="SendMessage flex flex-col items-center gap-2 cursor-pointer ">
        <label>Send Message</label>
        <div className='text-2xl' onClick={()=>{handleView(!view) 
        console.log("button");}}><HiOutlineMail /></div>
       
      </div>
      
    </div>
    
   
    </div>
   
  )
}

export default MoreUser
