import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TEST() {
  const boxRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  
  useEffect(() => {
    const rotateAnimation = (trigger, rotation) => {
      gsap.to(boxRef.current, {
        rotation: rotation,
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        duration: 2,
      });
    };

    rotateAnimation(oneRef.current, 90);
    rotateAnimation(twoRef.current, 180);
    rotateAnimation(threeRef.current, 270);
    rotateAnimation(fourRef.current, 360);
  }, []);

  return (
    <div className="h-screen w-screen overflow-scroll overflow-x-hidden scrollbar-thin">
      <div
        ref={boxRef}
        className="box top-96 left-96 fixed h-14 w-14 bg-black"
      ></div>
      <div ref={oneRef} className="one h-screen w-full bg-white"></div>
      <div ref={twoRef} className="two h-screen w-full bg-slate-600"></div>
      <div ref={threeRef} className="three h-screen w-full bg-red-600"></div>
      <div ref={fourRef} className="four h-screen w-full bg-yellow-600"></div>
    </div>
  );
}
