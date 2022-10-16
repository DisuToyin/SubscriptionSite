import Button from "../Button";
import warning from "../../assets/warning.svg";
import successIcon from "../../assets/success.svg";
import closeBtn from "../../assets/close-btn.svg";
import DarkOverlay from "../DarkOverlay";

export function StepOne({ handleCancel, folderName, setStep }) {
  return (
    <DarkOverlay>
      <div>
        <div className='flex justify-between items-start'>
          <div className='flex'>
            <img
              src={warning}
              alt='warning sign'
              className='bg-[#FFEBEB] mr-4 p-2'
            />
            <div>
              <h4 className='text-[20px] font-bold mb-1'>
                Delete {`${folderName}`}?
              </h4>
              <p className='text-[#777777] text-[14px]'>
                Are you sure you want to delete this folder?
              </p>
            </div>
          </div>
          <img
            src={closeBtn}
            alt='close modal'
            onClick={handleCancel}
            className='cursor-pointer'
          />
        </div>
        <div className='flex justify-end'>
          <Button
            button_type='button'
            handleClick={handleCancel}
            other_styles={`bg-[#fffff] text-black w-[100px] mx-3`}
            button_text={"Cancel"}
          />
          <Button
            button_type='button'
            handleClick={() => {
              setStep(2);
            }}
            other_styles={`bg-[#D93F4C] text-white w-[100px] mx-3`}
            button_text={"Delete"}
          />
        </div>
      </div>
    </DarkOverlay>
  );
}

export function StepTwo({
  deleteFolder,
  i,
  setStep,
  setDeleteItem,
  setIsFolder,
}) {
  return (
    <DarkOverlay>
      <div className='flex justify-end'>
        <div className='flex justify-between items-start w-[60%]'>
          <div>
            <img
              src={successIcon}
              alt='success sign'
              className='bg-[#EDF8F4] mx-auto p-2'
            />
            <div>
              <h4 className='text-[20px] font-bold mt-[24px]'>
                Folder deleted
              </h4>
            </div>
          </div>
          <img
            src={closeBtn}
            alt='close modal'
            onClick={() => {
              setStep(1);
              deleteFolder(i);
              setDeleteItem(false);
              setIsFolder(false);
            }}
            className='cursor-pointer'
          />
        </div>
        <div className='flex justify-end'></div>
      </div>
    </DarkOverlay>
  );
}
