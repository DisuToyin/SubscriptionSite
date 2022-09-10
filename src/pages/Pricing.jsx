import React from "react";

import Card from "../components/Card";
import { Navbar } from "../components/Navbar";
import Toggle from "../components/Toggle";

export const Pricing = () => {
  // const [plan, setPlan] = useState("monthly");
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar pageName="pricing" margin_btm={"mb-[5%]"} />
      <div className=" h-[200vh]">
        <div className="mb-[3%] text-center">
          <h1 className="text-[36px] font-bold text-[#2F3941]">
            Ready to get starterd?{" "}
          </h1>
          <span className="text-[#87929D]">
            Select a plan tailored to your needs
          </span>
          <div className="flex text-[#87929D] mt-[2rem] mb-[2rem] gap-4 justify-center">
            <span>Annually</span>
            <Toggle />
            <span>Monthly</span>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-2  pl-[48px] pr-[48px] lg:pl-[30px] lg:pl-[30px] max-width-[688px]">
          <Card card_type={"Starter"} target_audience={"For start-ups"} />
          <Card card_type={"Business"} target_audience={"For marketers"} />
          <Card card_type={"Suite"} target_audience={"For large companies"} />
        </div>
      </div>
    </div>
  );
};
