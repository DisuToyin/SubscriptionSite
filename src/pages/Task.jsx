import React from "react";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
import Tab from "../components/Tab";

export default function Task() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100%] ">
        <div
          className="grid my-3  mx-7"
          style={{ gridTemplateColumns: "2fr 3fr" }}
        >
          <h1 className="text-[28px] font-bold">Tasks</h1>
          <div className=" flex gap-4 top-[.2rem] justify-end items-center">
            <SearchInput className="" placeHolder={"Search by task name"} />
            <img className="w-[24px] h-[24px]" src={bell} alt="fix" />
            <img src={line} alt="fix" />
            <div className="bg-[#E5E5E5] text-[11px] pt-[7px]  text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
              AD
            </div>
          </div>
        </div>
        <hr className="mt-[1rem]"></hr>
        <Tab />
      </div>
    </div>
  );
}
