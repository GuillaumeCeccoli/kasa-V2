import "./banner.css";
import bannerImage from "../../assets/IMG.svg";

export default function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Vue d'une falaise" className="bimage" />
      <h1>
        Chez vous, <span>partout et ailleurs</span>
      </h1>
    </div>
  );
}
