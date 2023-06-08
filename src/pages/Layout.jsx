/* import { Outlet } from "react-router-dom"; */
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
