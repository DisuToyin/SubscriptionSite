import React from "react";
import { Navbar } from "../components/Navbar";

export const Register = () => {
  return (
    <div class="bg-[#E5E5E5]">
      <Navbar />
      <div class=" h-[200vh]">
        <div class="shadow-md sm:w-fit w-[688px] h-[711px] mr-[auto] ml-[auto] p-[24px] bg-white">
          <div class="mt-[0]">
            <form>
              <h3 class="font-bold text-[24px] mb-10">Join Carril</h3>
              <div class="flex mb-6">
                <div class="mr-[5%] w-1/2">
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class=" border pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base border-gray-300 text-gray-900 focus:outline-0 focus:ring-[#E9724C] focus:border-[#E9724C] block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-none"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div class="w-1/2">
                  <label
                    for="last_name"
                    class=" block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base border border-gray-300 text-gray-900 rounded-none focus:outline-0 focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0 rounded-none  border-solid border-[1px] text-gray-900  focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                  placeholder="Enter your work email"
                  required=""
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="  block mb-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class=" pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0 rounded-none  border-solid border-[1px] text-gray-900   focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required=""
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                class=" pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base text-white mt-[3%] w-[100%] bg-[#E9724C] hover:bg-[#e98260] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[2px] "
              >
                Next
              </button>

              <p class="mb-[1.5%] text-[#ABABAB] font-bold text-center mt-[3%]">
                OR
              </p>

              <button
                type=""
                class=" pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base border-solid border-[1px] font-bold text-[#222F51] hover:bg-[#222F51] hover:text-[white] border-[#222F51] mt-[3%] w-[100%] bg-[white] focus:ring-4 focus:outline-none focus:ring-blue-300  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[4px] "
              >
                Register with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
