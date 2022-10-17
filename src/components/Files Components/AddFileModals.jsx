import DarkOverlay from "../DarkOverlay";
import closeBtn from "../../assets/close-btn.svg";
import successIcon from "../../assets/success.svg";
import Input from "../Input";
import Button from "../Button";
import moment from "moment";

export function AddFileOne({
  handleCancel,
  setAddFile,
  fileData,
  setFileData,
  setFolders,
  setStep,
}) {
  return (
    <DarkOverlay>
      <div className='flex justify-between'>
        <h2 className='text-[18px] font-semibold mb-2'>Add New file</h2>
        <img
          src={closeBtn}
          alt='close modal'
          className='cursor-pointer'
          onClick={() => setAddFile(false)}
        />
      </div>
      <input type='file' name='file' id='file' className='mb-3' />
      <Input
        label={"File Name"}
        value={`${fileData.fileName}`}
        name='folderName'
        isRequired={true}
        inputType={"text"}
        handleInputChange={(e) =>
          setFileData({
            ...fileData,
            createdAt: moment().format("Do MMM YYYY"),
            fileName: e.target.value,
          })
        }
      />

      <label htmlFor='file-type'>Select File Type</label>
      <select
        name='file-type'
        id='file-type'
        className='border ml-2 p-2 outline-hidden'
        onChange={(e) => setFileData({ ...fileData, type: e.target.value })}
      >
        <option value='' hidden>
          Select
        </option>
        <option value='pdf'>Pdf</option>
        <option value='docx'>Word document</option>
        <option value='svg'>SVG</option>
        <option value='txt'>Text Document</option>
      </select>

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
            setFolders((oldFolders) => {
              return [
                {
                  name: fileData.fileName,
                  date: fileData.createdAt,
                  type: fileData.type,
                },
                ...oldFolders,
              ];
            });
            setFileData({ fileName: "" });
            setStep(2);
          }}
          other_styles={
            fileData.fileName && fileData.type
              ? ` bg-[#E9724C] text-white w-[179px]`
              : `bg-[#E9724C] opacity-30 text-white w-[179px]`
          }
          button_text={"Upload file"}
          disabled={fileData.fileName && fileData.type ? false : true}
        ></Button>
      </div>
    </DarkOverlay>
  );
}

export function AddFileTwo({ handleCancel, setStep, setAddFile, setIsFolder }) {
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
        Your file has been added successfully!
      </p>
      <Button
        button_type='button'
        handleClick={() => {
          setStep(1);
          setAddFile(false);
          setIsFolder(false);
        }}
        other_styles={`bg-[#E9724C] text-white `}
        button_text={"Continue"}
      ></Button>
    </DarkOverlay>
  );
}
