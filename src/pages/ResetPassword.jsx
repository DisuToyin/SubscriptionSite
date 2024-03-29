import React from "react";
import C from "../assets/Frame 87.svg";

export const ResetPassword = () => {
  return (
    <div className="flex">
      <div className="w-1/2 fixed md:hidden bg-[#1A243F] h-[100vh]">
        {/* <div class="mt-[35%]  max-w[560px] ml-[auto] mr-[auto]"></div> */}
        <img alt="" className="object-scale-down" src={C} />
      </div>
      <div class="w-1/2 md:w-[100%] md:relative fixed right-0 h-[100vh]">
        <div class="shadow-md max-w-[560px] pl-[3rem] pr-[3rem] md:pl-[1.5rem] md:pr-[1.5rem] pt-[1rem] pb-[1rem] ml-[auto] mt-[15%] mr-[auto] ">
          <form>
            <h2 class="text-xl mb-6 font-semibold">Reset your password</h2>
            <div class="mb-2">
              <label
                for="email"
                class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="rounded-[2px] pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0   border-solid border-[1px] text-gray-900  focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                placeholder="Enter your work email"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="text"
                class="  block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
              >
                Reset Code
              </label>
              <input
                type="text"
                id="text"
                className="rounded-[2px] pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0   border-solid border-[1px] text-gray-900   focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
                placeholder="Enter the code sent to your email"
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="  block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                class="rounded-[2px] pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0   border-solid border-[1px] text-gray-900   focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
                placeholder="Enter a new password"
              />
            </div>

            <button
              type="submit"
              class="text-white mt-[2%] w-[100%] pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base bg-[#E9724C] hover:bg-[#e98260] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[2px] "
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  //   https://snazzy-cannoli-c82985.netlify.app/
};
