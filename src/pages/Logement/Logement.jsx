import React, { useState, useEffect } from "react";
import "./logement.css";
import { useParams } from "react-router-dom";
import { oneLogement } from "../../datas/api";
import Caroussel from "../../Components/Caroussel/Caroussel";
import DropDown from "../../Components/DropDown/DropDown";
import Tag from "../../Components/Tag/Tag";
import Rate from "../../Components/Rate/Rate";
import Error from "../Error/Error";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await oneLogement(id);
        setLogement(data);
        setTimeout(() => {
          setLoad(true);
        }, 1000); // Définissez le délai souhaité en millisecondes (dans cet exemple, 2000 ms soit 2 secondes)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!load) {
    return <div className="loader"></div>;
  }
  if (!logement) {
    return <Error />;
  }

  return (
    <main className="logementContainer">
      <section className="carousselBanner">
        <Caroussel pictures={logement.pictures} altTxt={logement.title} />
      </section>
      <section className="infosContainer">
        <div className="informations">
          <h2 className="logeTitle">{logement.title}</h2>
          <p className="logeLocation">{logement.location}</p>
          <div className="logeTag">
            {logement.tags.map((tag, id) => {
              return <Tag tag={tag} key={id} />;
            })}
          </div>
        </div>
        <div className="rate">
          <div className="rateDetails">
            <p className="rateText">{logement.host.name}</p>
            <img
              className="rateImg"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="starsRating">
            <Rate numberOfStars={logement.rating} />
          </div>
        </div>
      </section>
      <section className="dropLogement">
        <DropDown title={"Description"} content={logement.description} />
        <DropDown title={"Equipements"} content={logement.equipments} />
      </section>
    </main>
  );
}
