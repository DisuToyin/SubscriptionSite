import React from "react";
import MasterCard from "../assets/Symbol.svg";
import Dots from "../assets/Dots.svg";
import Radio from "../assets/Radio Button.svg";
export default function PaymentBox() {
  //   const [check, setCheck] = useState(false);
  //   const handleRadioCheck = () => {
  //     setCheck(!check);
  //   };
  return (
    <div className="border-[1px]  mx-8 mt-4">
      <div className="flex w-[100%] border-b-[1px] justify-between">
        <span className=" px-4 py-2 ">Payment Method</span>
        <span className="px-4 py-2 ">Remove Payment Method</span>
      </div>
      <div className="flex">
        <div className="flex border-[2px] border-[#222F51] m-4 p-2 gap-8 cursor-pointer items-center rounded-lg">
          <div>
            <img src={MasterCard} alt="mastercardlogo" />
          </div>
          <div>
            <span className="text-[#222F51] font-bold">****2345</span>
            <br />
            <span className=" flex gap-4 text-[#87929D]">
              <span>MasterCard 10/26 </span> <img src={Dots} alt="s" />{" "}
              <span>Update</span>
            </span>
          </div>

          <div>
            <img src={Radio} alt="radio" />
            {/* <input
              onClick={handleRadioCheck}
              checked={check}
              //   id="default-radio-2"
              type="radio"
              value=""
              //   name="default-radio"
              className="w-6 h-6 text-[#222F51] bg-[#222F51] border-[#222F51] focus:ring-[#222F51]"
            /> */}
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}
