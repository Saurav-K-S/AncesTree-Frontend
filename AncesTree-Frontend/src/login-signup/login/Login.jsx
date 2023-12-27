import React from "react";
import { Link } from 'react-router-dom';
import Heading from "../../components/Heading";
import TextField from "../../components/TextField";
import SubmitButton from "../../components/SubmitButton";

export default function Login(){
        return<div className="w-full h-screen flex justify-center items-center">
            <div className="w-[410px] h-[450px]">
                
                <Heading head="Login" />
                <TextField head="Phone number" type="email"/>
                <TextField head="Password" type="password"/>
                <div className=" flex justify-end text-[13px] mt-[5px] text-[#6A6A6A] font-IBM-Plex-Mono" >
                    <Link to="/forgot-password">Forgot password</Link>
                </div>

                <SubmitButton action="Login"/>
            </div>
        </div>
}