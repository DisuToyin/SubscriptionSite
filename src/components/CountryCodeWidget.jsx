import React from "react";
import countryCode from "../data/countrycode";

export default function CountryCodeWidget() {
  return (
    <select className=" bg-[white] w-[auto] border h-[58px] mt-[-1.9rem]  w-[140px] border-[#E2E2E2] text-[black] pr-2 text-sm rounded-[2px] outline-none focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5">
      {countryCode?.map((ops) => {
        return (
          <option value={ops.key || ops} key={ops.key || ops}>
            {ops.flag} {ops.code} ({ops.dial_code})
          </option>
        );
      })}
    </select>
  );
}
