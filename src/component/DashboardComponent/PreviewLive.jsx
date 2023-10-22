import React from 'react'
import Live from '../../icons/live';

function PreviewLive({Live,handleClose}) {
  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] pb-3 h-fit rounded-md border-black border-[1px]  bg-white  ${
          Live ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] border-b-black">
          <h1 className="font-semibold">Send Message</h1>
          <div
            className="hover:text-red text-xl"
            onClick={() => {
              handleClose(false);
              console.log("button");
            }}
          >
            <IoCloseCircleOutline />
          </div>
        </div>
       
          
         
       
        
      </div>
    </div>
  )
}

export default PreviewLive
