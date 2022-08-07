import React, { useEffect, useState, useRef } from "react";
import "../assets/css/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navigation from "./Navigation";
import Loader from "./Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const loadScreen = useRef();

  useEffect(() => {
    setTimeout(() => {
      loadScreen.current.classList.add("fade-out");

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, 17000);
  }, []);

  return (
    <div>
      <Loader loading={loading} loadScreen={loadScreen} />
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
