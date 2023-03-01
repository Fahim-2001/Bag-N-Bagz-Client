import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import routes from "./Routes/Routes";

export const ThemeContext = createContext(null);

function App() {
  // Theme states
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App font-serif overflow-x-hidden" id={theme}>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
