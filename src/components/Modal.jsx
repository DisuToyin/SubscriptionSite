import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  title,
  children,
  accept_btn,
  decline_btn,
}) {
  console.log(showModal);
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="false"
      className={`${
        showModal === true ? "" : "hidden"
      } inset-0 overflow-hidden h-full w-full bg-gray-600 bg-opacity-50  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
    >
      <div className="relative p-4 w-full left-[50%] translate-x-[-50%] top-[5rem] max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-[2px] shadow ">
          <div className="flex justify-between items-start p-4 rounded-t border-b ">
            <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 space-y-6">{children}</div>
          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 ">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[2px] text-sm px-5 py-2.5 text-center "
            >
              {accept_btn}
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              onClick={() => setShowModal(false)}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[2px] border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
            >
              {decline_btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
