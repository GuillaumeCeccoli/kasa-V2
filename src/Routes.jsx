import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logement/Logement";
import Error from "./pages/Error/Error";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace={true} />} />

        {/* On définit nos routes ci-dessous */}
        <Route path="/home" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
