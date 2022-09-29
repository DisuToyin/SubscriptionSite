import React from "react";
import logo from "../assets/navbar logo.svg";
import { useNavigate } from "react-router-dom";
export const Navbar = ({ pageName, margin_btm = 0 }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ gridTemplateColumns: "1fr 3fr 1fr" }}
      className={`h-[89px] grid gap-4 pl-[48px] pr-[48px] sm:grid sm:grid-cols-2 content-center md:pl-[15px] md:pr-[15px] border-[#E2E2E2] border-b-[2px]  bg-white ${margin_btm} `}
    >
      <img className="self-center" src={logo} alt="logo" />
      {pageName === "register" && (
        <div className="grid pt-[5px] pb-[5px]  grid-cols-5 items-center text-center">
          <div onClick={() => navigate("/register")}>
            <div className="bg-[#222F51] pt-[7px]  m-[auto] text-[8px] text-[white] text-center rounded-[50%] h-[25px] w-[25px]">
              1
            </div>
            <p className="text-[#222F51] text-[12px] font-semibold">
              Account details
            </p>
          </div>
          <span className=" sm:hidden border-b-[2px] border-[#E5E5E5]" />
          <div onClick={() => navigate("/pricing")} className="sm:hidden">
            <div className="bg-[#E5E5E5] text-[8px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
              2
            </div>
            <p className="text-[#E5E5E5] text-[12px] font-semibold">Pricing</p>
          </div>
          <span className=" border-b-[2px] sm:hidden border-[#E5E5E5]" />
          <div navigate="/payment" className="sm:hidden">
            <div className="bg-[#E5E5E5] text-[8px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
              3
            </div>
            <p className="text-[#E5E5E5] text-[12px] font-semibold">Payment</p>
          </div>
        </div>
      )}
      {pageName === "pricing" && (
        <div className="grid pt-[5px] pb-[5px]  grid-cols-5 items-center text-center">
          <div onClick={() => navigate("/register")} className="sm:hidden">
            <div className="bg-[#E5E5E5] text-[8px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
              1
            </div>
            <p className="text-[#E5E5E5] text-[12px] font-semibold">
              Account details
            </p>
          </div>
          <span className=" sm:hidden border-b-[2px] border-[#E5E5E5]" />
          <div onClick={() => navigate("/pricing")}>
            <div className="bg-[#222F51] pt-[7px]  m-[auto] text-[8px] text-[white] text-center rounded-[50%] h-[25px] w-[25px]">
              2
            </div>
            <p className="text-[#222F51] text-[12px] font-semibold">Pricing</p>
          </div>

          <span className=" border-b-[2px] sm:hidden border-[#E5E5E5]" />
          <div className="sm:hidden">
            <div className="bg-[#E5E5E5] text-[8px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
              3
            </div>
            <p className="text-[#E5E5E5] text-[12px] font-semibold">Payment</p>
          </div>
        </div>
      )}
      {pageName === "payment" && (
        <div className="grid pt-[5px] pb-[5px]  grid-cols-5 items-center text-center">
          <div onClick={() => navigate("/register")} className="sm:hidden">
            <div className="bg-[#E5E5E5] text-[8px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
              1
            </div>
            <p className="text-[#E5E5E5] text-[12px] font-semibold">
              Account details
            </p>
          </div>
          <span className=" sm:hidden border-b-[2px] border-[#E5E5E5]" />
          <div className="sm:hidden">
            <div className="bg-[#E5E5E5] text-[8px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
              2
            </div>
            <p className="text-[#E5E5E5] text-[12px] font-semibold">Pricing</p>
          </div>

          <span className=" border-b-[2px] sm:hidden border-[#E5E5E5]" />
          <div onClick={() => navigate("/pricing")}>
            <div className="bg-[#222F51] pt-[7px]  m-[auto] text-[8px] text-[white] text-center rounded-[50%] h-[25px] w-[25px]">
              3
            </div>
            <p className="text-[#222F51] text-[12px] font-semibold">Payment</p>
          </div>
        </div>
      )}
    </div>
  );
};
