import React, { useContext } from "react";
import { ThemeContext } from "../../../../App";
import "./DarkLight.css";

const DarkLight = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={() => toggleTheme()} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkLight;
