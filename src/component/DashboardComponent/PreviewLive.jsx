import React, { useEffect } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { AiFillPlayCircle } from 'react-icons/ai'


function PreviewLive({Live,handleClose}) {
  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[80%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] pb-3 h-fit rounded-md border-black border-[1px]  bg-white  ${
          Live ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] border-b-black">
          <div className='flex items-center gap-2'>
          <AiFillPlayCircle className='text-blue text-2xl mt-[1px]' />
          <h1 className="font-semibold">Preview</h1>
          </div>
          <div
            className="hover:text-red text-3xl"
            onClick={() => {
              handleClose(false);
              console.log("button");
            }}
          >
            <IoCloseCircleOutline className='cursor-pointer'/>
          </div>
        </div>
        <div className='bg-gray px-6  w-full h-72 flex items-center justify-center'>
        <AiFillPlayCircle  className='text-blue text-7xl'/>
        </div>
       
          
         
       
        
      </div>
    </div>
  )
}

export default PreviewLive
