import "./home.css";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import { getAllLogements } from "../../datas/api";

export default function Home() {
  return (
    <main className="homepage">
      <div className="homepagebanner">
        <Banner />
      </div>
      <div className="cardLogement">
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
      </div>
    </main>
  );
}
