import React from 'react';

export default function MMapDot({ additionalClassNames }) {
  return (
    <div className={`flex justify-between items-center ${additionalClassNames}`}>
      <div className="w-2/5 h-1 bg-white"></div>
      <span
        className="
          flex
          justify-center
          items-center
          w-6
          h-6
          bg-cyan-500
          rounded-full
          ring-[20px] ring-white
        "
      >
      </span>
      <div className="w-2/5 h-1 bg-white"></div>
    </div>
  );
}