import React from "react";

import Card from "../components/Card";
import { Navbar } from "../components/Navbar";

export const Pricing = () => {
  // const [plan, setPlan] = useState("monthly");
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar pageName="pricing" />
      <div className=" h-[200vh]">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-8  pl-[48px] pr-[48px] max-width-[688px]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
