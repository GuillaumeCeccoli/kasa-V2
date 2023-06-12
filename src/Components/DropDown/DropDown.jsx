import React, { useState } from "react";
import "./dropdown.css";
import arrowDropDown from "../../assets/arrow.svg";

export default function DropDown({ title, content }) {
  const [open, setOpen] = useState(false);
  function openDrop() {
    setOpen(!open);
  }
  return (
    <div className="dropDown">
      <div className="headingDrop" onClick={openDrop}>
        <h2 className="titleDrop">{title}</h2>
        <img
          className={open ? "arrowOpen" : "arrowClose"}
          src={arrowDropDown}
          alt="Flèche"
        />
      </div>
      <div className={`dropDownContent ${open ? "open" : "close"}`}>
        <div className="dropDownText">
          <p>
            {content instanceof Array
              ? content.map((informations) => (
                  <span key={informations}>{informations}</span>
                ))
              : content}
          </p>
        </div>
      </div>
    </div>
  );
}
