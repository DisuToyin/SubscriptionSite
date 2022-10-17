import Button from "../Button";
import successIcon from "../../assets/success.svg";
import closeBtn from "../../assets/close-btn.svg";
import DarkOverlay from "../DarkOverlay";
import Input from "../Input";

export function RenameOne({
  handleCancel,
  folderData,
  setFolderData,
  oldName,
  newName,
  setStep,
  type,
}) {
  return (
    <DarkOverlay>
      <div className='flex justify-between'>
        <h2 className='text-[18px] font-semibold mb-2'>
          Rename {type !== "folder" ? `file` : `folder`}
        </h2>
        <img
          src={closeBtn}
          alt='close modal'
          className='cursor-pointer'
          onClick={handleCancel}
        />
      </div>
      <Input
        label={`${type !== "folder" ? `File` : `Folder`} name`}
        placeHolder={oldName}
        name='folderName'
        isRequired={true}
        inputType={"text"}
        handleInputChange={(e) =>
          setFolderData({
            ...folderData,
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
          handleClick={() => {
            newName.name = folderData.folderName;
            setStep(2);
          }}
          other_styles=' bg-[#E9724C] text-white w-[179px]'
          button_text={"Rename"}
        ></Button>
      </div>
    </DarkOverlay>
  );
}

export function RenameTwo({
  handleCancel,
  setStep,
  setRename,
  setIsFolder,
  setFolderData,
}) {
  return (
    <DarkOverlay>
      <div className='flex justify-between w-[50%] float-right'>
        <img src={successIcon} alt='success' />
        <img
          src={closeBtn}
          alt='close modal'
          className='cursor-pointer'
          onClick={handleCancel}
        />
      </div>
      <br /> <br />
      <p className=' text-center mt-[24px] font-bold text-[20px]'>
        Your folder has been renamed successfully!
      </p>
      <Button
        button_type='button'
        handleClick={() => {
          setStep(1);
          setRename(false);
          setIsFolder(false);
          setFolderData({ folderName: "" });
        }}
        other_styles={`bg-[#E9724C] text-white `}
        button_text={"Continue"}
      ></Button>
    </DarkOverlay>
  );
}
