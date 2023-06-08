import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Apropos from "./pages/Apropos/Apropos";
import Error from "./pages/Error/Error";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
