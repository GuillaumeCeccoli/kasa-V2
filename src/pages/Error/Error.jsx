import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  return (
    <div className="errorContain">
      <h1 className="errorNumber">404</h1>
      <p className="errorText">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>
      <Link className="returnHome" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
