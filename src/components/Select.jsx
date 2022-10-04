import React from "react";

export default function Select(props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {props.labelName}
      </label>
      <select className=" bg-[white] border border-[#E2E2E2] text-[#ABABAB] pr-2 text-sm rounded-[2px] outline-none focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5">
        <option selected>{props.defaultOption}</option>
        {/* <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option> */}

        {props.options.map((ops) => {
          return (
            <option value={ops.key || ops} key={ops.key || ops}>
              {ops}
            </option>
          );
        })}
      </select>
    </div>
  );
}
