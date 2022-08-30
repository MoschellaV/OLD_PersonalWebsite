import React, { useState } from "react";
import "../../../assets/css/Projects.css";
import { Container } from "react-bootstrap";
import { Button } from "@mantine/core";
import ProjectTemplate from "./ProjectTemplate";
import CraftACardSpline from "../../splines/CraftACardSpline";
import { project1 } from "./MyProjects";
import floatingTabsMobile from "../../../assets/images/floatingtabs.gif";

const Projects = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 460) {
      setInterval(() => {
        document.location.reload();
      }, 1000);
    }
  });

  const renderFloatingTabs = () => {
    if (window.innerWidth <= 460) {
      return (
        <img
          style={{
            display: "flex",
            margin: "auto",
            width: "70vw",
            height: "auto",
          }}
          alt=""
          src={floatingTabsMobile}
        />
      );
    } else {
      return (
        <iframe
          title="floating-tabs"
          id="floating-tabs-spline"
          src="https://my.spline.design/floatingtabs2-a3abe303c0a5f918633440e2a92b84c9/"
          frameBorder="0"
          width="100%"
          height="100%"
          onLoad={() => {
            setSplineLoaded(true);
          }}
        ></iframe>
      );
    }
  };

  return (
    <>
      <div className="floating-tabs-wrapper">
        {renderFloatingTabs()}
        <Button
          className="projects-button"
          variant="outline"
          radius="md"
          size="xl"
          onClick={() =>
            document.getElementById("mini-description").scrollIntoView()
          }
        >
          View Projects
        </Button>
      </div>
      <Container fluid id="mini-description" className="mini-description">
        <div className="mini-description-container">
          <h5 className="header">Check out some of my work</h5>

          <p className="text">
            When I have a cool idea, I open up VS code and then somehow end up
            on stack overflow 30 minutes later! Anyway, my personal projects
            showcase some of the languages and frameworks that I have used.
          </p>
          <i className="bobbing-arrow fa-solid pt-4 fa-down-long"></i>
        </div>
      </Container>
      <ProjectTemplate myProject={project1} isFlipped={false}>
        <CraftACardSpline />
      </ProjectTemplate>

      <div style={{ backgroundColor: "black", height: "350px" }}></div>
    </>
  );
};

export default Projects;
