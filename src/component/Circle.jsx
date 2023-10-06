import React from 'react'

function Circle({component, title, des}) {
  return (
    <div className='text-white py-10 flex flex-col justify-center items-center'>
    <div className='flex  box-gradiant  md:w-28 md:h-28 rounded-full items-center justify-center'>
      <div className='flex'>{component}</div>
    </div>
    <h3 className='text-[24px] mt-1 '>{title}</h3>
    <p className='text-[16px] text-gray'>{des}</p>
    </div>
  )
}

export default Circle
