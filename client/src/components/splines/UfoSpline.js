import React from "react";
import "../../assets/css/About.css";
import Spline from "@splinetool/react-spline";

export default function UfoSpline() {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 460) {
      setInterval(() => {
        document.location.reload();
      }, 1000);
    }
  });

  return (
    <Spline
      className="ufo-spline"
      scene="https://prod.spline.design/0C0WhnQYY5wiLQcR/scene.splinecode"
    />
  );
}
