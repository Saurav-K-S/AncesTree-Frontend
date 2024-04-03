import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [familyName, setFamilyName] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [imageSRC, setImageSRC] = useState("");
  const [todayEventList, setTodayEventList] = useState();
  const [eventList, setEventList] = useState();
  const date = new Date();

  useEffect(() => {
    axios
      .get("https://ancestree-backend.onrender.com/api/v1/family/home", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          setFamilyName(response.data.home.name);
          setFamilyHistory(response.data.home.history);
          setImageSRC(response.data.home.image)
          localStorage.setItem('homeImage', response.data.home.image)

        }
      })
      .catch((error) => {
        console.error("Error :", error);
        // Handle error response if needed
      });
  }, []);
  return (
    <div className="h-screen flex flex-col pt-14 pl-16   text-[100px]">
      <div className="w-auto h-[200px] mr-16 overflow-hidden text-[15px] font-IBM-Plex-Mono rounded-[28px] flex justify-start items-center">
        <img src={imageSRC} alt="Not Found" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="w-[180px] h-auto font-semibold text-[44px] ml-[25px] font-IBM-Plex-Mono">
            {familyName}
          </div>
          <div className="w-min h-auto mt-6 flex justify-start items-center ">
            <div className="bg-hover-element w-[85px] h-[85px] absolute bg-cover -z-10"></div>
            <div className="text-[37px] pl-[30px] font-IBM-Plex-Mono font-semibold text-black">
              History
            </div>
          </div>
          <div className="w-[680px] h-[165px] text-[18px] ml-[30px] mt-7 pr-4 font-IBM-Plex-Mono scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar scrollbar-thumb-[#FFEEB2] overflow-y-scroll">
            {familyHistory}
          </div>
        </div>
        <div className="w-[275px] h-[420px] mr-16 mt-6 border-dashed border-black border-[0.6px] rounded-[18px] flex flex-col justify-start items-center">
          <div className="w-[190px] h-[60px] text-[24px] font-IBM-Plex-Mono font-semibold mt-6">
            Notifications
          </div>
          <div className="h-[380px] flex flex-col justify-start items-start ml-4 scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar scrollbar-thumb-[#FFEEB2] overflow-y-scroll">
            <div>
              <div className="font-IBM-Plex-Mono text-[11px] text-[#656565]">
                Today
              </div>
              {todayEventList && todayEventList.map((eventData, index) => (
                <div>
                  <div className="font-IBM-Plex-Mono text-[16px] text-[#2D2D2D]">
                    {eventData.name}
                  </div>
                  <div className="font-IBM-Plex-Mono text-[11px] text-[#656565]">
                    {eventData.details} scheduled for {eventData.date}
                  </div>
                </div>
              ))}
              <div className="font-IBM-Plex-Mono text-[11px] text-[#656565]">
                The Coming Days
              </div>
              {eventList && eventList.map((eventData, index) => (
                <div>
                  <div className="font-IBM-Plex-Mono text-[16px] text-[#2D2D2D]">
                    {eventData.name}
                  </div>
                  <div className="font-IBM-Plex-Mono text-[11px] text-[#656565]">
                    {eventData.details} scheduled for {eventData.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
