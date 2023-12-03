import React from 'react';

const index = ({ icon, hoverColor, handleClick, extraStyles = '' }) => {
  return (
    <button
      className={`rounded-sm border border-transparent p-[4px] duration-300 hover:${hoverColor} ${extraStyles}`}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default index;
