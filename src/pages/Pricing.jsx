import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import Card from "../components/Card";
import { Navbar } from "../components/Navbar";
import Toggle from "../components/Toggle";

export const Pricing = () => {
  const [plans, setPlans] = useState([]);

  const getPlans = async () => {
    console.log("plans loading ");
    const data = await axios.get("/api/plan");
    console.log(data?.data?.result);
    setPlans(data?.data?.result);
  };

  useEffect(() => {
    getPlans();
  }, []);

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
          {plans?.map((plan) => {
            return (
              // <Link to={`/pricing/${plan?._id}`}>
              <Card
                key={plan?._id}
                id={plan?._id}
                card_type={plan?.title}
                target_audience={"For start-ups"}
                features_list={plan?.features_id?.feature_name}
                cost={plan?.cost}
              />
              // </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
