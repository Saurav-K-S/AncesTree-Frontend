import React, { useState, useRef } from "react";
import SignUpEmail from "./SignUpEmail";
import SignUpNumber from "./SignUpNumber";
import OTP from "./OTP";

export default function SignUp() {
  const [index, setIndex] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [number, setNumber] = useState();

  const [otpOG, setOtpOG] = useState("");

  switch (index) {
    case 0:
      return (
        <SignUpEmail
          indexFunc={setIndex}
          nameFunc={setName}
          emailFunc={setEmail}
          passwordFunc={setPassord}
          passwordValue={password}
        />
      );
    case 1:
      return (
        <SignUpNumber
          indexFunc={setIndex}
          numberFunc={setNumber}
          numberValue={number}
          otpFunc={setOtpOG}
        />
      );
    case 2:
      return (
        <OTP
          indexFunc={setIndex}
          otpOGVal={otpOG}
          nameValue={name}
          emailValue={email}
          passwordValue={password}
          numberValue={number}
        />
      );
    default:
      break;
  }
}
