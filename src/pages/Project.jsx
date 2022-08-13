import React from "react";
import NavbarComp from "../components/NavbarComp";
import carrilwhitelogo from "../assets/Carril button.svg";
import calendlyIcon from "../assets/Icons.svg";
import bellNoti from "../assets/Button.svg";
import addIcon from "../assets/addIcon.svg";
import arrowdown from "../assets/arrowdown.svg";

export default function Project() {
  return (
    <div>
      <NavbarComp className="bg-[#222F51] items-center h-[60px] grid grid-cols-2 pl-[28px] pt-[10px] pb-[10px] pr-[28px]">
        <div className="flex gap-[10%]">
          <img src={carrilwhitelogo} alt="navbar logo" />

          <div className="flex gap-4">
            <p className="text-[#FFFFFF]  font-medium cursor-pointer">
              Project deck
            </p>
            <p className="text-[#FFFFFF]  font-medium cursor-pointer">Files</p>
          </div>
        </div>
        <div className="flex text-[#FFFFFF] gap-4 justify-end">
          <button className="border-[#FFFFFF] text-[14px] border-[1px] pt-[8px] pb-[8px] pl-[16px] pr-[16px]">
            Plans
          </button>
          <span className="self-center">
            <img src={calendlyIcon} alt="alt" />
          </span>
          <span className="self-center">
            <img src={bellNoti} alt="alt" />
          </span>
          <div className="flex cursor-pointer gap-2">
            <div className="self-center text-[11px] border-[#FFFFFF] border-[1px] bg-[#ffffff38] p-[3px] rounded-[50%] ">
              AD
            </div>
            <p className="self-center  text-[12px]">Anthony Davies</p>
            <span className="self-center">
              <img alt="alt" src={arrowdown} />
            </span>
          </div>
        </div>
      </NavbarComp>
      <div className="mt-[40px] pl-[120px] pr-[120px]">
        <div className="grid grid-cols-2">
          <h1 className="text-[28px] font-bold">Tasks</h1>
          <div className="flex justify-end self-center">
            <input
              className="rounded-[2px] outline-none border-[1px] mr-[5%] h-[32px] w-[50%] pl-[18px] text-[12px] border-[#E2E2E2]"
              placeholder="Search by task name"
            />
            <button className="flex pt-[5px] text-[white] h-[32px] rounded-[2px] text-[12px] pl-[10px] pr-[10px] font-medium bg-[#E9724C]">
              {" "}
              {/* <img alt="add icon" src={addIcon} />  */}
              <span> New task</span>
            </button>
          </div>
        </div>
        <div className="mt-[16px]  text-[14px] text-[#777777] font-bold flex gap-8">
          <div className="block">
            <p className="cursor-pointer hover:text-[#000000] text-[#777777]">
              All
              <span className="hover:flex hover:border-b-[red] hidden ">
                red
              </span>
            </p>
          </div>
          <p className="cursor-pointer hover:text-[#000000] text-[#777777]">
            Ongoing
          </p>
          <p className="cursor-pointer hover:text-[#000000] text-[#777777]">
            Completed
          </p>
          <p className=" cursor-pointer hover:text-[#000000] text-[#777777]">
            Drafts
          </p>
          <p className="hover:text-[#000000] text-[#777777]">Queued</p>
        </div>
        <span className=" border-b-[2px] border-[#E5E5E5]" />
      </div>
    </div>
  );
}
