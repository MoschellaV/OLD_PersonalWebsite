import React from "react";
import "../assets/css/Loader.css";

const Loader = (props) => {
  if (props.loading) {
    return (
      <div ref={props.loadScreen} className="screen">
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
