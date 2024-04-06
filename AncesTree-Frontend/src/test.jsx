import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
export default function TEST() {
  const boxRef = useRef();
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();

  useGSAP(() => {
    // const rotateAnimation = (trigger, rotation) => {
      gsap.to(boxRef.current, {
        rotation: 90,
        scrollTrigger: {
          trigger: oneRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });
    // };
    gsap.config({ log: true });

    // rotateAnimation(oneRef, 90);
    // rotateAnimation(twoRef, 180);
    // rotateAnimation(threeRef, 270);
    // rotateAnimation(fourRef, 360);
  }, []);
  // useEffect(() => {
  //   const rotateAnimation = (trigger, rotation) => {
  //     gsap.to(boxRef.current, {
  //       x: rotation,
  //       scrollTrigger: {
  //         trigger: trigger,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //       duration: 2,
  //     });
  //   };

  //   rotateAnimation(oneRef.current, 90);
  //   rotateAnimation(twoRef.current, 180);
  //   rotateAnimation(threeRef.current, 270);
  //   rotateAnimation(fourRef.current, 360);
  // }, []);

  return (
    <div className="h-screen w-screen   overflow-y-scroll scrollbar-thin">
      <div
        ref={boxRef}
        className="box w-14 h-14 absolute bg-black"
      ></div>
      <div ref={oneRef} className="one h-full w-full bg-white"></div>
      <div ref={twoRef} className="two h-full w-full bg-slate-600"></div>
      <div ref={threeRef} className="three h-full w-full bg-red-600"></div>
      <div ref={fourRef} className="four h-full w-full bg-yellow-600"></div>
    </div>
  );
}
