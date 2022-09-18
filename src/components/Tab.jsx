import React from "react";

export default function Tab() {
  return (
    <div className="mt-[16px] ml-[2rem]  text-[14px] text-[#777777] font-bold flex gap-8">
      <div className="flex gap-8">
        <p className="hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
          All
        </p>
        <p className="hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
          Ongoing
        </p>
        <p className="hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
          Completed
        </p>
        <p className=" hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
          Drafts
        </p>
      </div>
      <p className="hover-underline-animation  hover:text-[#000000] cursor-pointer text-[#777777]">
        Queued
      </p>

      {/* <hr className=""></hr> */}
    </div>
  );
}
