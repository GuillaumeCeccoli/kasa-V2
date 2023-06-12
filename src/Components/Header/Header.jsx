import React from "react";
import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo orange" />
        <div className="navbar">
          <Link
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "navbar")}
          >
            Accueil
          </Link>
          <Link
            to="/apropos"
            className={({ isActive }) => (isActive ? "active" : "navbar")}
          >
            A propos
          </Link>
        </div>
      </nav>
    </header>
  );
}
