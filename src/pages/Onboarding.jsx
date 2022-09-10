import React from "react";
import onboard from "../assets/White.svg";
import Input from "../components/Input";
import OnboardModal from "../components/OnboardModal";
import Button from "../components/Button";

export default function Onboarding() {
  // const
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 2.7fr " }}>
      <div className="h-[100vh] bg-[#161E33]">
        <div>
          <img src={onboard} alt="logo" />
        </div>
      </div>
      <div className="h-[100vh] bg-[#222F51] flex content-center items-center">
        <OnboardModal title={"Set up Account"}>
          <Input
            label={"What is your company/business name?"}
            isRequired={true}
            inputType={"text"}
          />
          <Input
            label={"What industry does your company operate in?"}
            isRequired={true}
            inputType={"text"}
          />
          <Button
            other_styles={`bg-[#E9724C] text-white mb-10`}
            button_text={"Next"}
          />
        </OnboardModal>
        <OnboardModal title={"More Infos"}>
          <Input
            label={"What is your company/business name?"}
            isRequired={true}
            inputType={"text"}
          />
          <Input
            label={"What industry does your company operate in?"}
            isRequired={true}
            inputType={"text"}
          />
          <Button
            other_styles={`bg-[#E9724C] text-white mb-10`}
            button_text={"Next"}
          />
        </OnboardModal>
      </div>
    </div>
  );
}
