import React from 'react';

const index = ({ icon, handleClick }) => {
  return (
    <button onClick={handleClick} className='base-btn px-4 py-2 text-xl'>
      {icon}
    </button>
  );
};

export default index;
