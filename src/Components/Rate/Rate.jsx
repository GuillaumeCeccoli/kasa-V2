import "./rate.css";
import FullyIcon from "../../assets/fullyStar.svg";
import EmptyIcon from "../../assets/emptyStar.svg";

export default function Rating({ numberOfStars }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="star">
      {stars.map((level) =>
        numberOfStars >= level ? (
          <img
            className="starIcon"
            src={FullyIcon}
            alt="L'icone d'étoile est pleine"
            key={level}
          />
        ) : (
          <img
            className="starIcon"
            src={EmptyIcon}
            alt="L'icone d'étoile est vide"
            key={level}
          />
        )
      )}
    </div>
  );
}
