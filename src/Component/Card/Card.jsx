import React from "react";
import "./Card.css";

const Card = ({ title, bgImg }) => {
  return (
    <div
      className="card"
      style={{ "--bg-img": `url('${bgImg}')` }}
    >
      <span className="card-title">{title}</span>
    </div>
  );
};

export default Card;
