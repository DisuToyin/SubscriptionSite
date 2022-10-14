import React from "react";

export default function DarkOverlay({ children, open }) {
  return (
    <div className='darkoverlay h-full w-full bg-gray-600 bg-opacity-50 fixed top-0 right-0 left-0 bottom-0 z-50 md:inset-0 h-modal md:h-full flex items-center justify-center'>
      <div
        className={`w-[780px] bg-white p-[32px] ${
          open ? `ml-[17rem]` : `ml-[4rem]`
        } `}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
