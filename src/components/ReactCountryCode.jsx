import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ReactCountryCode() {
  const [state, setState] = useState();
  return (
    <div>
      <PhoneInput
        className="reactPhoneFlag"
        country={"us"}
        value={state}
        onChange={() => setState()}
      />
    </div>
  );
}
