import React from "react";
import "../../../assets/css/Projects.css";
//import "../../../assets/images/codePNGS/react.png";

import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mantine/core";

const ProjectTemplate = ({ myProject, isFlipped, children }) => {
  const logos = Object.values(myProject.technologies);
  console.log(logos);

  const renderedLogos = logos.map((logo) => {
    return (
      <img
        style={{
          filter: "brightness(0) invert(1)",
          margin: "2px 10px 15px 7px",
          width: "37px",
          height: "auto",
        }}
        alt=""
        src={logo}
      />
    );
  });

  return (
    <Container fluid className="project-template-container p-0 ">
      <Row className={isFlipped ? "row-flipped" : "row-normal"}>
        <Col
          md={7}
          sm={12}
          className={
            isFlipped ? "project-wrapper-flipped" : "project-wrapper-normal"
          }
        >
          <div style={{ maxWidth: "800px" }}>
            <h5 className="header">{myProject.header}</h5>
            <h2 className="sub-header">{myProject.subHeader}</h2>
            <div>
              {renderedLogos}
              {/* <img alt="" src={myProject.technologies.logoReact} /> */}
            </div>
            <p className="text">{myProject.description}</p>
            <Button
              className="view-site-button"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={myProject.button1Href}
              color="orange"
              radius="md"
              size="lg"
            >
              {myProject.button1Text}
            </Button>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={myProject.button2Href}
              className="view-code-button"
              variant="outline"
              radius="md"
              size="lg"
            >
              {myProject.button2Text}
            </Button>
          </div>
        </Col>

        <Col
          className={
            isFlipped ? "spline-wrapper-flipped" : "spline-wrapper-normal"
          }
        >
          <div className="projects-spline">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProjectTemplate;
