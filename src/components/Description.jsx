import React from "react";

function Description({ description }) {
  return (
    <div className="mt-4 w-[90%] py-4 px-4 h-[fit-content] bg-[#F8F9F9]">
      <div className="mb-4">
        <span className="text-[#474747]">Task Name</span> <br />
        <span className="text-[#ABABAB]">{description?.task_name}</span>
      </div>
      <div>
        <span className="text-[#474747]">Task Description</span>
        <br />
        <span className="text-[#ABABAB]">{description?.task_description}</span>
      </div>
    </div>
  );
}

export default Description;
