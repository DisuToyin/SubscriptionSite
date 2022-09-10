import React from "react";

export default function OnboardModal({ title, children }) {
  return (
    <div className="bg-white mr-[auto] w-[70%]  ml-[auto] p-[24px]">
      <h3 className="font-bold text-[24px] mb-[24px]">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
