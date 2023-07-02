import { useState } from "react";
import "./caroussel.css";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

export default function Caroussel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  function previous() {
    const first = currentIndex === 0;
    const newIndex = first ? length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function next() {
    const last = currentIndex === length - 1;
    const newIndex = last ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <article className="slideShowContent">
      <img
        className="imgSlideShowContent"
        src={pictures[currentIndex]}
        alt={currentIndex}
      />
      <div className="left">
        <img
          className={pictures.length !== 1 ? "leftarrow" : "hidden"}
          src={leftArrow}
          alt="Fleche gauche"
          onClick={previous}
        />
      </div>
      <div className="right">
        <img
          className={pictures.length !== 1 ? "rightarrow" : "hidden"}
          src={rightArrow}
          alt="Fleche droite"
          onClick={next}
        />
      </div>
      <div className="numberImg">
        <p className={pictures.length === 1 ? "numberHidden" : "numberVisible"}>
          {currentIndex + 1}/{pictures.length}
        </p>
      </div>
    </article>
  );
}
