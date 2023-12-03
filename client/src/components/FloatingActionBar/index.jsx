import React from 'react';
import IconButton from '../Buttons/IconButton';
import TextButton from '../Buttons/TextButton';

import { HiPlus } from 'react-icons/hi';

import { useStore } from '../../context/store';

const index = () => {
  const createNewConversion = useStore((state) => state.createNewConversion);
  const convert = useStore((state) => state.convert);

  return (
    <div className='custom-bg custom-border absolute bottom-[15%] left-1/2 z-50 flex translate-x-[-50%] items-center justify-center gap-x-2 rounded-xl border-2 p-2'>
      <TextButton
        isFullWith={false}
        handleClick={convert}
        text='Cenvert Code                    '
      />

      <IconButton icon={<HiPlus />} handleClick={createNewConversion} />
    </div>
  );
};

export default index;
