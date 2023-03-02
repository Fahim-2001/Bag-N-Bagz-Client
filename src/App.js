import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import routes from "./Routes/Routes";
import { ThemeContext } from "./Contexts/ThemeProvider/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App font-serif overflow-x-hidden" id={theme}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
