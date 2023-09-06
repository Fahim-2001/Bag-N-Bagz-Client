import React, { useContext } from "react";
import { ThemeContext } from "../../../../Contexts/ThemeProvider/ThemeProvider";
import "./DarkLight.css";

const DarkLight = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="my-4 lg:my-0">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={theme === "light"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkLight;
