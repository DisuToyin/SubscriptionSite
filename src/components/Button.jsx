import React from "react";

export default function Button({
  button_text,
  other_styles = "bg-[black] text-white",
}) {
  return (
    <button
      type="submit"
      className={`pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base  mt-[3%] w-[100%]  focus:outline-none  font-medium px-5 py-2.5 text-center  rounded-[2px] ${other_styles}`}
    >
      {button_text}
    </button>
  );
}
