import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navigation from "./Navigation";
import Loader from "./pages/Loader";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectsPage/Projects";
import About from "./pages/About";

const App = () => {
  const [frontPageSplineLoaded, setFrontPageSplineLoaded] = useState(false);
  const [fadeLoadScreen, setFadeLoadScreen] = useState(false);
  const [mobileLandscape, setMobileLandscape] = useState(false);
  const loadScreen = useRef();
  const location = useLocation();

  window.addEventListener("resize", function () {
    if (window.innerHeight <= 460 && window.innerHeight < window.innerWidth) {
      setMobileLandscape(true);
    } else {
      setMobileLandscape(false);
    }
  });

  useEffect(() => {}, [mobileLandscape]);

  useEffect(() => {
    /*
    Forces refresh if the user uses the browsers back 
    or forward button to navigate to the home page.  
    This is neccesary so the spline can be loaded
    */
    window.onpopstate = () => {
      if (window.location.pathname === "/") {
        window.location.reload();
      }
    };
  });

  useEffect(
    () => {
      if (frontPageSplineLoaded) {
        setTimeout(() => {
          loadScreen.current.classList.add("fade-out");
          setTimeout(() => {
            setFadeLoadScreen(true);
          }, 1500);
        }, 3000);
        setFrontPageSplineLoaded(false);
      }
    },
    [frontPageSplineLoaded],
    [fadeLoadScreen]
  );

  if (mobileLandscape) {
    return (
      <div
        style={{
          display: "flex",
          minHeight: "70vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>Please Rotate Screen</div>
      </div>
    );
  } else {
    return (
      <>
        <Navigation
          setFrontPageSplineLoaded={setFrontPageSplineLoaded}
          setFadeLoadScreen={setFadeLoadScreen}
        />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Loader
                  fadeLoadScreen={fadeLoadScreen}
                  loadScreen={loadScreen}
                />
                <Home setFrontPageSplineLoaded={setFrontPageSplineLoaded} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }
};

export default App;
