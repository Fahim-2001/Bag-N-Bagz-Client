import React from "react";
import "./DarkLight.css";

const DarkLight = () => {
  return (
    <div>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  );
};

export default DarkLight;
