// src/components/ShareOptions.js
import React from "react";
import "./ShareOptions.css";

const ShareOptions = () => {
  return (
    <div className="share-options">
      <p> Share this report: </p>{" "}
      <button onClick={() => alert("Shared on Facebook")}> Facebook </button>{" "}
      <button onClick={() => alert("Shared on Twitter")}> Twitter </button>{" "}
      <button onClick={() => alert("Shared on LinkedIn")}> LinkedIn </button>{" "}
    </div>
  );
};

export default ShareOptions;
