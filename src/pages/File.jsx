import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import moment from "moment";
// import back from "../assets/back.svg";
import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
// import { useNavigate } from "react-router-dom";
import folderIcon from "../assets/Group.svg";
import kebabMenu from "../assets/kebab-horizontal.svg";
import miniFolder from "../assets/mini-folder.svg";
import selectAll from "../assets/check-all.svg";
import greyFolder from "../assets/grey-folder-icon.svg";
import curvedArrow from "../assets/curved-arrow-left.svg";
import closeBtn from "../assets/close-btn.svg";
import successIcon from "../assets/success.svg";
import Modal from "../components/Modal";
import DarkOverlay from "../components/DarkOverlay";
import { StepOne, StepTwo } from "../components/Files Components/DeleteModals";
import {
  RenameOne,
  RenameTwo,
} from "../components/Files Components/RenameModals";

import Input from "../components/Input";
import Button from "../components/Button";
// import Button from "../components/Button";

// import Files Components from the files component folder
import FolderDetails from "../components/Files Components/FolderDetails";

export default function File() {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [createFolder, setCreateFolder] = useState(false);
  const [step, setStep] = useState(1);
  const [folders, setFolders] = useState([]);
  const [folderData, setFolderData] = useState({
    createdAt: ``,
    folderName: ``,
    folderFiles: {},
  });

  const [isFolderOptions, setIsFolderOptions] = useState(false);
  const [isFolder, setIsFolder] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [renameItem, setRenameItem] = useState(false);

  // const navigate = useNavigate();

  // This is responsible for the click events on the "Create folder" and "Continue" buttons
  const handleClick = (e) => {
    e.preventDefault();
    setStep(2);
    if (step === 2) {
      setCreateFolder(false);
      setStep(1);
      setFolders((oldFolders) => {
        return [
          { name: folderData.folderName, date: folderData.createdAt, files: 0 },
          ...oldFolders,
        ];
      });
      setFolderData({ folderName: "" });
    }
  };

  // THIS FUNCTION HANDLES THE CLICK EVENT ON THE X ICON ON THE MODALS
  const handleCancel = () => {
    setCreateFolder(false);
    setDeleteItem(false);
    setRenameItem(false);
  };

  const deleteFolder = (id) => {
    const newFolders = folders.filter((folder, i) => {
      return i !== id;
    });
    setFolders(newFolders);
    setIsFolder(false);
  };

  // THESE FUNCTIONS PROVIDE THE FOLDER DETAILS DISPLAYED ON THE RIGHT SIDEBAR
  const [folderName, setFolderName] = useState("");
  const [date, setDate] = useState("");

  const getFoldername = (id) => {
    setFolderName(folders[id].name);
  };

  const getDate = (id) => {
    setDate(folders[id].date);
  };

  return (
    <div className='flex'>
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`w-[100%] ${open ? "ml-[17rem]" : "ml-[4rem]"} duration-500`}
      >
        <div
          className='grid my-3  mx-8'
          style={{ gridTemplateColumns: "2fr 3fr" }}
        >
          <div className=''>
            <h1 className='text-[28px] ml-4 font-bold'>Files</h1>
          </div>
          <div className=' flex gap-4 top-[.2rem] justify-end items-center'>
            <img className='w-[24px] h-[24px]' src={bell} alt='fix' />
            <img src={line} alt='fix' />
            <div className='bg-[#E5E5E5] text-[11px] pt-[7px]  text-[white] text-center rounded-[50%]  h-[30px] w-[30px] '>
              AD
            </div>
          </div>
        </div>
        <hr className='mt-[1rem]'></hr>
        <div
          className='grid  border-b border-gray-200'
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <div className='flex border-r-[1px] items-center justify-between border-r-gray-300 ml-12  py-4'>
            <b className=''>Files</b>
            <button
              onClick={() => setShowModal(true)}
              className='border-2 border-black bg-white mr-3 py-[10px] px-[16px] text-[12px]'
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
          <div className='flex items-center justify-between'>
            <div
              className={`flex items-center justify-center border-r w-[50%] h-[100%] text-[#222F51] hover:bg-[#F8F9F9] ${
                createFolder && `bg-[#F8F9F9]`
              }`}
            >
              <img src={miniFolder} alt='mini folder' className='' />
              <p
                className='font-semibold pl-[5.7px] text-[14px] cursor-pointer'
                onClick={() => {
                  setCreateFolder(true);
                }}
              >
                New folder
              </p>
            </div>
            <div className='flex items-center justify-center w-[50%] h-[100%] cursor-pointer hover:bg-[#F8F9F9]'>
              <img
                src={selectAll}
                alt='select all items'
                className='text-[#222F51]'
              />
              <p className='font-semibold pl-[5.7px] text-[14px]'>Select all</p>
            </div>
          </div>
        </div>
        <div className='grid ' style={{ gridTemplateColumns: "3fr 1fr" }}>
          <div className='border-r-[1px]  h-screen ml-8 border-r-gray-300'>
            <div className='flex flex-wrap'>
              {folders.length !== 0 ? (
                <>
                  {folders.map((folder, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          id={i}
                          className='folder text-center m-5 hover:bg-[#F5F7FF] px-4'
                          onClick={() => {
                            setIsFolder(true);
                            getFoldername(i);
                            getDate(i);
                          }}
                          onMouseLeave={() => setIsFolderOptions(false)}
                        >
                          <div className='options flex items-center justify-end relative'>
                            <img
                              src={kebabMenu}
                              alt='options'
                              className='cursor-pointer'
                              onClick={() => setIsFolderOptions(true)}
                            />
                            {isFolderOptions && (
                              <div className='folder-options w-[150px] h-[100px] text-start p-[12px] bg-[#ffffff] absolute top-[20px] left-[50px]'>
                                <p
                                  className='text-[#474747] mb-3 cursor-pointer'
                                  onClick={() => setRenameItem(true)}
                                >
                                  Rename folder
                                </p>
                                <p
                                  className='text-[#D93F4C] cursor-pointer'
                                  onClick={() => {
                                    setDeleteItem(true);
                                  }}
                                >
                                  Delete
                                </p>
                              </div>
                            )}
                          </div>

                          <img
                            className='cursor-pointer'
                            src={folderIcon}
                            alt='folder'
                          />
                          <div>
                            <span className='text-[#474747] font-bold text-[14px]'>
                              {folder.name}
                            </span>{" "}
                            <br />
                            <span className='text-[#8C96BF] text-[12px]'>
                              {folder.files === 0
                                ? "empty folder"
                                : folder.files + " files"}
                            </span>
                          </div>
                        </div>

                        {renameItem && step === 1 && (
                          <RenameOne
                            handleCancel={handleCancel}
                            folderData={folderData}
                            setFolderData={setFolderData}
                            oldName={folderName}
                            newName={folders[i]}
                            setStep={setStep}
                          />
                        )}
                        {renameItem && step === 2 && (
                          <RenameTwo
                            handleCancel={handleCancel}
                            setStep={setStep}
                            setRename={setRenameItem}
                            setIsFolder={setIsFolder}
                            setFolderData={setFolderData}
                          />
                        )}

                        {deleteItem && step === 1 && (
                          <StepOne
                            handleCancel={handleCancel}
                            i={i}
                            setStep={setStep}
                            folderName={folderName}
                          />
                        )}
                        {deleteItem && step === 2 && (
                          <StepTwo
                            deleteFolder={deleteFolder}
                            i={i}
                            setDeleteItem={setDeleteItem}
                            setIsFolder={setIsFolder}
                            setStep={setStep}
                          />
                        )}
                      </>
                    );
                  })}
                </>
              ) : (
                <div className='w-[100%] text-center mt-[70px]'>
                  <h3 className='text-4xl font-medium'>No files</h3>
                  <p className='text-base mt-[8px]'>There's nothing here yet</p>
                  <div className='flex justify-center items-end mt-[130px] text-[#8C96BF]'>
                    <img
                      src={curvedArrow}
                      alt='curved arrow'
                      className='mb-2 mr-1'
                    />
                    <p className='text-end'>
                      Create a folder to start adding files
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={`overview flex  ${
              isFolder
                ? `pl-[24px] pr-[10px] pt-[20px]`
                : `justify-center pt-[60px]`
            }`}
          >
            <div className=''>
              {isFolder ? (
                <FolderDetails
                  folderName={folderName}
                  date={date}
                  setDeleteItem={setDeleteItem}
                />
              ) : (
                <>
                  <img
                    src={greyFolder}
                    alt='folder icon'
                    className='mx-auto mb-[8px]'
                  />
                  <p className='text-[#C1C7CC]'>
                    Select a file to view details
                  </p>
                </>
              )}
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

      {/* CREATE NEW FOLDER MODAL */}
      {createFolder && step === 1 && (
        <DarkOverlay open={open}>
          <div className='flex justify-between'>
            <h2 className='text-[18px] font-semibold mb-2'>
              Create new folder
            </h2>
            <img
              src={closeBtn}
              alt='close modal'
              className='cursor-pointer'
              onClick={() => setCreateFolder(false)}
            />
          </div>
          <Input
            label={"Folder name"}
            value={`${folderData.folderName}`}
            name='folderName'
            isRequired={true}
            inputType={"text"}
            handleInputChange={(e) =>
              setFolderData({
                ...folderData,
                createdAt: moment().format("Do MMM YYYY"),
                folderName: e.target.value,
              })
            }
          />
          <div className='btns flex justify-end'>
            <Button
              button_type='button'
              handleClick={handleCancel}
              other_styles={`bg-[#fffff] text-black w-[100px] mx-3`}
              button_text={"Cancel"}
            ></Button>
            <Button
              button_type='button'
              handleClick={handleClick}
              other_styles={
                folderData.folderName
                  ? ` bg-[#E9724C] text-white w-[179px]`
                  : `bg-[#E9724C] opacity-30 text-white w-[179px]`
              }
              button_text={"Create new folder"}
              disabled={folderData.folderName ? false : true}
            ></Button>
          </div>
        </DarkOverlay>
      )}

      {/* CONGRATULATIONS MODAL */}
      {createFolder && step === 2 && (
        <DarkOverlay open={open}>
          <div className='flex justify-between w-[50%] float-right'>
            <img src={successIcon} alt='success' />
            <img
              src={closeBtn}
              alt='close modal'
              className='cursor-pointer'
              onClick={() => setCreateFolder(false)}
            />
          </div>
          <br /> <br />
          <p className=' text-center mt-[24px] font-bold text-[20px]'>
            Your folder has been created successfully!
          </p>
          <Button
            button_type='button'
            handleClick={handleClick}
            other_styles={`bg-[#E9724C] text-white `}
            button_text={"Continue"}
          ></Button>
        </DarkOverlay>
      )}
    </div>
  );
}
