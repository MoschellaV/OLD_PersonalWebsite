import React, { useState } from "react";
import "../../../assets/css/Projects.css";
import { Container } from "react-bootstrap";
import { Button } from "@mantine/core";

// import FloatingTabsSpline from "../../splines/FloatingTabsSpline";
import ProjectTemplate from "./ProjectTemplate";
import BoxSpline from "../../splines/BoxSpline";
import { project1 } from "./projectsDescriptions/MyProjects";
import floatingTabsMobile from "../../../assets/images/floatingtabs.gif";

const Projects = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  console.log(splineLoaded);

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
          <h5 className="header">I'm not just a web developer</h5>
          <p className="text">
            Praesent hendrerit quam et orci imperdiet ullamcorper. In id varius
            elit. Suspendisse leo risus, vulputate ut nibh eu, fringilla
            efficitur massa. Nulla malesuada dui in condimentum pulvinar. Cras
            gravida rutrum neque.
          </p>
        </div>
      </Container>
      <ProjectTemplate myProject={project1} isFlipped={false}>
        <BoxSpline />
      </ProjectTemplate>
      <ProjectTemplate myProject={project1} isFlipped={true}>
        <BoxSpline />
      </ProjectTemplate>
    </>
  );
};

export default Projects;
