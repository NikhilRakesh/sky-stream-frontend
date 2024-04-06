import { IoCloseCircleOutline } from 'react-icons/io5';
import { AiFillPlayCircle } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";
import flvjs from "flv.js";

// eslint-disable-next-line react/prop-types
function PreviewLive({ View, Live, handleClose, streamKey }) {

  const flvPlayerRef = useRef(null);
  const videoElementRef = useRef(null);


  useEffect(() => {
    if (flvjs.isSupported()) {
      const videoElement = videoElementRef.current;
      const flvPlayer = flvjs.createPlayer({
        type: "flv",
        url: `https://live.skystreamservers.com${streamKey}.flv`,
      });

      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
      flvPlayerRef.current = flvPlayer;
    }
  }, []);


  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[80%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] pb-3 h-fit rounded-md border-black border-[1px]  bg-white  ${Live ? "z-10" : "-z-10"
          }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] border-b-black">
          <div className="flex items-center gap-2">
            <AiFillPlayCircle className="text-blue text-2xl mt-[1px]" />
            <h1 className="font-semibold">Preview </h1>
          </div>
          <div
            className="hover:text-red text-3xl"
            onClick={() => {
              handleClose(false);
            }}
          >
            <IoCloseCircleOutline className="cursor-pointer" />
          </div>
        </div>
        <div className="bg-gray px-6  w-full h-72 flex items-center justify-center">
          <video
            className="w-full h-full"
            controls
            ref={videoElementRef}
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
}

export default PreviewLive