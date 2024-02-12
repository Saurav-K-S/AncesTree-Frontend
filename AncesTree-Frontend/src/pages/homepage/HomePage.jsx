import React from "react";
import Heading from "../../components/Heading";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col pt-14 pl-16   text-[100px]">
      <div className="w-auto h-[200px] mr-16 overflow-hidden rounded-[28px] flex justify-start items-start">
        <img
          src="src\assets\family_photo.png"
          alt="IMAGE NOT FOUND!!!"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="w-[180px] h-auto font-semibold text-[44px] ml-[25px] font-IBM-Plex-Mono">
            Katoor Kudumbayogam
          </div>
          <div className="w-min h-auto mt-6 flex justify-start items-center ">
            <div className="bg-hover-element w-[85px] h-[85px] absolute bg-cover -z-10"></div>
            <div className="text-[37px] pl-[30px] font-IBM-Plex-Mono font-semibold text-black">
              History
            </div>
          </div>
          <div className="w-[680px] h-[165px] text-[18px] ml-[30px] mt-7 pr-4 font-IBM-Plex-Mono scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar scrollbar-thumb-[#FFEEB2] overflow-y-scroll">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            egestas, lacus nec gravida euismod, sapien libero condimentum lacus,
            ac malesuada quam nibh non augue.,
            <br />,<br />
            Nam tincidunt imperdiet sem, eget laoreet mauris aliquam quis.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            egestas, lacus nec gravida euismod, sapien libero condimentum lacus,
            ac malesuada quam nibh non augue.,
            <br />,<br />
            Nam tincidunt imperdiet sem, eget laoreet mauris aliquam quis.
          </div>
        </div>
        <div className="w-[275px] h-[420px] mr-16 mt-6 border-dashed border-black border-[0.6px] rounded-[18px] flex flex-col justify-start items-center">
          <div className="w-[190px] h-[60px] text-[24px] font-IBM-Plex-Mono font-semibold mt-6">
            Notifications
          </div>
          <div className="h-[380px] flex flex-col justify-start items-start ml-4 scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar scrollbar-thumb-[#FFEEB2] overflow-y-scroll">
            <div>
              <div className="font-IBM-Plex-Mono text-[11px] text-[#656565]">Today</div>
              <div className="font-IBM-Plex-Mono text-[16px] text-[#2D2D2D]">B’day Party</div>
              <div className="font-IBM-Plex-Mono text-[11px] text-[#656565]">Get ready for the Party scheduled for 21/03/24</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
