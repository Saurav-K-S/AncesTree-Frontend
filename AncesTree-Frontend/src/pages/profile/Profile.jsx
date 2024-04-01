import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiCirclePlus, CiPhone } from "react-icons/ci";
export default function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    axios
      .get("https://ancestree-backend.onrender.com/api/v1/user/view", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          setName(response.data.user.name);
          setEmail(response.data.user.email);
          setNumber(response.data.user.mobileNumber);
          setId(response.data.user.__v);
        }
      })
      .catch((error) => {
        console.error("Error :", error);
        // Handle error response if needed
      });
  }, []);
  return (
    <div className="h-screen flex flex-col pt-14 pl-16   text-[100px]">
      <div className="w-auto h-[200px] mr-16 overflow-hidden rounded-[28px] text-[15px] font-IBM-Plex-Mono flex justify-start items-start">
        <img src={localStorage.getItem("homeImage")} alt="Not Found" />
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div>
          <div className="w-auto font-semibold text-[32px] font-IBM-Plex-Mono">
            {name}
          </div>
          <div className="text-[24px] font-IBM-Plex-Mono text-[#676767]  mt-11">
            {email}
          </div>
        </div>
        <div className="w-max flex flex-col justify-end items-end pr-14">
          <div className="w-max h-auto text-[24px] font-IBM-Plex-Mono bg-[#CCFFE0] text-[#3C8B5C] rounded-[9px] px-5">
            {id}
          </div>

          <div className="w-max text-[30px] flex items-center font-IBM-Plex-Mono  mt-11">
            <div>
            <CiPhone  size={30}/>
            </div>
            <div>
              {number}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
