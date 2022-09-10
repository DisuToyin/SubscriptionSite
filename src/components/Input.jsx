import React from "react";

export default function Input({
  label,
  inputType,
  placeHolder,
  extraStyles,
  isRequired = false,
}) {
  return (
    <div className="mb-2">
      <label className="block mb-2 text-[16px] font-normal text-[#474747] ">
        {label}
      </label>
      <input
        type={inputType}
        className={`rounded-[2px] pl-[20px] pr-[20px] pt-[16px] mb-[2rem] pb-[16px] text-base focus:outline-0   border-solid border-[1px] text-gray-900  focus:ring-[#E9724C] focus:border-[#E9724C] block w-full  p-2.5 ${extraStyles}`}
        placeholder={placeHolder}
        required={isRequired}
      />
    </div>
  );
}
