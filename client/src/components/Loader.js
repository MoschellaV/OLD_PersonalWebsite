import React from "react";
import "../assets/css/Loader.css";

const Loader = ({ loading, loadScreen }) => {
  if (loading) {
    return (
      <div ref={loadScreen} className="screen">
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
          <h4 className="loading-text">Loading</h4>
        </div>
      </div>
    );
  } else {
  }
};
export default Loader;
