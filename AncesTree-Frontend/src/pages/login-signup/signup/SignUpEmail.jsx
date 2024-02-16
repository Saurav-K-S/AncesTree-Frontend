import React, { useRef, useState } from "react";
import Heading from "../../../components/Heading";
import TextField from "../../../components/TextField";
import SubmitButton from "../../../components/SubmitButton";
import PasswordChecklist from "react-password-checklist";
import Alert from "../../../components/Alert";

var psswdcheck = false;

export default function SignUpEmail(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const [passwordAgain, setPasswordAgain] = useState("");


  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordAgainInputRef = useRef(null);

  function Continue() {
    if (psswdcheck) {
      props.indexFunc(1);
    } else {
      setAlertMsg("Invalid Password!"), setShowAlert(true);
      props.nameRef.current.value = "";
      props.emailRef.current.value = "";
      props.passwordRef.current.value = "";
      props.passwordAgainRef.current.value = "";
    }
  }
  const closeAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[410px] h-[650px]">
        <Heading head="SignUp" />
        <TextField head="Name" func={props.nameFunc} inputRef={nameInputRef} />
        <TextField
          head="Email"
          func={props.emailFunc}
          inputRef={emailInputRef}
          type="email"
        />
        <TextField
          head="Choose Password"
          func={props.passwordFunc}
          inputRef={passwordInputRef}
          type="password"

        />
        <TextField
          head="Confirm Password"
          func={setPasswordAgain}
          inputRef={passwordAgainInputRef}
          type="password"

        />
        <PasswordChecklist
          className="text-[12px]"
          rules={["minLength", "number", "match"]}
          minLength={6}
          value={props.passwordValue}
          valueAgain={passwordAgain}
          onChange={(isValid) => {
            psswdcheck = isValid;
          }}
          iconSize={15}
          invalidColor="#520000"
          validColor="#FFDC5F"
        />
        <SubmitButton action="Continue" func={Continue} />
        {showAlert && <Alert alertMsg={alertMsg} closeAlert={closeAlert} />}
      </div>
    </div>
  );
}
