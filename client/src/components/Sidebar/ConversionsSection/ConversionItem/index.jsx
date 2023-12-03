import { BsTrash } from 'react-icons/bs';
import { RiArrowRightSFill } from 'react-icons/ri';
import { TbTransform } from 'react-icons/tb';

import MicroButton from '../../../Buttons/MicroButton';

const index = ({ conversion, handleClick, handleDelete }) => {
  return (
    <li
      onClick={handleClick}
      className={`base-btn mb-3 flex w-full  items-center justify-between px-2 py-3 text-sm`}
    >
      <p className='flex items-center justify-start gap-x-1'>
        <TbTransform className='mr-2 opacity-70' />
        {conversion.sourceLang} <RiArrowRightSFill /> {conversion.targetLang}
      </p>
      <MicroButton
        icon={<BsTrash />}
        handleClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}
        hoverColor='border-danger_color'
      />
    </li>
  );
};

export default index;
