import SideBar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SourceLangEditor from '../../components/SourceLangEditor';
import TargetLangEditor from '../../components/TargetLangEditor';

import { useEffect } from 'react';

import { useStore } from '../../context/store';

const index = () => {
  const currentConversion = useStore((state) => state.currentConversion);
  const getCurrentConversion = useStore((state) => state.getCurrentConversion);

  useEffect(() => {
    getCurrentConversion();
  }, []);

  return (
    <main className='relative flex min-h-screen w-full items-stretch justify-start bg-main_color_light dark:bg-main_color_dark'>
      <SideBar />
      <div
        className={`fixed left-0 h-screen w-full flex-col items-start justify-start bg-gray-800 lg:left-[240px] lg:w-[calc(100vw-240px)] `}
      >
        <TopBar />

        <div className='relative flex min-h-fit w-full flex-col items-start justify-start lg:min-h-fit lg:flex-row lg:overflow-hidden'>
          {/* <FloatingActionBar /> */}
          <SourceLangEditor
            sourceCode={currentConversion.conversion?.sourceCode}
            sourceLang={currentConversion.conversion?.sourceLang}
            loading={currentConversion.loading}
            error={currentConversion.error}
          />
          <span className='hidden h-[calc(100vh-50px)] w-[12px] bg-border_color_light dark:bg-border_color_dark lg:flex'></span>
          <TargetLangEditor
            loading={currentConversion.loading}
            targetCode={currentConversion.conversion?.targetCode}
            targetLang={currentConversion.conversion?.targetLang}
            error={currentConversion.error}
          />
        </div>
      </div>
    </main>
  );
};

export default index;
