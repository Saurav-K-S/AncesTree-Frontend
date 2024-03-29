import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

export default function Onboarding() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const rotations = [16, 7, -2, -11];

    // Initial rotation animation
    gsap.to(".circle", {
      rotation: rotations[0],
      scrollTrigger: {
        trigger: "#connect",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Rotation animations for each section
    ["#connect", "#touch", "#celebrate", "#discover"].forEach(
      (section, index) => {
        gsap.to(".circle", {
          rotation: rotations[index],
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    );
  }, []);

  return (
    <div className="h-screen w-screen overflow-scroll scrollbar-none overflow-x-hidden snap-y snap-mandatory">
      <div
        id="connect"
        className="h-screen w-full bg-red-500 snap-center"
      ></div>
      <div id="touch" className="h-screen w-full bg-blue-500 snap-center"></div>
      <div
        id="celebrate"
        className="h-screen w-full bg-green-500 snap-center"
      ></div>
      <div
        id="discover"
        className="h-screen w-full bg-yellow-500 snap-center"
      ></div>
      <div className="fixed -bottom-[225%] w-[120%] -ml-[10%]">
        <img className="circle" src="src/assets/Nav_circle.png" alt="" />
      </div>
    </div>
  );
}
