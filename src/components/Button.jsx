import React from "react";
import addIcon from "../assets/plus.svg";
export default function Button({
  button_text,
  handleClick,
  other_styles = "bg-black text-white pt-[16px] pb-[16px]",
  button_type = "submit",
  disabled,
  icon = false,
  imageSrc = addIcon,
}) {
  return (
    <>
      {icon === false && (
        <button
          disabled={disabled}
          type={button_type}
          onClick={handleClick}
          className={`pl-[20px] pr-[20px]  text-base  mt-[3%] w-[100%]  focus:outline-none  font-medium px-5 py-2.5 text-center  rounded-[2px] ${other_styles}`}
        >
          {button_text}
        </button>
      )}
      {icon === true && (
        <button
          disabled={disabled}
          type={button_type}
          onClick={handleClick}
          className={`pl-[20px]  pr-[20px] flex gap-2 text-base  mt-[3%] w-[100%]  focus:outline-none  font-medium px-5 py-2.5 text-center  rounded-[2px] ${other_styles}`}
        >
          <img className="self-center" src={imageSrc} alt={"button icon"} />{" "}
          <span>{button_text}</span>
        </button>
      )}
    </>
  );
}
