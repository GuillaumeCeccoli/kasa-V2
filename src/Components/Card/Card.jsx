import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ idCard, titleCard, imgCard }) {
  return (
    <div className="card">
      <Link className="cardLink" to={idCard}>
        <img className="cardImg" src={imgCard} alt="Le logement" />
        <h2 className="cardTitle">{titleCard}</h2>
      </Link>
    </div>
  );
}

Card.propTypes = {
  idCard: PropTypes.string,
  titleCard: PropTypes.string,
  imgCard: PropTypes.string,
};
