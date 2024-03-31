import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
export default function EventPage() {
  const [eventData, seteventData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const date = new Date();

  useEffect(() => {
    axios
      .get(
        "https://ancestree-backend.onrender.com/api/v1/family/event/view/" +
          `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        console.log(response);
        seteventData(response.data.events);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const handleBoxClick = (id) => {
  //   const newWindow = window.open(
  //     "https://drive.google.com/drive/folders/" + id + "?usp=drive_link",
  //     "_blank",
  //     "noopener,noreferrer"
  //   );
  // };

  const handleAddEventClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send axios request with folderName
    axios
      .post(
        "https://ancestree-backend.onrender.com/api/v1/family/event/create",
        {
          name: eventName,
          place: eventPlace,
          date: eventDate,
          time: eventTime,
          details: eventDetails,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        console.log(response);
        // Close the form
        setShowForm(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen ml-8 mt-44">
      <div className="hehe w-[90%] h-[70%] grid grid-cols-2  gap-4 gap-y-11 overflow-y-scroll scrollbar-none">
        {eventData.map((boxData, index) => (
          <div
            key={index}
            className="w-[430px] h-[200px] flex flex-col justify-start pt-5 items-start rounded-[12px] border-[0.1px] border-black  cursor-pointer"
            // onClick={() => handleBoxClick(boxData.id)}
          >
            <div className="w-full px-7 flex flex-row justify-between items-center">
              <div className="font-IBM-Plex-Mono text-[18px] font-semibold">
                {boxData.name}
              </div>
              <div className="font-IBM-Plex-Mono bg-[#676767] text-[11px] text-[#676767] bg-opacity-[8%] px-4 rounded-md py-2">
                {boxData.place}
              </div>
            </div>
            <div className="font-IBM-Plex-Mono text-[#676767] px-7 pt-5">{boxData.date}</div>
            <div className="font-IBM-Plex-Mono px-7 pt-5">{boxData.details}</div>
          </div>
        ))}
        <div
          className="w-[180px] h-[200px] flex flex-col justify-center items-center rounded-[12px] border-[0.1px] border-black  cursor-pointer"
          onClick={handleAddEventClick}
        >
          <CiCirclePlus size={100} color="#676767"/>
          <div className="font-IBM-Plex-Mono text-[18px] font-semibold text-[#676767]">
            Add Event
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <form
            className="bg-[#FFEEB2] p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <label className="block mb-4 font-IBM-Plex-Mono font-semibold">
              Event Name:
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="border rounded-md w-full h-10 mt-1 pl-2"
                required
              />
            </label>
            <label className="block mb-4 font-IBM-Plex-Mono font-semibold">
              Event Place:
              <input
                type="text"
                value={eventPlace}
                onChange={(e) => setEventPlace(e.target.value)}
                className="border rounded-md w-full h-10 mt-1 pl-2"
                required
              />
            </label>
            <label className="block mb-4 font-IBM-Plex-Mono font-semibold">
              Event Date:
              <input
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="border rounded-md w-full h-10 mt-1 pl-2"
                required
              />
            </label>
            <label className="block mb-4 font-IBM-Plex-Mono font-semibold">
              Event Time:
              <input
                type="text"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className="border rounded-md w-full h-10 mt-1 pl-2"
                required
              />
            </label>
            <label className="block mb-4 font-IBM-Plex-Mono font-semibold">
              Event Details:
              <input
                type="text"
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
                className="border rounded-md w-full h-10 mt-1 pl-2"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-[#FEFFDD] font-semibold text-black font-IBM-Plex-Mono px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
