import React from "react";
import "../assets/css/Home.css";
import "font-awesome/css/font-awesome.min.css";
import grid from "../assets/images/grid.png";
import { Container } from "react-bootstrap";
import FrontPageSpline from "./FrontPageSpline";

const Home = ({ setFrontPageSplineLoaded, setPermissionRemoveLoader }) => {
  return (
    <Container fluid className="black-background bg-size posiiton-relative">
      <img src={grid} alt="" className="grid-img"></img>
      <div className="header position-absolute">
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

      <FrontPageSpline
        setFrontPageSplineLoaded={setFrontPageSplineLoaded}
        setPermissionRemoveLoader={setPermissionRemoveLoader}
      />
      <div className="orange-liner"></div>
    </Container>
  );
};

export default Home;
