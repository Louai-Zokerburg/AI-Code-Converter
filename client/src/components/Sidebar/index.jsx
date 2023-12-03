import Logo from './LogoSection';
import Conversions from './ConversionsSection';
import { useStore } from '../../context/store';

const index = () => {
  const isOpen = useStore((state) => state.isSidebarOpen);

  const colors = 'border-r-2 custom-border custom-bg';
  return (
    <aside
      className={`fixed z-10 ${
        isOpen ? 'left-0' : 'left-[-240px]'
      } top-0 flex h-screen w-[240px] flex-col lg:left-0 ${colors} duration-300`}
    >
      <Logo />
      <Conversions />
    </aside>
  );
};

export default index;
