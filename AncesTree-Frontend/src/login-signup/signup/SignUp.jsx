import React from "react";
import Heading from "../../components/Heading";
import TextField from "../../components/TextField";
import SubmitButton from "../../components/SubmitButton";

export default function SignUp(){
    return <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[410px] h-[600px]">
            <Heading head="SignUp"/>
            <TextField head="Name"/>
            <TextField head="Email"/>
            <TextField head="Choose Password"/>
            <TextField head="Confirm Password"/>
            <SubmitButton action="Continue"/>
        </div>
    </div>
}