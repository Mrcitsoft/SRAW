// src/components/ScamCard.js
import React from "react";
import "./ScamCard.css";

const ScamCard = ({ title, location, actionText }) => {
  return (
    <div className="scam-card">
      <img src="https://via.placeholder.com/150" alt="Scam" />
      <div className="scam-info">
        <h3> {title} </h3> <p> Location: {location} </p>{" "}
        <button> {actionText} </button>{" "}
      </div>{" "}
    </div>
  );
};

export default ScamCard;
