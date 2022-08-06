import React from "react";
import "../assets/css/Navigation.css";
//import { Button } from "@mantine/core";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar key="lg" expand="lg" fixed="top" className="">
      <Container fluid className="navbar-position">
        <div style={{ maxWidth: "130px" }}>
          <Nav.Link href="#">Vince Moschella</Nav.Link>
        </div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Vince Moschella
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="underline-anim">
                Home Page
              </Nav.Link>
              <Nav.Link href="#action2" className="underline-anim">
                About Me
              </Nav.Link>
              <Nav.Link href="#action3" className="underline-anim">
                My Projects
              </Nav.Link>
              <Button
                className="contact-button shrink"
                variant="outline-primary"
              >
                Contact
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
