import React from "react";
import "./Card.css";

function Card({ src, description, price, title }) {
  return (
    <div className="card">
      <img src={src} alt="Card" />
      <div className="card__info">
        <h3>{title}</h3>
        <span>{description}</span>
        <h5>{price}</h5>
      </div>
    </div>
  );
}

export default Card;
