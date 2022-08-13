import React from "react";
import NavbarComp from "../components/NavbarComp";
import SelectComp from "../components/Select";
import carrilwhitelogo from "../assets/Carril button.svg";
import calendlyIcon from "../assets/Icons.svg";
import bellNoti from "../assets/Button.svg";
// import addIcon from "../assets/addIcon.svg";
import arrowdown from "../assets/arrowdown.svg";
import "./styles.css";

export default function Project() {
  //   const [showModal, setShowModal] = useState(false);
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
          <p className="hover-underline-animation  hover:text-[#000000] cursor-pointer text-[#777777]">
            Queued
          </p>
        </div>
        <div className="border-[1px] mt-[.9rem] border-[#E5E5E5] border-b-[#E5E5E5]"></div>
        <div className="grid grid-cols-2 mt-[16px]">
          <div className="flex gap-4">
            <SelectComp defaultOption={"Any status"} options={[]} />
            <SelectComp defaultOption={"Any category"} options={[]} />
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
