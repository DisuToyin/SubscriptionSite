import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
import bell from "../assets/notification.svg";
import line from "../assets/Line 8.svg";
import PlansCard from "../components/PlansCard";
import PlansCardCancel from "../components/PlansCardCancel";
import PaymentBox from "../components/PaymentBox";

export default function Plans() {
  const [open, setOpen] = useState(true);

  const firstname = localStorage.getItem("first_name");
  const lastname = localStorage.getItem("last_name");
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`w-[100%] ${
          open ? "ml-[17rem]" : "ml-[4rem]"
        }  duration-500`}
      >
        <div
          className="grid my-3  mx-8"
          style={{ gridTemplateColumns: "2fr 3fr" }}
        >
          <h1 className="text-[28px] font-bold">Plans</h1>
          <div className=" flex gap-4 top-[.2rem] justify-end items-center">
            <SearchInput className="" placeHolder={"Search by task name"} />
            <img className="w-[24px] h-[24px]" src={bell} alt="fix" />
            <img src={line} alt="fix" />
            <div className="bg-[#E5E5E5] text-[11px] pt-[7px]  text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
              {firstname?.charAt(0)}
              {lastname?.charAt(0)}
            </div>
          </div>
        </div>
        <hr className="mt-[1rem]"></hr>
        <div className="flex gap-4 mt-8 px-8 mx-auto max-w-[1200px]">
          <PlansCardCancel
            key={"e23w4"}
            id={"sjtsgh"}
            card_type={"Starter"}
            target_audience={"For start-ups"}
            features_list={["plan", "features", "id", "feature", "name"]}
            cost={5000}
          />
          <PlansCard
            key={"e23w4"}
            id={"sjtsgh"}
            card_type={"Business"}
            target_audience={"For start-ups"}
            features_list={["plan", "features", "id", "feature", "name"]}
            cost={5000}
          />
          <PlansCard
            key={"e23w4"}
            id={"sjtsgh"}
            card_type={"Suite"}
            target_audience={"For start-ups"}
            features_list={["plan", "features", "id", "feature", "name"]}
            cost={5000}
          />
        </div>
        <hr className="mt-[1rem]"></hr>
        <PaymentBox />
        <div className="mb-10"></div>
      </div>
    </div>
  );
}
