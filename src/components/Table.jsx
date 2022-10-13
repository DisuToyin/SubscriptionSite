import React, { useEffect } from "react";
import axios from "axios";
import tableIcon from "../assets/tableIcon.svg";
import chatIcon from "../assets/chatBox.svg";
import ecllipse from "../assets/Ellipse 100.svg";
import Badge from "./Badge";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [tasks, setTasks] = useState([]);

  const handleTask = () => {};

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  const getTasks = async () => {
    const data = await axios.get("/api/task/" + user_id);
    console.log(data.data);
    setTasks(data.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

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
            {tasks?.map((task) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">
                    <img src={ecllipse} alt="ellipse" />
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link to={`/task/${task?._id}`}>{task?.task_name}</Link>
                  </th>
                  <td className="py-4 px-6">{task?.assigned_to || "N/A"}</td>
                  <td className="py-4 px-6">
                    <Badge badgeText={task?.task_status?.status_name} />
                  </td>
                  <td className="py-4 px-6">
                    {" "}
                    <Link to={`/task/${task?._id}`}>
                      {task?.date_of_completion}{" "}
                    </Link>
                  </td>
                  <td className="py-4 px-6">{task?.category}</td>
                  <td className="py-4 px-6">
                    <FiMoreHorizontal
                      size={26}
                      className="cursor-pointer"
                      onClick={() => handleTask()}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
