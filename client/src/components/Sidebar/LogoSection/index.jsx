import { IoIosClose } from 'react-icons/io';

import MicroButton from '../../Buttons/MicroButton';

import logoIcon from '../../../assets/svg/logo_icon.svg';
import { useStore } from '../../../context/store';

const index = () => {
  const isOpen = useStore((state) => state.isSidebarOpen);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  return (
    <div
      className={`custom-text custom-border flex h-[50px] w-full items-center justify-start border-b-2 px-4 py-3`}
    >
      <img src={logoIcon} alt='logo icon' className='mr-5 w-[20px]' />

      <h1 className='custom-text text-xl font-semibold'>CodeVerter</h1>

      {isOpen && (
        <MicroButton
          extraStyles='ml-auto text-2xl lg:hidden'
          icon={<IoIosClose />}
          handleClick={toggleSidebar}
          hoverColor='border-white'
        />
      )}
    </div>
  );
};

export default index;
