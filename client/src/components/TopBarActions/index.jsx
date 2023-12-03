import IconButton from '../Buttons/IconButton';

import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdLogout,
} from 'react-icons/md';
import { HiOutlineCode } from 'react-icons/hi';

import { useStore } from '../../context/store';
import { projectGithubRepoLink } from '../../constants';

const index = () => {
  const toggleTheme = useStore((state) => state.toggleTheme);
  const theme = useStore((state) => state.theme);
  const auth = useStore((state) => state.auth);
  const logout = useStore((state) => state.logoutUser);

  return (
    <div className='ml-auto flex items-center justify-center gap-x-2'>
      <IconButton
        icon={<HiOutlineCode />}
        handleClick={() => window.open(projectGithubRepoLink, '_blank')}
      />
      <IconButton
        icon={theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        handleClick={toggleTheme}
      />
      <IconButton icon={<MdLogout />} handleClick={logout} />
      <div className='mr-2 flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-primary_color_hover text-xl font-bold text-black'>
        <p>{auth.user.username[0].toUpperCase()}</p>
      </div>
    </div>
  );
};

export default index;
