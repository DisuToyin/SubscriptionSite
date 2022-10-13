import React from "react";
import Toggle from "./Toggle";
import Button from "./Button";
import "../pages/styles.css";

export default function PlansCard({
  card_type,
  target_audience,
  features_list = [],
  cost,
  id,
}) {
  return (
    <div
      onMouseUp={() => {
        console.log("on mouse hover");
      }}
      className="specialHover flex flex-col w-[40%] rounded-[4rem] p-4 mx-auto  text-left text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 "
    >
      <div className="flex items-baseline gap-2">
        <svg
          className="svgElement"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.24 12.24C21.3658 11.1142 21.9983 9.58718 21.9983 7.995C21.9983 6.40281 21.3658 4.87584 20.24 3.75C19.1142 2.62415 17.5872 1.99166 15.995 1.99166C14.4028 1.99166 12.8758 2.62415 11.75 3.75L5 10.5V19H13.5L20.24 12.24Z"
            stroke="#222F51"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 8L2 22"
            stroke="#222F51"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 15H9"
            stroke="#222F51"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 className=" mb-2 text-[#2F3941] text-[32px] font-semibold">
          {card_type}
        </h3>
      </div>
      <p className="font-light text-[14px] text-gray-500 sm:text-lg ">
        {target_audience}
      </p>
      <div className="flex justify-left items-baseline mt-2 mb-2">
        <span className=" mr-2 text-5xl text-[32px] text-[#C1C7CC]  font-normal">
          $
        </span>
        <span className="priceTag mr-2 text-5xl  text-[32px] text-[#2F3941] font-normal">
          {cost}
        </span>
        <span className="priceTag text-[#87929D]">per month</span>
      </div>
      <div className="billingFlag mb-4 rounded-sm bg-[#E6EAFF] w-fit pl-2 pr-2 flex gap-2 text-[#222F51]">
        <Toggle />
        <span>Billed monthly</span>
      </div>
      {/* #4A908A */}

      <ul className="mb-2 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <span className="font-semibold">{card_type} includes</span>
        </li>
        {features_list?.map((feat) => {
          return (
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#222F51] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feat}</span>
            </li>
          );
        })}
      </ul>

      <Button
        other_styles={`bg-[#222F51] text-white mb-4`}
        button_text={"Cancel Plan"}
      />
    </div>
  );
}
