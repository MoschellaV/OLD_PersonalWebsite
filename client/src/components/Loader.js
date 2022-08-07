import React, { useState, useEffect } from "react";
import "../assets/css/Loader.css";

const Loader = (props) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 100) {
      setTimeout(() => setPercent(percent + 1), 135);
    }
  }, [percent]);

  if (props.loading) {
    return (
      <div ref={props.loadScreen} className="screen">
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
          <h4 className="loading-text">
            Loading <span className="percent">{`${percent}%`}</span>
          </h4>
        </div>
      </div>
    );
  } else {
  }
};
export default Loader;
