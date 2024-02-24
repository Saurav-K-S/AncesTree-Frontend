import React from "react";
import Heading from "../../components/Heading";
import SubmitButton from "../../components/SubmitButton";

export default function FamilyHistory(props) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Heading head={"Welcome " + props.name} />
      <div className="ml-32">
        <div className="flex justify-start items-center ml-6 mt-3 mb-4">
          <div className="w-[52px] h-[10px] border-black border-[1px] rounded-[5px] border-dashed bg-[#FFEEB2]"></div>
          <div className="w-[52px] h-[10px] border-black border-[1px] rounded-[5px] border-dashed bg-[#FFEEB2]"></div>
          <div className="w-[52px] h-[10px] border-black border-[1px] rounded-[5px] border-dashed"></div>
        </div>
        <div className="text-[17px] font-semibold ml-6  font-IBM-Plex-Mono ">
          Create a Family
        </div>
        <div className="ml-[22px] mt-[20px]">
          <div className="w-[425px]  text-[14px] font-IBM-Plex-Mono">
          Please enter the history of your family
          </div>
          <div className="text-[13px] font-IBM-Plex-Mono text-black">
            <textarea

            //   ref={inputRef}
            //   onChange={(e) => props.func(e.target.value)}
            placeholder="Enter the history of your family"

              className="resize-none bg-[#FEFFDD] border-[0.1px] border-black border-dashed rounded-[18px] w-[380px]  h-[245px] p-3 mt-[9px] flex justify-start items-start"
              type="text"
            />
          </div>
        </div>
        <SubmitButton action="Continue" />
      </div>
    </div>
  );
}
