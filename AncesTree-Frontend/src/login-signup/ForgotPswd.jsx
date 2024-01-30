import React from 'react';
import Heading from '../components/Heading';
import TextField from '../components/TextField';
import SubmitButton from '../components/SubmitButton';

export default function ForgotPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[424px] h-[450px]">
                
            <Heading head="Login"/>
              <div className='ml-[20px] font-IBM-Plex-Mono text-[17px] font-semibold'>Forgot Password?</div>
              <TextField head="Please enter the phone number you used to register" type="text"/>
              
              
              <SubmitButton action="Continue"/>

            </div>
        </div>
  );
};
