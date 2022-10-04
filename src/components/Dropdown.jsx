import React from "react";

export default function Dropdown() {
  return (
    <div className="z-10 right-[2%] top-[10%] absolute w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div className="font-medium truncate">name@flowbite.com</div>
      </div>
      {/* <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownInformationButton"
      ></ul> */}
      <div className="py-1">
        <a
          href="#"
          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}
