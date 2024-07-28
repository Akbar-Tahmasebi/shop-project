import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginUser } from "./context/LoginCantext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginUser>
        <App />
      </LoginUser>
    </BrowserRouter>
  </React.StrictMode>
);
