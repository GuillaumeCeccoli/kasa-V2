import "./banner.css";
import bannerImage from "../../assets/IMG.svg";
import aboutImage from "../../assets/aboutImage.svg";
import { useLocation } from "react-router-dom";

export default function Banner() {
  const location = useLocation();

  const getBannerImg = () => {
    if (location.pathname === "/") {
      return {
        image: bannerImage,
        showText: true,
      };
    } else if (location.pathname === "/apropos") {
      return {
        image: aboutImage,
        showText: false,
      };
    } else {
      return {
        image: bannerImage,
        showText: true,
      };
    }
  };

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
