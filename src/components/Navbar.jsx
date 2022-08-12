import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{ gridTemplateColumns: "1fr 5fr 1fr" }}
      class="h-[89px] grid gap-4 pl-[48px] pr-[48px] content-center md:pl-[28px] md:pr-[28px] border-[#E2E2E2] border-b-[2px] mb-[10%] bg-white"
    >
      <div>Carril</div>
      <div
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
        className="grid pt-[5px] pb-[5px] items-center text-center"
      >
        <div>
          <div className="bg-[#222F51] pt-[5px]  m-[auto] text-[8px] text-[white] text-center rounded-[50%] h-[25px] w-[25px]">
            1
          </div>
          <p className="text-[#222F51] text-[12px] font-semibold">
            Account details
          </p>
        </div>
        <span className=" border-b-[1px] border-[#E5E5E5]" />
        <div>
          <div className="bg-[#E5E5E5] text-[8px] pt-[5px]  m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
            2
          </div>
          <p className="text-[#E5E5E5] text-[12px] font-semibold">Pricing</p>
        </div>
        <span className=" border-b-[1px] border-[#E5E5E5]" />
        <div>
          <div className="bg-[#E5E5E5] text-[8px] pt-[5px] m-[auto] text-[white] text-center rounded-[50%]  h-[25px] w-[25px]">
            3
          </div>
          <p className="text-[#E5E5E5] text-[12px] font-semibold">Payment</p>
        </div>
      </div>
    </div>
  );
};
