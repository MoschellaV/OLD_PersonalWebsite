import React, { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function FrontPageSpline() {
  const [spline, setSpline] = useState("");
  const mainSpline = useRef();

  const resizeFunc = () => {
    const test = Math.ceil(window.innerWidth * 0.7);
    mainSpline.current.style.width = `${test}px`;
    mainSpline.current.style.height = `auto`;
  };

  window.addEventListener("resize", resizeFunc);

  //https://prod.spline.design/asx2bhp61UwCzCLf/scene.splinecode
  //https://prod.spline.design/asx2bhp61UwCzCLf/scene.splinecode

  useEffect(() => {
    setSpline("https://prod.spline.design/KLYBJGiWlXyZpoxD/scene.splinecode");
  }, []);

  return (
    <div>
      <Spline
        ref={mainSpline}
        onLoad={() => resizeFunc()}
        id="main-spline"
        className="resize-main-spline"
        scene={spline}
      />
    </div>
  );
}