import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function FrontPageSpline({ setFrontPageSplineLoaded }) {
  const mainSpline = useRef();

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
