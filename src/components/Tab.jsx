import React, { useState } from "react";

export default function Tab({
  tabList = ["All", "Ongoing", "Queue", "Draft", "Done"],
  activeStyles = "inline-block p-4 text-[#e9724c] rounded-t-lg border-b-2 border-[#e9724c] active ",
  inactiveStyles = "mr-2 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ",
}) {
  const [currentTab, setCurrentTab] = useState("All");

  return (
    <div className="text-sm font-medium text-center pl-[2rem]  text-gray-500 border-b border-gray-200 ">
      <ul className="flex flex-wrap -mb-px">
        {tabList.map((tab, i) => {
          return (
            <li
              onClick={() => setCurrentTab(tab)}
              key={i}
              className={currentTab === tab ? activeStyles : inactiveStyles}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
