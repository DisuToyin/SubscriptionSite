import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

import { useDispatch } from "react-redux";
import { register } from "../slices/authslice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import PopModal from "../components/PopUpModal";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [responseText, setResponseText] = useState("");

  const [step, setStep] = useState(0);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    const result = await dispatch(register(user));
    if (result.payload.status === 201) {
      setStep((cur) => cur + 1);

      localStorage.setItem("user_id", result.payload.data.user_id);
      localStorage.setItem("first_name", result.payload.data.first_name);
      localStorage.setItem("last_name", result.payload.data.last_name);

      navigate("/pricing");
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
    <div className="bg-[#E5E5E5]">
      <Navbar pageName="register" margin_btm={"mb-[10%]"} />
      {step === 0 && (
        <div className=" h-[200vh]">
          <div className="shadow-md sm:w-fit w-[688px] h-[550px] mr-[auto] ml-[auto] p-[24px] bg-white">
            <div className="mt-[0]">
              <form onSubmit={onSubmit}>
                <h3 className="font-bold text-[24px] mb-10">Join Carril</h3>
                <div className="flex mb-6">
                  <div className="mr-[5%] w-1/2">
                    <label className="block mb-2 text-sm font-normal text-gray-900 ">
                      First name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      id="first_name"
                      className=" border pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base border-gray-300 text-gray-900 focus:outline-0 focus:ring-[#E9724C] focus:border-[#E9724C] block w-full  rounded-[2px]"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className=" block mb-2 text-sm font-normal text-gray-900 ">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base border border-gray-300 text-gray-900 rounded-[2px] focus:outline-0 focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 "
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-normal text-gray-900 ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0 rounded-[2px]  border-solid border-[1px] text-gray-900  focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 "
                    placeholder="Enter your work email"
                    required=""
                  />
                </div>
                <div className="mb-6">
                  <label className="  block mb-2 text-sm font-normal text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base focus:outline-0 rounded-[2px]  border-solid border-[1px] text-gray-900   focus:ring-[#E9724C] focus:border-[#E9724C] block w-full p-2.5 "
                    required=""
                    placeholder="Enter your password"
                  />
                </div>

                {isLoading ? (
                  <button
                    type="submit"
                    className=" pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base text-white mt-[3%] w-[100%] bg-[#E9724C] hover:bg-[#e98260] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-2.5 text-center  rounded-[2px] "
                  >
                    <Spinner />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className=" pl-[20px] pr-[20px] pt-[16px] pb-[16px] text-base text-white mt-[3%] w-[100%] bg-[#E9724C] hover:bg-[#e98260] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-5 py-2.5 text-center  rounded-[2px] "
                  >
                    Next
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
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
};
