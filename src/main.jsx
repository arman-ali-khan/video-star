import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </ContextProvider>
  </React.StrictMode>
);
