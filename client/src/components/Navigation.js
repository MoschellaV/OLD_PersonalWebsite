import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navigation.css";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const Navigation = ({ setLoading }) => {
  return (
    <Navbar key="lg" expand="lg" fixed="top" className="">
      <Container fluid className="navbar-position">
        <div>
          <Nav.Link className="nav-name">Vince Moschella</Nav.Link>
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
              <Nav.Link className="underline-anim">
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/"
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      setLoading(true);
                    }
                  }}
                >
                  Home Page
                </Link>
              </Nav.Link>
              <Nav.Link className="underline-anim">
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/about"
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link className="underline-anim">
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/projects"
                >
                  My Projects
                </Link>
              </Nav.Link>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/contact"
              >
                <Button
                  className="contact-button shrink"
                  variant="outline-primary"
                >
                  Contact
                </Button>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
