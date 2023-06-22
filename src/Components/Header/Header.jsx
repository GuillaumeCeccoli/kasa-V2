import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LOGO.svg";
import "./header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <img src={logo} alt="Logo orange" />
        <div className="navbar">
          <Link
            to="/home"
            className={`home ${location.pathname === "/home" ? "active" : ""}`}
          >
            Accueil
          </Link>
          <Link
            to="/apropos"
            className={`about ${
              location.pathname === "/apropos" ? "active" : ""
            }`}
          >
            A propos
          </Link>
        </div>
      </nav>
    </header>
  );
}
