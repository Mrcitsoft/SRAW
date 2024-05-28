// src/components/FilterSection.js
import React from "react";
import "./FilterSection.css";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <h3> Reported incidents </h3>{" "}
      <input type="range" min="1" max="100" className="slider" />
      <h3> Scam Categories </h3>{" "}
      <ul>
        <li>
          <input type="checkbox" /> Identity(5){" "}
        </li>{" "}
        <li>
          <input type="checkbox" /> Phishing(2){" "}
        </li>{" "}
        <li>
          <input type="checkbox" /> Online(3){" "}
        </li>{" "}
      </ul>{" "}
      <h3> Severity </h3>{" "}
      <ul>
        <li>
          <input type="checkbox" /> Low Risk(2){" "}
        </li>{" "}
        <li>
          <input type="checkbox" /> Moderate(1){" "}
        </li>{" "}
        <li>
          <input type="checkbox" /> High(3){" "}
        </li>{" "}
      </ul>{" "}
      <h3> Location </h3>{" "}
      <ul>
        <li>
          <input type="checkbox" /> Region A{" "}
        </li>{" "}
        <li>
          <input type="checkbox" /> Region B{" "}
        </li>{" "}
        <li>
          <input type="checkbox" /> Region C{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default FilterSection;
