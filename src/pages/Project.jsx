import React from "react";
import NavbarComp from "../components/NavbarComp";
import carrilwhitelogo from "../assets/Carril button.svg";
import calendlyIcon from "../assets/Icons.svg";
import bellNoti from "../assets/Button.svg";
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
    </div>
  );
}
