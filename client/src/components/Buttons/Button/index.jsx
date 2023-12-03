import React from 'react';

const Button = ({ handleClick, text, icon, extraElement = null }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className='base-btn flex w-full items-center justify-center px-4 py-3'
    >
      <div
        className={`custom-text flex w-full items-center justify-start gap-x-2 text-sm`}
      >
        <span className={`custom-text text-lg`}>{icon}</span>

        {text}
      </div>
      {extraElement}
    </button>
  );
};

export default Button;
