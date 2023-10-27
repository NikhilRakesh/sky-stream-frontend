import React, { useState } from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import StreamLink from './StreamLink'
function ChannelTab({ ...item }) {
  const [view, setView] = useState(false);

  return (
    <div className='w-full flex justify-between px-24 py-9 border-2 bg-white'>
      <div className='tab flex items-center font-semibold gap-64'>
        <div className='min-w-[40px] mx-w-[60px]'>
          <h1>{item.name}</h1>
        </div>
        <div className='min-w-[40px] mx-w-[60px]'>
          <h1 className='text-red'>Live</h1>
        </div>
        <div className='flex items-center justify-center gap-4 text-sm'>
          <h1 className='text-black text-base'>Streamkey : </h1> {item.streamKey}
        </div>
      </div>
      <div></div>
      <div className='cursor-pointer' onClick={() => {
        setView(!view);
        console.log("clicked");
        console.log(view);
      }}>
        <RiMore2Fill />
      </div>

      {view ? <StreamLink view={view} {...item} handleClose={() => setView(false)} /> : null}
    </div>
  );
}

export default ChannelTab;

