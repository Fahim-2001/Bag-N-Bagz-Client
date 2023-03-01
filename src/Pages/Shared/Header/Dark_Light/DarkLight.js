import React from "react";
import "./DarkLight.css";

const DarkLight = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkLight;
