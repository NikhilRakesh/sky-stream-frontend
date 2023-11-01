/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { MdKeyboardArrowRight } from 'react-icons/md';
import LivenowTab from './LivenowTab';
import { Skeleton } from '@chakra-ui/react';

function Livenow({ color, name, time ,live,loading}) {


  return (
    <div className="bg-white rounded-xl w-[481px] h-72 relative ">
      <div className="Headding px-10 py-4 rounded-xl bg-light flex border-b-2 items-center justify-between h-fit">
        <div className="flex gap-5 items-center">
          <div className="circle rounded-full w-[30px] h-[30px] bg-red"></div>
          <h1 className="text-xl font-bold">Live Now</h1>
        </div>
        <div>
          <MdKeyboardArrowRight className="text-2xl text-blue mt-[5px] cursor-pointer" />
        </div>
      </div>

      <div className="body pl-20 pr-28 py-5 overflow-y-scroll h-52 overflow-hidden cursor-move">
        <div className="flex text-gray font-bold items-center justify-between">
          <h1>Channel Name</h1>
          <h1>Start Time</h1>
        </div>
        <div className="">
          {loading ? (
            <div className="h-16 w-full flex shadow-lg justify-between items-center px-10">
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </div>
          ) : (
            live?.map((item, index) => <LivenowTab key={index} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Livenow;
