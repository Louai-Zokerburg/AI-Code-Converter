import { BsTrash } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';

import Button from '../../Buttons/Button';
import ToggleButton from '../../Buttons/ToggleButton';

const index = () => {
  return (
    <div className='w-full h-[calc(100%-60px-60%)] flex flex-col justify-start items-start list-none gap-y-3 px-4 pt-4 border-b-2 border-border_color_light dark:border-border_color_dark overflow-y-scroll custom-scrollbar'>
      <h4 className='text-gray-600 dark:text-gray-400 mb-2'>SETTINGS</h4>

      <Button
        type='normal'
        small={true}
        textWhite={true}
        size='full'
        text='Clear History'
        icon={<BsTrash />}
        handleClick={() => console.log(`Clear History`)}
      />

      <Button
        type='normal'
        small={true}
        textWhite={true}
        size='full'
        text='Dark Mode'
        extention={<ToggleButton checked={true} />}
        icon={<MdOutlineDarkMode />}
        handleClick={() => console.log(`Dark Mode`)}
      />

      <Button
        type='danger'
        small={true}
        textWhite={true}
        size='full'
        text='Logout'
        handleClick={() => console.log(`Clear history`)}
      />
    </div>
  );
};

export default index;
