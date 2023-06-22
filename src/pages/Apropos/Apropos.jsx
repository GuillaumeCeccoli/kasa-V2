import React from "react";
import { useEffect } from "react";
import informations from "../../datas/informations";
import Banner from "../../Components/Banner/Banner";
import DropDown from "../../Components/DropDown/DropDown";
import "./Apropos.css";

export default function Apropos() {
  useEffect(() => {
    document.title = `KASA - A propos`;
  });
  return (
    <main className="aboutContain">
      <div className="aboutBanner">
        <Banner />
      </div>
      <div className="dropDownInfos">
        {informations.map((content, index) => {
          return (
            <DropDown
              title={content.title}
              content={content.text}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}
