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
          <Link to="/home" className="home">
            Accueil
          </Link>
          <Link to="/apropos" className="about">
            A propos
          </Link>
        </div>
      </nav>
    </header>
  );
}
