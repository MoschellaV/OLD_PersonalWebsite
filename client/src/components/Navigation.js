import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navigation.css";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const Navigation = ({ setFrontPageSplineLoaded, setFadeLoadScreen }) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <Navbar key="lg" expand="lg" fixed="top" className={navbar ? "active" : ""}>
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
              <Link
                className="underline-anim nav-link"
                style={{ color: "white", textDecoration: "inherit" }}
                to="/"
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    setFrontPageSplineLoaded(false);
                    setFadeLoadScreen(false);
                  }
                }}
              >
                Home Page
              </Link>

              <Link
                className="underline-anim nav-link"
                style={{ color: "white", textDecoration: "inherit" }}
                to="/about"
              >
                About Me
              </Link>

              <Link
                className="underline-anim nav-link"
                style={{ color: "white", textDecoration: "inherit" }}
                to="/projects"
              >
                My Projects
              </Link>
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
