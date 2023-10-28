import  { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import PreviewLive from './PreviewLive'

function LiveTabs({item}) {
  const [preview,setPreview] = useState(false)

  return (
    <div className="">
      <div className="flex justify-between items-center w-full h-10 border-b-4 py-10 bg-white  ">
        <div className="name"></div>
        <div>12:14:30</div>
        <div className="text-red">Live</div>
        <div
          className="flex items-center gap-2"
          onClick={() => setPreview(!preview)}
        >
          <h1>Preview</h1>
          <AiFillPlayCircle className="text-blue text-xl" />
        </div>
      </div>
      {preview ? (
        <div className="flex items-center just">
          <PreviewLive View={preview} handleClose={setPreview} />
        </div>
      ) : null}
    </div>
  );
}

export default LiveTabs
