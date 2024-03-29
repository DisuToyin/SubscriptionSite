import React from "react";

export default function Tab({
  currentTab,
  setCurrentTab,
  defaultTab,
  tabList = ["All", "Ongoing", "Queue", "Draft", "Done"],
  borderRightStyles = "",
  activeStyles = "inline-block p-4 text-[black] font-bold cursor-pointer rounded-t-lg border-b-2 border-[#e9724c] active ",
  inactiveStyles = "mr-2 inline-block p-4 rounded-t-lg border-b-2 cursor-pointer border-transparent hover:text-gray-600 hover:border-gray-300 ",
}) {
  return (
    <div
      className={`text-sm  font-medium text-center pl-[2rem] text-gray-500  ${borderRightStyles}`}
    >
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
