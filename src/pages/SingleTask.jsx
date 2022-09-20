import React from "react";
import Sidebar from "../components/Sidebar";
import Tab from "../components/Tab";
import back from "../assets/back.svg";

import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
import { useNavigate } from "react-router-dom";

export default function SingleTask() {
  const navigate = useNavigate();
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100%]">
        <div
          className="grid my-3  mx-8"
          style={{ gridTemplateColumns: "2fr 3fr" }}
        >
          <div className="flex gap-4">
            <img
              onClick={() => navigate("/task")}
              className="cursor-pointer"
              src={back}
              alt="back button"
            />
            <h1 className="text-[28px] font-bold">Astra Projections</h1>
          </div>
          <div className=" flex gap-4 top-[.2rem] justify-end items-center">
            <img className="w-[24px] h-[24px]" src={bell} alt="fix" />
            <img src={line} alt="fix" />
            <div className="bg-[#E5E5E5] text-[11px] pt-[7px]  text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
              AD
            </div>
          </div>
        </div>
        <hr className="mt-[1rem]"></hr>
        <div
          className="grid  border-b border-gray-200"
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <Tab
            borderRightStyles="border-r-[1px] border-r-gray-300"
            defaultTab={"Messages"}
            tabList={["Messages", "Description", "Files"]}
          />
          <div className="self-center">
            {/* <p className=" text-[#474747] font-semibold pl-[1rem] text-[14px]">
              Overview
            </p> */}
          </div>
        </div>
        {/* <span className="border-b-[1px]  border-r-gray-300 "></span> */}
      </div>
    </div>
  );
}
