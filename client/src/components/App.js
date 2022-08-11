import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/css/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navigation from "./Navigation";
import Loader from "./Loader";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [permissionRemoveLoader, setPermissionRemoveLoader] = useState(false);
  const [mobileLandscape, setMobileLandscape] = useState(false);
  const loadScreen = useRef();

  window.addEventListener("resize", function () {
    console.log("resized");
    if (window.innerHeight <= 460 && window.innerHeight < window.innerWidth) {
      setMobileLandscape(true);
    } else {
      setMobileLandscape(false);
    }
  });

  useEffect(() => {
    console.log("rerender");
  }, [mobileLandscape]);

  useEffect(() => {
    /*
    Forces refrech if the user uses the browsers back 
    or forward button to navigate to the home page.  
    This is neccesary so the spline can be loaded
    */
    window.onpopstate = () => {
      if (window.location.pathname === "/") {
        window.location.reload();
      }
    };
  });

  useEffect(() => {
    if (permissionRemoveLoader) {
      console.log("permission is true");
      setTimeout(() => {
        loadScreen.current.classList.add("fade-out");
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }, 3000);
      setPermissionRemoveLoader(false);
      console.log("permisssion set to false");
    }
  }, [permissionRemoveLoader]);

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
      <Router>
        <Navigation setLoading={setLoading} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Loader
                  loading={loading}
                  loadScreen={loadScreen}
                  setPermissionRemoveLoader={setPermissionRemoveLoader}
                />
                <Home setPermissionRemoveLoader={setPermissionRemoveLoader} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
};

export default App;
