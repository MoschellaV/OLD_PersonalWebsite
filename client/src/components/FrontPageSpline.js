import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function FrontPageSpline({ setFrontPageSplineLoaded }) {
  const mainSpline = useRef();

  const resizeFunc = () => {
    if (window.location.pathname === "/") {
      try {
        const test = Math.ceil(window.innerWidth * 0.7);
        mainSpline.current.style.width = `${test}px`;
        mainSpline.current.style.height = `auto`;
      } catch (err) {}
    } else {
    }
  };

  window.addEventListener("resize", resizeFunc);

  return (
    <div>
      <Spline
        ref={mainSpline}
        onLoad={() => {
          setFrontPageSplineLoaded(true);
        }}
        id="main-spline"
        className="resize-main-spline"
        scene={"https://prod.spline.design/KLYBJGiWlXyZpoxD/scene.splinecode"}
      />
    </div>
  );
}
