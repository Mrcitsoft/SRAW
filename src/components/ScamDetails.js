// src/components/ScamDetails.js
import React from "react";
import "./ScamDetails.css";

const ScamDetails = ({ details }) => {
  return (
    <div className="scam-details">
      <h1> {details.title} </h1> <p> {details.description} </p>{" "}
      <div className="map"> Location: {details.location} </div>{" "}
      <div className="media">
        {" "}
        {details.media.map((mediaItem, index) => (
          <img key={index} src={mediaItem} alt={`Media ${index + 1}`} />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default ScamDetails;
