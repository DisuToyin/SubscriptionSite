import React from "react";
import Button from "./Button";

export default function SearchInput({ addButton = false, placeHolder }) {
  return (
    <form>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-[2px] border outline-none"
          placeholder={placeHolder}
          required
        />
        {addButton === true && <Button />}
      </div>
    </form>
  );
}
