import React from 'react';
import { AiFillMessage } from 'react-icons/ai';

const Bot = () => {
  return (
    <div
      className='cursor-pointer fixed right-4 bottom-5 z-[999]
     bg-cyan-600 text-white text-4xl h-16 w-16 flex items-center 
     justify-center rounded-full animate-bounce'
    >
      <AiFillMessage />
    </div>
  );
};

export default Bot;
