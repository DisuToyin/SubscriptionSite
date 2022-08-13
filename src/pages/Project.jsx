import React from "react";
import NavbarComp from "../components/NavbarComp";
import carrilwhitelogo from "../assets/Carril button.svg";

export default function Project() {
  return (
    <div>
      <NavbarComp className="bg-[#222F51] h-[60px] pl-[28px] pt-[20px] pb-[20px] pr-[28px]">
        <img src={carrilwhitelogo} alt="navbar logo" />
        <div className="flex">
          <p>Project deck</p>
          <p>Files</p>
        </div>
        <div>
          <button>Plans</button>
          <span>Icon</span>
          <span>Icon</span>
          <div>AD</div>
          <p>Anthony Davies</p>
          <span>Icon</span>
        </div>
      </NavbarComp>
    </div>
  );
}
