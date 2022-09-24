import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
import Tab from "../components/Tab";
import Button from "../components/Button";
import listIcon from "../assets/list.svg";
import boardview from "../assets/board.svg";
import Table from "../components/Table";
import "./styles.css";

export default function Task() {
  const [open, setOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`w-[100%] ${open ? "ml-[17rem]" : "ml-[4rem]"} duration-500`}
      >
        <div
          className="grid my-3  mx-8"
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
        <div
          className="grid mb-[2rem] mr-[2rem] mt-[1rem] "
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <div className="  flex gap-2 text-[12px]  font-medium ml-[2rem]">
            <div className="grid grid-cols-4 gap-[0] border-[1px] h-[42px] hover:bg-[#E9EBED] self-end items-center  p-[8px] cursor-pointer border-[#E5E5E5]">
              <img
                className="h-[16px] col-span-1  w-16px"
                src={listIcon}
                alt="list"
              />
              <p className="col-span-3 text-[#222F51]">List View</p>
            </div>
            <div className="grid grid-cols-4 gap-[0] border-[1px] h-[42px] hover:bg-[#E9EBED] self-end items-center  p-[8px] cursor-pointer border-[#E5E5E5]">
              <img
                className="h-[16px] col-span-1  w-16px"
                src={boardview}
                alt="list"
              />
              <p className="col-span-3 text-[#222F51]">Board View</p>
            </div>
          </div>
          <div className=" flex gap-4 top-[.2rem] justify-end items-center">
            <Button
              icon={true}
              button_text={"New Task"}
              other_styles={`bg-[#E9724C] hover:bg-[black] text-white w-[auto] py-[0.5rem] text-[14px]`}
            />
          </div>
        </div>
        <Tab
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          defaultTab={currentTab}
          borderRightStyles=" border-b border-gray-200"
        />

        <Table actionsColumn={true} />
      </div>
    </div>
  );
}
