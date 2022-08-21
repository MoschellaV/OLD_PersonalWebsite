import React from "react";
import "../../../assets/css/Projects.css";

import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mantine/core";

const ProjectTemplate = ({ myProject, isFlipped, children }) => {
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
            <p className="text">{myProject.description}</p>
            <Button color="orange" radius="md" size="lg">
              {myProject.button1Text}
            </Button>
            <Button
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
