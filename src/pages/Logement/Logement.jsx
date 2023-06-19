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
    oneLogement(id)
      .then((data) => {
        setLogement(data);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!load) {
    return <div>Chargement en cours</div>;
  }
  if (!logement) {
    return <Error />;
  }

  return (
    <main className="detailLogement">
      <div className="carousselBanner">
        <Caroussel pictures={logement.pictures} altTxt={logement.title} />
      </div>
      <div className="profileLogement">
        <div className="profileDetailLogement">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div className="profileTagLogement">
            {logement.tags.map((tag, id) => {
              return <Tag tag={tag} key={id} />;
            })}
          </div>
          <div className="rateLogement">
            <div className="ratingNameLogement">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="rateLogement">
              <Rate numberOfStars={logement.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="dropLogement">
        <DropDown title={"Description"} content={logement.description} />
        <DropDown title={"Equipements"} content={logement.equipments} />
      </div>
    </main>
  );
}
