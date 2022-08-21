import React from "react";
import "../../assets/css/Home.css";
import grid from "../../assets/images/grid.png";
import "font-awesome/css/font-awesome.min.css";
import { Container } from "react-bootstrap";
import FrontPageSpline from "../splines/FrontPageSpline";
import codingHeadMobile from "../../assets/images/codingHead.gif";

const Home = ({ setFrontPageSplineLoaded }) => {
  const renderCodingHead = () => {
    if (window.innerWidth <= 460) {
      return (
        <img
          onLoad={() => {
            setFrontPageSplineLoaded(true);
          }}
          className="coding-head-gif"
          alt=""
          src={codingHeadMobile}
        />
      );
    } else {
      return (
        <FrontPageSpline setFrontPageSplineLoaded={setFrontPageSplineLoaded} />
      );
    }
  };

  return (
    <Container fluid className="black-background bg-size posiiton-relative">
      <img src={grid} alt="" className="grid-img"></img>
      <div className="home-content position-absolute">
        <h1 className="main-header">Hey.</h1>
        <h1 className="main-header">I'm Vince</h1>
        <div className="description">
          <p className="main-description">
            A driven computer science student and developer
            <span className="blink"> /</span>
          </p>
        </div>
      </div>

      <div className="icon-div">
        <i className="shrink icons fa-2x fa-brands fa-square-github" />
        <i className="shrink pt-2 icons fa-2x fa-brands fa-linkedin" />
        <i className="shrink pt-2 icons fa-2x fa-brands fa-square-facebook" />
      </div>

      {renderCodingHead()}
      <div className="orange-liner"></div>
    </Container>
  );
};

export default Home;
