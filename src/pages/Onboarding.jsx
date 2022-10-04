import React, { useState } from "react";
import onboard from "../assets/White.svg";
import Input from "../components/Input";
import OnboardModal from "../components/OnboardModal";
import Button from "../components/Button";
import RectangularCard from "../components/RectangularCard";
import Vect from "../assets/Vector.svg";
import tasks from "../data/data";
import book from "../assets/book.svg";
import arrow from "../assets/arrowright.svg";
import { useSelector } from "react-redux";
import CountryCodeWidget from "../components/CountryCodeWidget";
import "../pages/styles.css";
import RichTextEditor from "../components/RichTextEditor";
import FIleUpload from "../components/FIleUpload";
import DropDown from "../components/Dropdown";
import WhiteArrowDown from "../assets/whiteArrowUp.svg";

export default function Onboarding() {
  const [formStep, setFormStep] = useState(5);
  const [showDrop, setShowDrop] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    telephone: "",
    aboutUs: "",
    taskId: "",
    taskName: "",
  });

  const { user } = useSelector((state) => state.auth);

  const handleClick = (e) => {
    e.preventDefault();
    setFormStep((curr) => curr + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setFormStep((curr) => curr - 1);
  };

  const handleOnboarding = (e) => {};

  return (
    <div
      className="h-[100vh] "
      style={{ display: "grid", gridTemplateColumns: "1.3fr 2.7fr " }}
    >
      <div className="bg-[#161E33]">
        <div className="mt-[23px] ml-[28px]">
          <img src={onboard} alt="logo" />
        </div>
        <div className="text-[#C6C6C6] mt-[100px] ml-[20%] md:ml-[10%]">
          <p className="text-[14px]">
            Welcome to Carril, {user?.data?.first_name}!
          </p>
          <h2 className="text-[24px] py-[16px] font-bold">
            Set Up Your Account
          </h2>
          <ul className="">
            {formStep <= 1 ? (
              <li className="flex gap-6">
                <img src={arrow} alt="arrorw" />{" "}
                <span className="text-[#FFFFFF]">Account details</span>
              </li>
            ) : (
              <li className="flex gap-7">
                <div></div>
                <span className="text-[#ABABAB]">Account details</span>
              </li>
            )}
            {formStep > 1 && formStep <= 4 ? (
              <li className="flex gap-6">
                <img src={arrow} alt="arrorw" />{" "}
                <span className="text-[#FFFFFF]">Setup task brief</span>
              </li>
            ) : (
              <li className="flex gap-7">
                <div></div>
                <span className="text-[#ABABAB]">Setup task brief</span>
              </li>
            )}
            {formStep === 5 ? (
              <li className="flex gap-6">
                <img src={arrow} alt="arrorw" />{" "}
                <span className="text-[#FFFFFF]">Submit</span>
              </li>
            ) : (
              <li className="flex gap-7">
                <div></div>
                <span className="text-[#ABABAB]">Submit</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="block bg-[#222F51]">
        {formStep < 5 ? (
          <div className="mt-[20px]  mr-[28px] bg-[#E5E5E5] text-[11px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
            {user?.data?.first_name[0] + user?.data?.last_name[0]}
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="mt-[20px]  mr-[20px] bg-[#E5E5E5] text-[11px] pt-[7px] m-[auto] text-[white] text-center rounded-[50%]  h-[30px] w-[30px] ">
              {user?.data?.first_name[0] + user?.data?.last_name[0]}
            </div>
            <div className="mt-[30px] cursor-pointer mr-[28px]">
              <img
                src={WhiteArrowDown}
                onClick={() => setShowDrop(!showDrop)}
                alt="arrowupdropdown"
              />
              {showDrop === true && <DropDown />}
            </div>
          </div>
        )}
        <div className="flex mt-[7%] content-center items-center">
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
                extraStyles={"mb-[2rem]  "}
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
                extraStyles={"mb-[2rem]"}
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
              <>
                Enter your work/personal phone number
                <div className="flex items-center">
                  <CountryCodeWidget />
                  <Input
                    // label={"Enter your work/personal phone number"}
                    isRequired={true}
                    value={formData.telephone}
                    name="telephone"
                    handleInputChange={(e) =>
                      setFormData({ ...formData, telephone: e.target.value })
                    }
                    inputType={"number"}
                    extraStyles={"mb-[2rem]"}
                  />
                </div>
              </>
              <Input
                label={"How did you hear about us?"}
                value={formData.aboutUs}
                name="aboutUs"
                handleInputChange={(e) =>
                  setFormData({ ...formData, aboutUs: e.target.value })
                }
                isRequired={true}
                inputType={"text"}
                extraStyles={"mb-[2rem]"}
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
                extraStyles={"mb-[2rem]"}
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
            <OnboardModal title={"New Task Request"}>
              <span className="mb-10 text-[#474747]">Task Description</span>
              <RichTextEditor />
              <span className="mb-10 text-[#474747]">Files</span>
              <FIleUpload />
              <div className="flex justify-between ">
                <Button
                  button_type="button"
                  handleClick={handleBack}
                  other_styles={`bg-[white] text-[black] border-gray-500 border-[2px] mb-10 w-min`}
                  button_text={"Back"}
                />
                <Button
                  button_type="button"
                  handleClick={handleClick}
                  other_styles={`bg-[#E9724C] text-white mb-10 w-min`}
                  button_text={"Submit"}
                />
              </div>
            </OnboardModal>
          )}
          {formStep === 5 && (
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
    </div>
  );
}
