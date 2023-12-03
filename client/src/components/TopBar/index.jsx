import IconButton from '../Buttons/IconButton';
import TextButton from '../Buttons/TextButton';
import TopBarActions from '../TopBarActions';

import { BsTrash, BsMagic } from 'react-icons/bs';
import {
  HiOutlineSwitchHorizontal,
  HiOutlineMenuAlt1,
  HiPlus,
} from 'react-icons/hi';

import { useStore } from '../../context/store';

const index = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const createNewConversion = useStore((state) => state.createNewConversion);
  const convert = useStore((state) => state.convert);

  return (
    <div className='custom-border custom-bg flex h-[50px] w-full items-center justify-start  gap-x-2 border-b-2 px-4 py-2'>
      <span className='flex lg:hidden'>
        <IconButton icon={<HiOutlineMenuAlt1 />} handleClick={toggleSidebar} />
      </span>
      <TextButton
        isFullWith={false}
        handleClick={convert}
        text='Cenvert Code'
      />
      {/* <IconButton
        icon={<BsMagic />}
        handleClick={() => console.log('populate button')}
      /> */}
      {/* <IconButton
        icon={<BsTrash />}
        handleClick={() => console.log('delete button')}
      /> */}
      {/* <IconButton
        icon={<HiOutlineSwitchHorizontal />}
        handleClick={() => console.log('switch button')}
      /> */}
      <IconButton icon={<HiPlus />} handleClick={createNewConversion} />

      {/* <ProfileDropDown /> */}

      <TopBarActions />
    </div>
  );
};

export default index;
