// src/components/Voting.js
import React, { useState } from "react";
import "./Voting.css";

const Voting = ({ onVote }) => {
  const [vote, setVote] = useState(null);

  const handleVote = (voteType) => {
    setVote(voteType);
    onVote(voteType);
  };

  return (
    <div className="voting">
      <p> Was this helpful ? </p>{" "}
      <button
        className={vote === "helpful" ? "active" : ""}
        onClick={() => handleVote("helpful")}
      >
        Helpful{" "}
      </button>{" "}
      <button
        className={vote === "not helpful" ? "active" : ""}
        onClick={() => handleVote("not helpful")}
      >
        Not Helpful{" "}
      </button>{" "}
    </div>
  );
};

export default Voting;
