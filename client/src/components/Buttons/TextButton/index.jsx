import React from 'react';

const index = ({ danger = false, text, handleClick, isFullWith = true }) => {
  const width = isFullWith ? 'w-full' : 'w-fit';
  const color = danger
    ? 'bg-danger_color hover:bg-danger_color_hover'
    : 'bg-primary_color hover:bg-primary_color_hover';
  return (
    <button
      onClick={handleClick}
      className={`${width} duration-300 ${color} rounded-lg px-4 py-2 text-sm font-semibold`}
    >
      {text}
    </button>
  );
};

export default index;
