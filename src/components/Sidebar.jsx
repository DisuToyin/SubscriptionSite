import React from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import task from "../assets/task.svg";
import files from "../assets/files.svg";
import plans from "../assets/plans.svg";
import schedule from "../assets/schedule.svg";
import help from "../assets/help.svg";
import logo from "../assets/White.svg";

export default function Sidebar({ open, setOpen }) {
  const menus = [
    {
      name: "Tasks",
      link: "/task",
      icon: task,
    },
    {
      name: "Files",
      link: "/files",
      icon: files,
    },

    {
      name: "Plans",
      link: "/plans",
      icon: plans,
      margin: true,
    },

    {
      name: "Schedule",
      link: "/schedule",
      icon: schedule,
    },

    {
      name: "Help & Support",
      link: "/help",
      icon: help,
    },
  ];
  return (
    <div
      className={`bg-[#222F51] h-[100vh] ${
        open ? "w-72" : "w-16"
      } duration-500 px-4 fixed`}
    >
      <div className="py-5 flex justify-between gap-2 text-white">
        <div className={`${open === false ? "hidden" : ""} pl-3 self-center`}>
          <img src={logo} alt="logo" />
        </div>
        <HiMenu
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="flex flex-col mt-4 gap-4 text-white relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${
              menu?.margin === true && ""
            } flex items-center text-sm gap-3 font-medium py-4 px-2 hover:bg-[#1A243F] rounded-md`}
          >
            {/* <div>{React.createElement(menu?.icon, { size: "20" })}</div> */}
            <img src={menu.icon} alt="logo" />
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
