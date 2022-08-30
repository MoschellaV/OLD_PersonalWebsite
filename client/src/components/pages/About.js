import React from "react";
import "../../assets/css/About.css";
import ufoMobile from "../../assets/images/ufo-gif.gif";
import UfoSpline from "../splines/UfoSpline";
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
          Currently I'm a first year computer science student. Studying at the
          University of Guelph (hover under the UFO 😁). Having a keen interest
          in machine learning, I decided to choose statistics as my minor.
        </p>
      </div>
    </Container>
  );
};

export default About;
