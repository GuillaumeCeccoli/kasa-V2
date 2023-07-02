import React, { useEffect } from "react";
import "./home.css";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import { getAllLogements } from "../../datas/api";

export default function Home() {
  // Modifie l'onglet
  useEffect(() => {
    document.title = `KASA - Accueil`;
  });
  return (
    <main className="homepage">
      <div className="homepagebanner">
        <Banner />
      </div>
      <section className="cardLogement">
        {/* Insertion des cartes logements */}
        {getAllLogements().map((logement) => {
          return (
            <Card
              key={logement.id}
              idCard={logement.id}
              imgCard={logement.cover}
              titleCard={logement.title}
            />
          );
        })}
      </section>
    </main>
  );
}
