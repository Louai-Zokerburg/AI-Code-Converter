import { useEffect } from 'react';

import ConversionItem from './ConversionItem';
import LoadingSpinner from '../../LoadingSppiner';

import { useStore } from '../../../context/store';

const index = () => {
  const getConversions = useStore((state) => state.getConversions);
  const conversions = useStore((state) => state.conversions);
  const deleteConversion = useStore((state) => state.deleteConversion);
  const setCurrentConversion = useStore((state) => state.setCurrentConversion);

  useEffect(() => {
    getConversions();
  }, []);

  return (
    <ul className='custom-scrollbar custom-border flex h-[calc(100vh-50px)] w-full list-none flex-col items-start justify-start  overflow-y-scroll px-4 pt-4'>
      <h4 className='mb-3 text-sm text-gray-600 dark:text-gray-400'>
        CONVERSIONS
      </h4>
      {conversions.data !== null ? (
        conversions.data.map((conversion) => (
          <ConversionItem
            key={conversion._id}
            handleDelete={() => deleteConversion(conversion._id)}
            handleClick={() => setCurrentConversion(conversion._id)}
            conversion={conversion}
          />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </ul>
  );
};

export default index;
