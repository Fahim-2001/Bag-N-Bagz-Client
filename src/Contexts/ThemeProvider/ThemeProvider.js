import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  // Theme states
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
