import React from "react";
import "./banner.css";
import bannerImage from "../../assets/IMG.svg";
import aboutImage from "../../assets/aboutImage.svg";
import { useLocation } from "react-router-dom";

export default function Banner() {
  const location = useLocation();

  // Vérification de l'URL
  // En fonction de celle-ci, on change l'image de la banière
  // On retire le texte sur la page A propos
  function getBannerImg() {
    return location.pathname === "/home"
      ? { image: bannerImage, showText: true }
      : location.pathname === "/apropos"
      ? { image: aboutImage, showText: false }
      : { image: bannerImage, showText: true };
  }

  const { image, showText } = getBannerImg();

  return (
    <div className="banner">
      <img src={image} alt="Vue d'une falaise" className="bimage" />
      {showText && (
        <h1>
          Chez vous, <span>partout et ailleurs</span>
        </h1>
      )}
    </div>
  );
}
