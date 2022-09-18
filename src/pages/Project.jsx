import React from "react";
import NavbarComp from "../components/NavbarComp";
import SelectComp from "../components/Select";
import carrilwhitelogo from "../assets/Carril button.svg";
import calendlyIcon from "../assets/Icons.svg";
import bellNoti from "../assets/Button.svg";
// import addIcon from "../assets/addIcon.svg";
import arrowdown from "../assets/arrowdown.svg";
import "./styles.css";
import listIcon from "../assets/listicon.svg";
import boardview from "../assets/boardview.svg";
// import TableComp from "../components/Table";
import tableIcon from "../assets/tableIcon.svg";
import chatIcon from "../assets/chatBox.svg";
import ecllipse from "../assets/Ellipse 100.svg";

export default function Project() {
  //   const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <NavbarComp className="bg-[#222F51] items-center h-[60px] grid grid-cols-2 pl-[28px] pt-[10px] pb-[10px] pr-[28px]">
        <div className="flex gap-[10%]">
          <img src={carrilwhitelogo} alt="navbar logo" />

          <div className="flex gap-4">
            <p className="text-[#FFFFFF]  font-medium cursor-pointer">
              Project deck
            </p>
            <p className="text-[#FFFFFF]  font-medium cursor-pointer">Files</p>
          </div>
        </div>
        <div className="flex text-[#FFFFFF] gap-4 justify-end">
          <button className="border-[#FFFFFF] text-[14px] border-[1px] pt-[8px] pb-[8px] pl-[16px] pr-[16px]">
            Plans
          </button>
          <span className="self-center">
            <img src={calendlyIcon} alt="alt" />
          </span>
          <span className="self-center">
            <img src={bellNoti} alt="alt" />
          </span>
          <div className="flex cursor-pointer gap-2">
            <div className="self-center text-[11px] border-[#FFFFFF] border-[1px] bg-[#ffffff38] p-[3px] rounded-[50%] ">
              AD
            </div>
            <p className="self-center  text-[12px]">Anthony Davies</p>
            <span className="self-center">
              <img alt="alt" src={arrowdown} />
            </span>
          </div>
        </div>
      </NavbarComp>
      <div className="mt-[40px] pl-[120px] pr-[120px] md:pl-[28px] md:pr-[28px]">
        <div className="grid grid-cols-2">
          <h1 className="text-[28px] font-bold">Tasks</h1>
          <div className="flex justify-end self-center">
            <input
              className="rounded-[2px] outline-none border-[1px] mr-[5%] h-[32px] w-[50%] pl-[18px] text-[12px] border-[#E2E2E2]"
              placeholder="Search by task name"
            />
            <button className="flex pt-[5px] text-[white] h-[32px] rounded-[2px] text-[12px] pl-[10px] pr-[10px] font-medium bg-[#E9724C]">
              {" "}
              {/* <img alt="add icon" src={addIcon} />  */}
              <span> New task</span>
            </button>
          </div>
        </div>
        <div className="mt-[16px]  text-[14px] text-[#777777] font-bold flex gap-8">
          <p className="hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
            All
          </p>
          <p className="hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
            Ongoing
          </p>
          <p className="hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
            Completed
          </p>
          <p className=" hover-underline-animation cursor-pointer hover:text-[#000000] text-[#777777]">
            Drafts
          </p>
          <p className="hover-underline-animation  hover:text-[#000000] cursor-pointer text-[#777777]">
            Queued
          </p>
        </div>
        <div className="border-[.5px] mt-[.9rem] border-[#E5E5E5] border-b-[#E5E5E5]"></div>
        <div className="grid grid-cols-2 mt-[16px]">
          <div className="flex gap-2">
            <SelectComp defaultOption={"Any status"} options={[]} />
            <SelectComp defaultOption={"Any category"} options={[]} />
          </div>
          <div className="flex gap-2 text-[12px] font-medium justify-end">
            <div className="grid grid-cols-4 gap-[0] border-[1px] h-[42px] hover:bg-[#E9EBED] self-end items-center  p-[8px] cursor-pointer border-[#E5E5E5]">
              <img
                className="h-[16px] col-span-1  w-16px"
                src={listIcon}
                alt="list"
              />
              <p className="col-span-3 text-[#222F51]">List View</p>
            </div>
            <div className="grid grid-cols-4 gap-[0] border-[1px] h-[42px] hover:bg-[#E9EBED] self-end items-center  p-[8px] cursor-pointer border-[#E5E5E5]">
              <img
                className="h-[16px] col-span-1  w-16px"
                src={boardview}
                alt="list"
              />
              <p className="col-span-3 text-[#222F51]">Board View</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div class="overflow-x-auto relative  sm:rounded-[2px]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-[white] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div class="flex items-center">
                      {/* <a href="#"> */}
                      <img
                        className="ml-1 w-3 h-3"
                        src={chatIcon}
                        alt="table"
                      />
                    </div>
                  </th>
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div class="flex items-center">
                      Task name
                      {/* <a href="#"> */}
                      <img
                        className="ml-1 w-3 h-3"
                        src={tableIcon}
                        alt="table"
                      />
                    </div>
                  </th>
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div class="flex items-center">
                      Assigned To
                      {/* <a href="#"> */}
                      <img
                        className="ml-1 w-3 h-3"
                        src={tableIcon}
                        alt="table"
                      />
                    </div>
                  </th>
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div class="flex items-center">
                      Status
                      {/* <a href="#"> */}
                      <img
                        className="ml-1 w-3 h-3"
                        src={tableIcon}
                        alt="table"
                      />
                    </div>
                  </th>
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div class="flex items-center">
                      Delivery date
                      {/* <a href="#"> */}
                      <img
                        className="ml-1 w-3 h-3"
                        src={tableIcon}
                        alt="table"
                      />
                    </div>
                  </th>
                  <th scope="col" className="py-3 text-[12px] font-medium px-6">
                    <div class="flex items-center">
                      Category
                      {/* <a href="#"> */}
                      <img
                        className="ml-1 w-3 h-3"
                        src={tableIcon}
                        alt="table"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">
                    <img src={ecllipse} alt="ellipse" />
                  </td>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Astral Projections
                  </th>
                  <td class="py-4 px-6">Sliver</td>
                  <td class="py-4 px-6">Completed</td>
                  <td class="py-4 px-6">$2999</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">
                    <img src={ecllipse} alt="ellipse" />
                  </td>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Astral Projections
                  </th>
                  <td class="py-4 px-6">Sliver</td>
                  <td class="py-4 px-6">Ongoing</td>
                  <td class="py-4 px-6">$2999</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">
                    <img src={ecllipse} alt="ellipse" />
                  </td>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Astral Projections
                  </th>
                  <td class="py-4 px-6">White</td>
                  <td class="py-4 px-6">Queued</td>
                  <td class="py-4 px-6">$1999</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <td class="py-4 px-6">
                    <img src={ecllipse} alt="ellipse" />
                  </td>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Astral Projections
                  </th>
                  <td class="py-4 px-6">Black</td>
                  <td class="py-4 px-6">Accessories</td>
                  <td class="py-4 px-6">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
