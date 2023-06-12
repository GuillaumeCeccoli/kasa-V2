import React from "react";
import "./pages/Home/Home";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
