import React from "react";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
export default function Card({ card_type, target_audience }) {
  return (
    <div className="flex flex-col rounded-[4rem]  p-6 mx-auto max-w-lg text-left text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 ">
      <div className="flex items-baseline gap-2">
        <svg
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
        <h3 className="mb-4 text-[#2F3941] text-[32px] font-semibold">
          {card_type}
        </h3>
      </div>
      <p className="font-light text-[14px] text-gray-500 sm:text-lg ">
        {target_audience}
      </p>
      <div className="flex justify-left items-baseline mt-12 mb-2">
        <span className="mr-2 text-5xl text-[64px] text-[#87929D]  font-normal">
          $
        </span>
        <span className="mr-2 text-5xl  text-[64px] text-[#2F3941] font-normal">
          2900
        </span>
        <span className="text-[#87929D]">per month</span>
      </div>
      <div className="mb-10 rounded-sm bg-[#E6EAFF] w-fit pl-2 pr-2 flex gap-2 text-[#222F51]">
        <Toggle />
        <span>Billed monthly</span>
      </div>
      {/* #4A908A */}
      <Button
        other_styles={`bg-[#222F51] text-white mb-10`}
        button_text={"Select Plan"}
      />

      <ul className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <span className="font-semibold">Starter includes</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-[#222F51] "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Individual configuration</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-[#222F51]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>No setup, or hidden fees</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-[#222F51]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>
            Team size: <span className="font-semibold">1 developer</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-[#222F51]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>
            Premium support: <span className="font-semibold">6 months</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-[#222F51] "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>
            Free updates: <span className="font-semibold">6 months</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
