import React from "react";
import Heading from "../../../components/Heading";
import TextField from "../../../components/TextField";
import SubmitButton from "../../../components/SubmitButton";

export default function SignUpNumber(){
    return <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[410px] h-[450px]">
            <Heading head="SignUp"/>
            <div className='ml-[20px] font-IBM-Plex-Mono text-[17px] font-semibold'>OTP Verification</div>
            <TextField head="Phone number"/>
            <SubmitButton action="Continue"/>
        </div>
    </div>
}