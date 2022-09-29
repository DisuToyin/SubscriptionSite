import React, { useState } from "react";
import C from "../assets/Frame 87.svg";
import Input from "../components/Input";
import Button from "../components/Button";
// import OnboardModal from "../components/OnboardModal";
import { useNavigate } from "react-router-dom";
import PopModal from "../components/PopUpModal";

import { useDispatch } from "react-redux";
import { login } from "../slices/authslice";
import Spinner from "../components/Spinner";

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [responseText, setResponseText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleClick = async () => {
    setIsLoading(true);
    const result = await dispatch(login(formData));
    if (result.payload.status === 200) {
      localStorage.setItem("user_id", result.payload.data.user_id);
      localStorage.setItem("first_name", result.payload.data.first_name);
      localStorage.setItem("last_name", result.payload.data.last_name);

      //check if customer has active sub
      navigate("/onboard");
    } else {
      setResponseText(result.payload);
      setIsLoading(false);
      setShowModal(true);
      await timeout(2000);
      setShowModal(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-2 [h-100vh] fixed">
      <div className="md:hidden">
        <img alt="" className="" src={C} />
      </div>
      <div class="md:relatve md:w-[100%] ">
        <div class="shadow-md max-w-[560px] pl-[3rem] pr-[3rem] md:pl-[1.5rem] md:pr-[1.5rem] pt-[1rem] pb-[1rem] ml-[auto] mt-[20%] mr-[auto] ">
          <form>
            <h2 class="text-xl mb-6 font-semibold">
              Sign in to your workspace
            </h2>
            <Input
              label={"Email"}
              value={formData.email}
              name="email"
              placeHolder={"Email"}
              handleInputChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              isRequired={true}
              inputType={"text"}
            />
            <div class="mb-6">
              <Input
                label={"Password"}
                value={formData.password}
                name="password"
                placeHolder={"Password"}
                handleInputChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                isRequired={true}
                inputType={"text"}
                marginBtm={"mb-0"}
              />
              <p class="text-[12px] text-[#E9724C] font-normal text-right">
                <a href="/recover-password"> Forgot password</a>
              </p>
            </div>

            <Button
              button_type="button"
              handleClick={handleClick}
              other_styles={`bg-[#E9724C] text-white mb-5`}
              button_text={isLoading ? <Spinner /> : `Next`}
            />

            <p class="text-center mt-[5%] font-normal">
              Don't have an account ?{" "}
              <a href="/register" class="text-[#E9724C] font-semibold">
                Sign up
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
      {showModal === true && (
        <PopModal
          showModal={showModal}
          error={true}
          message={responseText}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
  //   https://snazzy-cannoli-c82985.netlify.app/
};
