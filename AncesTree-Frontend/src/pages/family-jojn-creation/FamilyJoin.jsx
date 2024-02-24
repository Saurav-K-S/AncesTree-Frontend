import React from "react";
import TextField from "../../components/TextField";
import SubmitButton from "../../components/SubmitButton";
import Heading from "../../components/Heading";

export default function FamilyJoin(props) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Heading head={"Welcome " + props.name} />
      <div className="ml-32">
        <div className="text-[17px] font-semibold ml-6  font-IBM-Plex-Mono ">
          Join a Family
        </div>
        <TextField
          head="Please enter the referral id of your family"
          value="text"
        />
        <SubmitButton action="Continue" />
      </div>
    </div>
  );
}
