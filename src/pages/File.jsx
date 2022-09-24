import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
// import back from "../assets/back.svg";
import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
// import { useNavigate } from "react-router-dom";
import folderIcon from "../assets/Group.svg";
import Modal from "../components/Modal";
// import Button from "../components/Button";

export default function File() {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate();

  const folders = [
    { name: "vibes", files: 0 },
    { name: "designs", files: 2 },
    { name: "naija", files: 5 },
    { name: "vibes", files: 0 },
    { name: "designs", files: 2 },
    { name: "naija", files: 5 },
    { name: "vibes", files: 0 },
    { name: "designs", files: 2 },
    { name: "naija", files: 5 },
  ];

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`w-[100%] ${open ? "ml-[17rem]" : "ml-[4rem]"} duration-500`}
      >
        <div
          className="grid my-3  mx-8"
          style={{ gridTemplateColumns: "2fr 3fr" }}
        >
          <div className="">
            <h1 className="text-[28px] ml-4 font-bold">Files</h1>
          </div>
          <div className=" flex gap-4 top-[.2rem] justify-end items-center">
            <img className="w-[24px] h-[24px]" src={bell} alt="fix" />
            <img src={line} alt="fix" />
            <div className="bg-[#E5E5E5] text-[11px] pt-[7px]  text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
              AD
            </div>
          </div>
        </div>
        <hr className="mt-[1rem]"></hr>
        <div
          className="grid  border-b border-gray-200"
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <div className="flex border-r-[1px] items-center justify-between border-r-gray-300 ml-12  py-4">
            <b className="">Files</b>
            <button
              onClick={() => setShowModal(true)}
              className="outline bg-white mr-3 p-1 text-[12px]"
            >
              Add Files
            </button>
            {/* <Button
              icon={true}
              handleClick={() => setShowModal(true)}
              button_text={"Add File"}
              other_styles={`bg-[#E9724C] hover:bg-[black] text-white w-[auto] py-[0.5rem] text-[14px]`}
            /> */}
          </div>

          {/* <Tab
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            borderRightStyles="border-r-[1px] border-r-gray-300"
            defaultTab={currentTab}
            tabList={["Messages", "Description", "Files"]}
          /> */}
          <div className="self-center">
            <p className=" text-[#474747] font-semibold pl-[1rem] text-[14px]">
              Overview
            </p>
          </div>
        </div>
        <div className="grid " style={{ gridTemplateColumns: "3fr 1fr" }}>
          <div className="border-r-[1px]  h-screen ml-8 border-r-gray-300">
            <div className="flex flex-wrap">
              {folders.map((folder, i) => {
                return (
                  <div key={i} className="text-center m-5">
                    <img
                      className="cursor-pointer"
                      src={folderIcon}
                      alt="folder"
                    />
                    <div>
                      <span className="text-[#474747] font-bold text-[14px]">
                        {folder.name}
                      </span>{" "}
                      <br />
                      <span className="text-[#8C96BF] text-[12px]">
                        {folder.files === 0
                          ? "empty folder"
                          : folder.files + " files"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          title={`Test Modal`}
          setShowModal={setShowModal}
          accept_btn={"Save"}
          decline_btn={"Cancel"}
        >
          Test body
        </Modal>
      )}
    </div>
  );
}
