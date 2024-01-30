import React from "react";
import Heading from "../../components/Heading";
import TextField from "../../components/TextField";
import SubmitButton from "../../components/SubmitButton";

export default function SignUp(){
    function Submit() {
        console.log(psswdcheck);
        console.log(phonenumber);
        console.log(password);
        if (psswdcheck) {
          
          axios.post('https://ancestree-backend.onrender.com/api/v1/user/login', {
              mobileNumber:phonenumber,
              password:password
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
        } else {
          
        }
    }

    return (<div className="w-full h-screen flex justify-center items-center">
        <div className="w-[410px] h-[650px]">
            <Heading head="SignUp"/>
            <TextField head="Name"/>
            <TextField head="Email"/>
            <TextField head="Choose Password"/>
            <TextField head="Confirm Password"/>
            <SubmitButton action="Continue" func={Submit}/>
        </div>
    </div>
    )
}