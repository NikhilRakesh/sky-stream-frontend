import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import LivenowTab from './LivenowTab';

function Livenow({ color, name, time }) {
  const socialMedia = [
    { color: 'blue', name: 'Facebook', time: '00:00:00' },
    { color: 'purple', name: 'Instagram', time: '00:00:00' },
    { color: 'ligtblue', name: 'Twitter', time: '00:00:00' },
    { color: 'red', name: 'Youtube', time: '00:00:00' },
  ];

  return (
    <div className='bg-white rounded-xl w-[481px] h-72 relative'>
      <div className='Headding px-10 py-4 rounded-xl bg-light flex border-b-2 items-center justify-between h-fit'>
        <div className='flex gap-5 items-center'>
          <div className='circle rounded-full w-[30px] h-[30px] bg-red'></div>
          <h1 className='text-xl font-bold'>Live Now</h1>
        </div>
        <div>
          <MdKeyboardArrowRight className='text-2xl text-blue mt-[5px] cursor-pointer' />
        </div>
      </div>

      <div className='body pl-20 pr-28 py-5 overflow-y-scroll h-52 overflow-hidden cursor-move'>
        <div className='flex text-gray font-bold items-center justify-between'>
          <h1>Channel Name</h1>
          <h1>Duration</h1>
        </div>
        <div className=''>
          {socialMedia.map((item, index) => (
            <LivenowTab key={index} color={item.color} name={item.name} time={item.time} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Livenow;
