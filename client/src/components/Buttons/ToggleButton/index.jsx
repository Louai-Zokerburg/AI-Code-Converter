import { useState } from 'react';

function index({ checked }) {
  return (
    <label className='flex items-center cursor-pointer'>
      <div className='relative'>
        <div className='w-10 flex items-center h-4 bg-gray-400 rounded-full'>
          <div
            className={`absolute w-6 h-6 transition duration-300 ease-in-out rounded-full transform ${
              checked ? 'translate-x-full bg-green-500' : 'bg-gray-200'
            }`}
          ></div>
        </div>
      </div>
    </label>
  );
}

export default index;
