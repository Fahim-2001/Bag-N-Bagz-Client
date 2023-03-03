import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./Contexts/ThemeProvider/ThemeProvider";
import RequestsProvider from "./Contexts/RequestsProvider/RequestsProvider";
import DataProvider from "./Contexts/DataProvider/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <RequestsProvider>
      <DataProvider>
        <ThemeProvider>
          <AuthProvider>
            <ToastContainer />
            <App />
          </AuthProvider>
        </ThemeProvider>
      </DataProvider>
    </RequestsProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
