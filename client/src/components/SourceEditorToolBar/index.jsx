import React from 'react';
import DropDown from '../DropDown';

import { BsTrash } from 'react-icons/bs';
import { BiCopy } from 'react-icons/bi';

const index = ({ defaultLang, setLang, copySourceCode, deleteSourceCode }) => {
  return (
    <div className='custom-border custom-bg relative flex h-[50px] w-full items-center justify-between border-b-2 px-2'>
      <DropDown defaultLang={defaultLang} setLang={setLang} />

      <div className='flex items-center justify-center gap-x-4'>
        <button
          onClick={deleteSourceCode}
          className='cursor-pointer rounded-sm p-1 text-text_color_light duration-300 hover:bg-btn_hover_color_light dark:text-text_color_dark dark:hover:bg-btn_hover_color_dark'
        >
          <BsTrash />
        </button>
        <button
          onClick={copySourceCode}
          className='cursor-pointer rounded-sm  p-1 text-text_color_light duration-300 hover:bg-btn_hover_color_light dark:text-text_color_dark dark:hover:bg-btn_hover_color_dark'
        >
          <BiCopy />
        </button>
      </div>
    </div>
  );
};

export default index;
