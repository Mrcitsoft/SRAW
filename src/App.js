// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import ScamDetails from "./components/ScamDetails";
import ScamCard from "./components/ScamCard";
import FilterSection from "./components/FilterSection";
import "./App.css";

const App = () => {
  const [scamDetails, setScamDetails] = useState({
    title: "Sample Scam Title",
    description: "This is a detailed description of the scam...",
    location: "123 Scam Street, Faketown, Fakeshire",
    media: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/200",
    ],
  });

  return (
    <div className="App">
      <Header />
      <div className="content">
        <FilterSection />
        <div className="main-content">
          <div className="scam-details-wrapper">
            <ScamDetails details={scamDetails} />{" "}
          </div>{" "}
          <div className="scam-cards-wrapper">
            <ScamCard
              title="Suspicious Activity"
              location="Local"
              actionText="Report Scam"
            />
            <ScamCard
              title="Reported Incident"
              location="Local"
              actionText="Report Now"
            />
            <ScamCard
              title="Potential Threat"
              location="Local"
              actionText="Notify Authorities"
            />
            <ScamCard
              title="Reported Fraudulent"
              location="Local"
              actionText="Take Action"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default App;
