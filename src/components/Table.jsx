import React from "react";
import tableIcon from "../assets/tableIcon.svg";
import chatIcon from "../assets/chatBox.svg";
import ecllipse from "../assets/Ellipse 100.svg";
import Badge from "./Badge";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Table({
  tableColumns = [
    { name: "", icon: chatIcon },
    { name: "Task Name", icon: tableIcon },
    { name: "Assigned To", icon: tableIcon },
    { name: "Status", icon: tableIcon },
    { name: "Delivery Date", icon: tableIcon },
    { name: "Category", icon: tableIcon },
  ],
  actionsColumn = false,
}) {
  const handleTask = () => {};
  return (
    <div className="mt-8 mx-[2rem]">
      <div className="overflow-x-auto relative  sm:rounded-[2px]">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 bg-[#F8F9F9] uppercase">
            <tr>
              {tableColumns.map((column, i) => {
                return (
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div key={i} className="flex items-center">
                      {column.name}
                      <img
                        className="ml-1 w-3 h-3"
                        src={column.icon}
                        alt="table"
                      />
                    </div>
                  </th>
                );
              })}
              {actionsColumn === true && (
                <th scope="col" className="py-3 text-[12px] font-medium px-6">
                  <div className="flex items-center"></div>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">
                <img src={ecllipse} alt="ellipse" />
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Astral Projections
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">
                <Badge badgeText={"Completed"} />
              </td>
              <td className="py-4 px-6">$2999</td>
              <td></td>
              <td className="py-4 px-6">
                <FiMoreHorizontal
                  size={26}
                  className="cursor-pointer"
                  onClick={() => handleTask()}
                />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">
                <img src={ecllipse} alt="ellipse" />
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Astral Projections
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">
                <Badge
                  badgeText={"Ongoing"}
                  extraStyles={"bg-[#FFF0E4] text-[#FDA700]"}
                />
              </td>
              <td className="py-4 px-6">$2999</td>
              <td></td>
              <td className="py-4 px-6">
                <FiMoreHorizontal
                  size={26}
                  className="cursor-pointer"
                  onClick={() => handleTask()}
                />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">
                <img src={ecllipse} alt="ellipse" />
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Astral Projections
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">
                <Badge badgeText={"Queued"} />
              </td>
              <td className="py-4 px-6">$1999</td>
              <td></td>
              <td className="py-4 px-6">
                <FiMoreHorizontal
                  size={26}
                  className="cursor-pointer"
                  onClick={() => handleTask()}
                />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <td className="py-4 px-6">
                <img src={ecllipse} alt="ellipse" />
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Astral Projections
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">$99</td>
              <td></td>
              <td className="py-4 px-6">
                <FiMoreHorizontal
                  size={26}
                  className="cursor-pointer"
                  onClick={() => handleTask()}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
