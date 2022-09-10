import React from "react";

export default function RectangularCard({ src, title, desc }) {
  return (
    <div className="flex gap-5 cursor-pointer p-2 hover:bg-[#E9724C] hover:text-white">
      <img src={src} alt="logo" />
      <div>
        <h3 className="text-[16px] font-bold">{title}</h3>
        <span className="text-[14px] text-[#777777]">{desc}</span>
      </div>
    </div>
  );
}
