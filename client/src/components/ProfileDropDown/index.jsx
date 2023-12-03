import React, { useState } from 'react';

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { HiOutlineCode } from 'react-icons/hi';
import { BsTrash } from 'react-icons/bs';

import TextButton from '../Buttons/TextButton';
import Button from '../Buttons/Button';

import { useStore } from '../../context/store';

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = useStore((state) => state.toggleTheme);
  const theme = useStore((state) => state.theme);
  const auth = useStore((state) => state.auth);
  const logout = useStore((state) => state.logoutUser);

  return (
    <div className='relative ml-auto'>
      <div
        onClick={() => setIsOpen((current) => !current)}
        className='h-fll base-btn flex w-full cursor-pointer items-center justify-start pr-4'
      >
        <div className='mr-2 flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-red-500 text-xl font-bold text-white'>
          <p>{auth.user.username[0].toUpperCase()}</p>
        </div>

        <p className='custom-text text-sm'>{auth.user.username}</p>
      </div>

      {isOpen && (
        <ul className='custom-bg custom-border absolute right-0 z-20 mt-3 flex w-[16vw] min-w-[200px] list-none flex-col items-start justify-start gap-y-3 rounded-lg border-2 p-3'>
          <h4 className='my-1 text-sm text-gray-600 dark:text-gray-400'>
            SETTINGS
          </h4>
          <Button
            handleClick={() => console.log('clear history button')}
            icon={<BsTrash />}
            text='Clear History'
          />
          <Button
            handleClick={() => console.log('clear history button')}
            icon={<HiOutlineCode />}
            text='Source Code'
          />
          <Button
            handleClick={toggleTheme}
            icon={
              theme === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />
            }
            text={theme === 'dark' ? 'Toggle Dark' : 'Toggle Light'}
          />
          <TextButton danger={true} text='Logout' handleClick={logout} />
        </ul>
      )}
    </div>
  );
};

export default index;
