import React from "react";
import "./tag.css";

export default function Tag({ tag }) {
  return (
    <div className="tagName">
      <p className="tagText">{tag}</p>
    </div>
  );
}
