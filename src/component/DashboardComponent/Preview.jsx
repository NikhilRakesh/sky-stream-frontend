import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

function Preview() {
  return (
    <div className='bg-white w-[790px] h-72 rounded-xl '>
      <div className='w-full h-16 border-b-[1px] shadow-md flex items-center px-10 gap-3'>
      <AiFillPlayCircle className='text-blue text-2xl mt-[1px]' />
          <h1 className="font-semibold">Preview</h1>
      </div>
      
    </div>
  )
}   

export default Preview
