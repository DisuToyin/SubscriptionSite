import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PriceDetails() {
  const { id } = useParams();
  const [plan, setPlan] = useState({
    billing_type: "monthly",
    cost: 3200,
    createdAt: "2022-09-27T04:06:14.056Z",
    features_id: "633276b570bacdb7f7ee4f6d",
    is_default: true,
    sub_tags: "design",
    title: "Suite",
    updatedAt: "2022-09-27T04:06:14.056Z",
    __v: 0,
    _id: "633276b670bacdb7f7ee4f6f",
  });

  const getPlanSummary = async () => {
    const { data } = await axios.get(`/api/plan/${id}`);
    setPlan(data);
  };

  const createPaymentCheckOut = async () => {
    const payload = {
      payment_platform: "stripe",
      plan_id: id,
      user_id: localStorage.getItem("user_id"),
    };
    const { data } = await axios.post(`/api/payment`, payload);
    console.log(data);
  };

  useEffect(() => {
    getPlanSummary();
  }, [id, getPlanSummary]);

  return (
    <div className="">
      <Navbar />
      <div className="h-screen flex">
        <div className="bg-[white] px-[2rem] pt-[2rem]   flex-1 w-[50%]">
          <div className="w-[65%] m-auto">
            <Input
              label={"Card Number"}
              isRequired={true}
              placeHolder={"2344-13482-2344-XXXX"}
              // value={formData.telephone}
              name="telephone"
              // handleInputChange={(e) =>
              //   setFormData({ ...formData, telephone: e.target.value })
              // }
              inputType={"number"}
              extraStyles={"mb-[2rem]"}
            />
            <div className="flex gap-2">
              <Input
                label={"Expiration date"}
                isRequired={true}
                // value={formData.telephone}
                name="telephone"
                placeHolder={"MM-DD-YYYY"}
                // handleInputChange={(e) =>
                //   setFormData({ ...formData, telephone: e.target.value })
                // }
                inputType={"number"}
                extraStyles={"mb-[2rem]"}
              />
              <Input
                label={"CVV"}
                isRequired={true}
                placeHolder={"XXX"}
                // value={formData.telephone}
                name="telephone"
                // handleInputChange={(e) =>
                //   setFormData({ ...formData, telephone: e.target.value })
                // }
                inputType={"number"}
                extraStyles={"mb-[2rem] "}
              />
            </div>
            <Input
              label={"Select Region"}
              isRequired={true}
              // value={formData.telephone}
              name="telephone"
              // handleInputChange={(e) =>
              //   setFormData({ ...formData, telephone: e.target.value })
              // }
              inputType={"text"}
              extraStyles={"mb-[2rem] "}
            />
            <span className=" text-[#474747]">
              <input type="checkbox" className="text-[#E9724C] ml-[0.5rem]" />I
              <span>
                {" "}
                agree to the Privacy Policy, Terms & Conditions for any
                applicable add-ons. I understand my subscription starts today.
              </span>
            </span>
            <Button
              button_type="button"
              handleClick={createPaymentCheckOut}
              other_styles={`bg-[#E9724C] fit text-white mb-10`}
              button_text={`Pay $${plan?.cost}`}
            />
          </div>
        </div>
        <div className="flex-1 px-[2rem] pt-[2rem] bg-[#F8F9F9]  w-[50%]">
          <div className="w-[65%] m-auto">
            <h2 className="border-b-[1px] font-bold border-b-[#E2E2E2] pb-[1.5rem] text-[18px]">
              Summary
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
