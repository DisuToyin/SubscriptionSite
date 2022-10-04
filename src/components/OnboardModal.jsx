import React from "react";

export default function OnboardModal({
  title,
  children,
  sub_title = "",
  title_styles = "",
  shadowStyle = "",
}) {
  return (
    <div
      className={`bg-white mr-[auto] w-[70%] h-[500px] overflow-y-scroll md:w-[300px] ${shadowStyle} ml-[auto] p-[24px]`}
    >
      <h3 className={`font-bold text-[24px] ${title_styles} `}>{title}</h3>
      <span className="text-[#5E5E5E] text-[14px]">{sub_title}</span>
      <div className="mt-[24px]">{children}</div>
    </div>
  );
}
