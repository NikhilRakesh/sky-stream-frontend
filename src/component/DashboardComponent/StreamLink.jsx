import React, {  useEffect, useRef,useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FiCopy } from 'react-icons/fi'; 

function StreamLink({handleClose,view,...item}) {
    const [copiedStates, setCopiedStates] = useState(Array(5).fill(false));
    const [copied,setCopied] = useState(false)

    const ref = useRef()

  const copyToClipboard = (value,tabIndex) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        const updatedCopiedStates = [...copiedStates];
        updatedCopiedStates[tabIndex] = true;
        setCopiedStates(updatedCopiedStates);
        setCopied(true)
        setTimeout(() =>{ 
            updatedCopiedStates[tabIndex] = false
            setCopied(false)
        },  3000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };


  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[80%]  justify-center flex items-center z-10 ">
    <div
      className={`w-[650px] pb-3 h-fit rounded-lg border-gray border-[1px]  bg-slate-200  ${
        view ? "z-10" : "-z-10"
      }`}
    >
      <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] ">
        <div className='flex items-center gap-2'>
        <h1 className=" text-black text-lg font-semibold">Stream Links</h1>
        </div>
        <div
          className="hover:text-red text-3xl  text-black"
          onClick={() => {
            handleClose(false);
            console.log("button");
          }}
        >
          <IoCloseCircleOutline className='cursor-pointer'/>
        </div>
      </div>
      <div className='w-full h-full py-10 px-10 flex flex-col gap-10'>
      <div className="flex flex-col gap-4">
      {[
        `rtmp://skystreaming.com${item.streamKey}`,
        `http://skystreaming.com${item.streamKey}`,
        `ws://skystreaming.com${item.streamKey}.flv`,
        `http://skystreaming.com${item.streamKey}/index.m3u8`,
        `http://skystreaming.com${item.streamKey}/index.mpd`,
      ].map((value, index) => (
        <div key={index} className="relative">
          <input
            type="text"
            className="outline w-full outline-1 outline-gray py-2 px-4 pr-10"
            value={value}
            ref={ref[index]}
            readOnly
            onClick={() => copyToClipboard(value,index)}
          />
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
            onClick={() => copyToClipboard(value,index)}
          >
            <FiCopy />
          </button>
          {copiedStates[index] && copied &&  (
            <div className="text-green-500 text-sm mt-1">Copied to clipboard!</div>
          )}
        </div>
      ))}
    </div>
      <div className='flex justify-between'>
      <input type='text' name='push' className='w-[25rem] py-1 px-2 rounded-md' />
      <button className='px-8 py-2 text-white bg-blue w-fit rounded-lg'>Push</button></div>
      </div>
     
     
        
       
     
      
    </div>
  </div>
  )
}

export default StreamLink
