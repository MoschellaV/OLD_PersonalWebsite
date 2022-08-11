import React, { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function FrontPageSpline({ setPermissionRemoveLoader }) {
  const [loadedArr, setLoadedArr] = useState([]);
  const mainSpline = useRef();

  useEffect(() => {
    if (loadedArr.length >= 2) {
      setPermissionRemoveLoader(true);
      console.log(loadedArr);
    }
  }, [loadedArr, setPermissionRemoveLoader]);

  const resizeFunc = () => {
    const test = Math.ceil(window.innerWidth * 0.7);
    mainSpline.current.style.width = `${test}px`;
    mainSpline.current.style.height = `auto`;

    setLoadedArr((current) => [...current, "loaded"]);
    console.log("loaded");
  };

  window.addEventListener("resize", resizeFunc);

  return (
    <div>
      <Spline
        ref={mainSpline}
        onLoad={() => resizeFunc()}
        id="main-spline"
        className="resize-main-spline"
        scene={"https://prod.spline.design/KLYBJGiWlXyZpoxD/scene.splinecode"}
      />
    </div>
  );
}
