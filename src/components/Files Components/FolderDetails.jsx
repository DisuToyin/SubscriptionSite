import miniFolder from "../../assets/mini-folder.svg";
import Button from "../Button";

export default function FolderDetails({ folderName, date, setDeleteItem }) {
  return (
    <div className='flex-col w-[100%]'>
      <div className='flex items-center mb-[24px]'>
        <img src={miniFolder} alt='folder' className='h-[24px] w-[24px]' />
        <h5 className='ml-2 font-semibold text-[18px] text-[#222F51]'>
          {folderName}
        </h5>
      </div>
      <p className='mb-2 text-[#4C577C] '>
        Contains: <span className='text-bold'>Empty folder</span>
      </p>
      <p className='mb-2 text-[#4C577C] '>
        Created: <span className='text-bold'>{date}</span>
      </p>

      <Button
        button_type='button'
        other_styles={`bg-[#fffff] text-[#222F51] w-[100%] mt-5 font-bold border border-[#222F51]`}
        button_text={"Open folder"}
      ></Button>
      <Button
        button_type='button'
        other_styles={`bg-[#fffff] text-[#222F51] w-[100%] font-bold border border-[#222F51]`}
        button_text={"Add files to folder"}
      ></Button>
      <Button
        button_type='button'
        other_styles={`bg-[#E6EAFF] text-[#222F51] w-[100%] font-bold border border-[#222F51] `}
        button_text={"Rename folder"}
      ></Button>
      <Button
        button_type='button'
        other_styles={`bg-[#fffff] text-[#D93F4C] w-[100%] font-bold border border-[#D93F4C]`}
        button_text={"Delete"}
        handleClick={() => setDeleteItem(true)}
      ></Button>
    </div>
  );
}
