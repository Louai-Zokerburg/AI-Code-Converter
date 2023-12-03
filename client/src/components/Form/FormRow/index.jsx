import { useState } from 'react';

import { BiHide, BiShow } from 'react-icons/bi';

const index = ({ isPass, label, type, placeholder, value, handleChange }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className='mb-4 w-full'>
      <h4 className='mb-2 text-sm font-semibold text-text_color_light'>
        {label}
      </h4>

      <div className='flex w-full items-center justify-between  overflow-hidden rounded-lg bg-input_bg_color px-4'>
        <input
          type={isPass ? (showContent ? 'text' : 'password') : type}
          className='w-full bg-transparent py-3  text-sm font-semibold text-text_color_light outline-none placeholder:text-gray-400'
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />

        {isPass && (
          <div
            onClick={() => setShowContent(!showContent)}
            className='cursor-pointer'
          >
            {showContent ? <BiShow /> : <BiHide />}
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
