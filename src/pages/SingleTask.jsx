import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Tab from "../components/Tab";
import back from "../assets/back.svg";

import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
import { useNavigate, useParams } from "react-router-dom";
import MessageComponent from "../components/MessageComponent";
import Description from "../components/Description";
import Files from "../components/Files";

export default function SingleTask() {
  const [currentTab, setCurrentTab] = useState("Messages");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const id = useParams();
  console.log(id);

  const [taskDetails, setTaskDetails] = useState({});
  const firstname = localStorage.getItem("first_name");
  const lastname = localStorage.getItem("last_name");

  const handleTask = () => {};

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  const getTaskDetails = async () => {
    const data = await axios.get("/api/task/single/" + id?.taskId);
    console.log(data?.data);
    setTaskDetails(data?.data);
  };

  useEffect(() => {
    getTaskDetails();
  }, [id?.taskId]);

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
          <div className="flex gap-4">
            <img
              onClick={() => navigate("/task")}
              className="cursor-pointer"
              src={back}
              alt="back button"
            />
            <h1 className="text-[28px] font-bold">{taskDetails?.task_name}</h1>
          </div>
          <div className=" flex gap-4 top-[.2rem] justify-end items-center">
            <img className="w-[24px] h-[24px]" src={bell} alt="fix" />
            <img src={line} alt="fix" />
            <div className="bg-[#E5E5E5] text-[11px] pt-[7px]  text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
              {firstname.charAt(0)}
              {lastname.charAt(0)}
            </div>
          </div>
        </div>
        <hr className="mt-[1rem]"></hr>
        <div
          className="grid  border-b border-gray-200"
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <Tab
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            borderRightStyles="border-r-[1px] border-r-gray-300"
            defaultTab={currentTab}
            tabList={["Messages", "Description", "Files"]}
          />
          <div className="self-center">
            <p className=" text-[#474747] font-semibold pl-[1rem] text-[14px]">
              Overview
            </p>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "3fr 1fr" }}>
          <div className="border-r-[1px] h-screen ml-8 border-r-gray-300">
            {currentTab === "Messages" && <MessageComponent />}
            {currentTab === "Description" && (
              <Description description={taskDetails} />
            )}
            {currentTab === "Files" && <Files />}
          </div>
          <div className="py-4 px-4">
            <div className="flex mb-4 justify-between">
              <span className="text-[#777777] font-[12px]">Status</span>
              <span className="text-[#474747] font-[12px]">
                {taskDetails?.task_status?.status_name}
              </span>
            </div>
            <div className="flex mb-4 justify-between">
              <span className="text-[#777777] font-[12px]">ProjectID</span>
              <span className="text-[#474747] font-[12px]">
                {taskDetails?._id?.substring(0, 7)}
              </span>
            </div>
            <div className="flex mb-4 justify-between">
              <span className="text-[#777777] font-[12px]">Deadline</span>
              <span className="text-[#474747] font-[12px]">
                {taskDetails?.date_of_completion}
              </span>
            </div>
            <div className="flex mb-4 justify-between">
              <span className="text-[#777777] font-[12px]">Category</span>
              <span className="text-[#474747] font-[12px]">
                {taskDetails?.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
