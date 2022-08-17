import React from "react";
import "../assets/css/About.css";
import ufoMobile from "../assets/images/ufo-gif.gif";

import UfoSpline from "./UfoSpline";
import { Container } from "react-bootstrap";

const renderUFO = () => {
  if (window.innerWidth <= 460) {
    return <img className="ufo-mobile-gif" alt="" src={ufoMobile} />;
  } else {
    return (
      <div className="ufo-wrapper">
        <UfoSpline />
      </div>
    );
  }
};

const About = () => {
  return (
    <Container fluid className="black-background bg-size posiiton-relative">
      {renderUFO()}
      <div className="about-content">
        <h5 className="header">What I'm Up to</h5>
        <h2 className="sub-header">2022 ~ Present</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          tincidunt neque, ut sodales felis. Integer mollis erat sed consectetur
          sagittis. Aliquam erat volutpat. Nulla fringilla porttitor eros nec
          aliquet. Sed a turpis ac enim imperdiet scelerisque at a justo.
          Aliquam suscipit dapibus turpis, at maximus massa pulvinar ut.
        </p>
      </div>
    </Container>
  );
};

export default About;
