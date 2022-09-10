import React, { useState } from "react";
import onboard from "../assets/White.svg";
import Input from "../components/Input";
import OnboardModal from "../components/OnboardModal";
import Button from "../components/Button";
import RectangularCard from "../components/RectangularCard";
import Vect from "../assets/Vector.svg";
import tasks from "../data/data";
import book from "../assets/book.svg";

export default function Onboarding() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    telephone: "",
    aboutUs: "",
    taskId: "",
    taskName: "",
  });

  console.log(formData);

  const handleClick = (e) => {
    e.preventDefault();
    setFormStep((curr) => curr + 1);
    console.log("here");
  };

  const handleOnboarding = (e) => {};

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 2.7fr " }}>
      <div className="h-[100vh] bg-[#161E33]">
        <div>
          <img src={onboard} alt="logo" />
        </div>
      </div>
      <div className="h-[100vh] bg-[#222F51] flex content-center items-center">
        {formStep === 0 && (
          <OnboardModal title={"Set up Account"}>
            <Input
              label={"What is your company/business name?"}
              value={formData.businessName}
              name="businessName"
              handleInputChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              isRequired={true}
              inputType={"text"}
            />
            <Input
              label={"What industry does your company operate in?"}
              value={formData.industry}
              name="industry"
              handleInputChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
              isRequired={true}
              inputType={"text"}
            />
            {formData.businessName === "" || formData.industry === "" ? (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] opacity-30 text-white mb-10`}
                button_text={"Next"}
                disabled={true}
              />
            ) : (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] text-white mb-10`}
                button_text={"Next"}
              />
            )}
          </OnboardModal>
        )}
        {formStep === 1 && (
          <OnboardModal title={"Set up Account"}>
            <Input
              label={"Enter your work/personal phone number"}
              isRequired={true}
              value={formData.telephone}
              name="telephone"
              handleInputChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
              inputType={"number"}
            />
            <Input
              label={"How did you hear about us?"}
              value={formData.aboutUs}
              name="aboutUs"
              handleInputChange={(e) =>
                setFormData({ ...formData, aboutUs: e.target.value })
              }
              isRequired={true}
              inputType={"text"}
            />
            {formData.telephone === "" || formData.aboutUs === "" ? (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] opacity-30 text-white mb-10`}
                button_text={"Next"}
                disabled={true}
              />
            ) : (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] text-white mb-10`}
                button_text={"Next"}
              />
            )}
          </OnboardModal>
        )}

        {formStep === 2 && (
          <OnboardModal
            sub_title="Choose from the options below"
            title={"Create your first task"}
          >
            {tasks.map((task) => {
              return (
                <RectangularCard
                  src={Vect}
                  title={task.task}
                  desc={task.desc}
                />
              );
            })}
            {formData.telephone === "" || formData.aboutUs === "" ? (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] opacity-30 text-white mb-10`}
                button_text={"Next"}
                disabled={true}
              />
            ) : (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] text-white mb-10`}
                button_text={"Next"}
              />
            )}
          </OnboardModal>
        )}
        {formStep === 3 && (
          <OnboardModal title={"Create a new task"}>
            <Input
              label={"Task Name"}
              value={formData.taskName}
              name="aboutUs"
              handleInputChange={(e) =>
                setFormData({ ...formData, taskName: e.target.value })
              }
              isRequired={true}
              inputType={"text"}
            />
            {formData.taskName === "" ? (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] opacity-30 text-white mb-10`}
                button_text={"Next"}
                disabled={true}
              />
            ) : (
              <Button
                button_type="button"
                handleClick={handleClick}
                other_styles={`bg-[#E9724C] text-white mb-10`}
                button_text={"Next"}
              />
            )}
          </OnboardModal>
        )}
        {formStep === 4 && (
          <OnboardModal
            title_styles="text-center"
            title={"Thanks for choosing carril"}
          >
            <img src={book} alt="booka call" />
            <Button
              button_type="button"
              handleClick={handleOnboarding}
              other_styles={`bg-[#E9724C] text-white mb-10`}
              button_text={"Book A Call"}
            />
          </OnboardModal>
        )}
      </div>
    </div>
  );
}
