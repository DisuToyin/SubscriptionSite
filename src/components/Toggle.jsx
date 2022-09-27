import React from "react";

export default function Toggle() {
  return (
    <label
      for="small-toggle"
      className="inline-flex relative items-center cursor-pointer"
    >
      <input type="checkbox" value="" id="small-toggle" class="sr-only peer" />
      <div className="billingToggle w-7 h-4 bg-[#87929D] rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#222F51]"></div>
    </label>
  );
}
