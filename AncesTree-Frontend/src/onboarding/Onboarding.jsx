import Circle from "./components/Circle";
import { useEffect, useRef, useState } from "react";
import "./components/style.css";
import { useNavigate } from "react-router";
import gsap from "gsap";

export default function Onboarding() {
  const navigate = useNavigate();
  const [deg, setDeg] = useState(0);
  const [elementIndex, setElementIndex] = useState(0);
  const changeDeg = (deg) => setDeg(deg);
  const renderElement = [
    <div>
      <div className="mr-24 mt-5 font-IBM-Plex-Mono font-semibold -ml-28 mb-10 leading-none tracking-widest">
        Connect with
        <br />
        your <span className="font-DM-Serif-Display italic">past</span>
      </div>
    </div>,
    <div>
      <div className="mr-16  font-IBM-Plex-Mono font-semibold leading-none tracking-widest">
        Get in touch
        <br />
        with your <span className="font-DM-Serif-Display italic">roots</span>
      </div>
    </div>,
    <div>
      <div className="mr-20 mt-7 font-IBM-Plex-Mono font-semibold -ml-28 mb-10 leading-none tracking-wide">
        Get family <br /> event{" "}
        <span className="font-DM-Serif-Display italic">reminders</span>
      </div>
    </div>,
    <div>
      <div className="mr-20 mb-12 font-IBM-Plex-Mono font-semibold -ml-32 mt-5 leading-none tracking-wide">
        Discover your
        <br />
        family’s <span className="font-DM-Serif-Display italic">story</span>
      </div>
    </div>,
  ];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  function handleAnimation(deg) {
    switch (deg) {
      case 343:
        setElementIndex(0);
        break;
      case 351:
        setElementIndex(1);

        break;
      case 360:
        setElementIndex(2);

        break;
      case 370:
        setElementIndex(3);

        break;

      default:
        break;
    }
    console.log("Degree:", deg);
    gsap.to(".main", {
      x: "random(90, 150, 3)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
      y: "random(190, 250, 5)",

      rotation: "random(-15,15,2)",
      ease: "ease.inOut(1,0.3)",
      repeat: -3,
      repeatRefresh: true,
      duration: 1.5,
    });
  }

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const { id } = entry.target.dataset;
        if (entry.isIntersecting) {
          changeDeg(Number(id));
          handleAnimation(Number(id));
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.7,
    });

    const refs = [ref1, ref2, ref3, ref4];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="pages snap snap-mandatory snap-y scrollbar-none">
      <Circle deg={deg} changeDeg={changeDeg} />
      <div className="fixed bottom-[9%] right-[44.3%] w-[8%] h-[17%] border-[0.2px] rounded-3xl border-black border-dashed "></div>
      <div className="fixed w-full top-3 left-0 flex justify-between items-center px-9 font-IBM-Plex-Mono">
        <div className="h-max w-[7%] flex flex-col justify-evenly items-center border-[0.2px] text-[15px]  rounded-3xl border-black p-3">
          <svg
            width="48"
            height="61"
            viewBox="0 0 48 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.2219" cy="30.9724" r="11.2219" fill="#FFDC5F" />
            <circle
              cx="11.8206"
              cy="30.0749"
              r="11.1219"
              fill="#FFDC5F"
              stroke="black"
              stroke-width="0.2"
            />
            <path
              d="M17.1806 55.8106L22.4974 29.3533C22.6404 28.6418 23.2654 28.1299 23.9911 28.1299C24.7382 28.1299 25.375 28.6715 25.495 29.4088L29.8078 55.9199C30.1047 57.745 28.6958 59.4016 26.8467 59.4016H20.1218C18.2276 59.4016 16.8074 57.6677 17.1806 55.8106Z"
              stroke="black"
              stroke-width="0.2"
            />
            <circle cx="35.4612" cy="28.5784" r="11.2219" fill="#FFDC5F" />
            <circle
              cx="36.0598"
              cy="27.6809"
              r="11.1219"
              fill="#FFDC5F"
              stroke="black"
              stroke-width="0.2"
            />
            <path
              d="M18.0781 56.4092L23.3949 29.9519C23.5379 29.2404 24.1629 28.7285 24.8886 28.7285C25.6356 28.7285 26.2725 29.2701 26.3924 30.0075L30.7052 56.5186C31.0021 58.3437 29.5933 60.0003 27.7442 60.0003H21.0193C19.125 60.0003 17.7049 58.2663 18.0781 56.4092Z"
              stroke="black"
              stroke-width="0.2"
            />
            <circle cx="24.9875" cy="12.1199" r="11.2219" fill="#FFDC5F" />
            <circle
              cx="25.5857"
              cy="11.2219"
              r="11.1219"
              fill="#FFDC5F"
              stroke="black"
              stroke-width="0.2"
            />
          </svg>
          AncesTree
        </div>
        <div className="flex justify-between w-[15%]">
          <div
            className="border-[0.2px]  rounded-3xl border-black p-3 cursor-pointer hover:bg-[#FFDC5F] duration-500"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register
          </div>
          <div
            className="border-[0.2px]  rounded-3xl border-black p-3 cursor-pointer hover:bg-[#FFDC5F] duration-500 "
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
        </div>
      </div>
      <div
        className="page snap-center whitespace-nowrap"
        id="profile"
        data-id="343"
        ref={ref1}
      >
        <div className="text-[180px] font-IBM-Plex-Mono font-semibold -ml-28 mb-10 leading-none tracking-widest">
          Connect with
          <br />
          your <span className="font-DM-Serif-Display italic">past</span>
        </div>
      </div>
      <div className="page snap-center" id="about" data-id="351" ref={ref2}>
        <div className="text-[180px] font-IBM-Plex-Mono font-semibold -ml-28 mb-10 leading-none tracking-widest">
          Get in touch
          <br />
          with your <br />{" "}
          <span className="font-DM-Serif-Display italic">roots</span>
        </div>
      </div>
      <div className="page snap-center" id="contact" data-id="360" ref={ref3}>
        <div className="text-[180px] font-IBM-Plex-Mono font-semibold -ml-28 mb-10 leading-none tracking-wide">
          Get family <br /> event{" "}
          <span className="font-DM-Serif-Display italic">reminders</span>
        </div>
      </div>
      <div className="page snap-center" id="help" data-id="370" ref={ref4}>
        <div className="text-[180px] font-IBM-Plex-Mono font-semibold -ml-32 mt-5 leading-none tracking-wide">
          Discover your
          <br />
          family’s <span className="font-DM-Serif-Display italic">story</span>
        </div>
      </div>

      <div className="main fixed top-0 left-4 w-[725px] h-[230px]">
        <div className="absolute w-[690px] h-[180px] z-50 bg-[#FFDC5F] border-[1px] flex justify-end items-center  border-black rounded-[73px] text-[60px]">
          {renderElement[elementIndex]}
        </div>
        <div className="absolute w-[690px] h-[180px] z-40 bg-[#FFDC5F] border-[1px] border-black rounded-[73px] mt-[10px] -ml-[7px]"></div>
        <div className="absolute w-[690px] h-[180px] z-30 bg-[#FFDC5F] border-[1px] border-black rounded-[73px] mt-[20px] -ml-[14px]"></div>
        <div className="absolute w-[690px] h-[180px] z-20 bg-[#FFDC5F] border-[1px] border-black rounded-[73px] mt-[30px] -ml-[21px]"></div>
        <div className="absolute w-[690px] h-[180px] z-10 bg-[#FFDC5F] border-[1px] border-black rounded-[73px] mt-[40px] -ml-[28px]"></div>
        <div className="absolute w-[690px] h-[180px] z-0 bg-[#FFDC5F] border-[1px] border-black rounded-[73px] mt-[50px] -ml-[35px]"></div>
      </div>
    </div>
  );
}
