// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> 🔺Scam Detector </div>{" "}
      <nav className="navigation">
        <a href="/"> Home </a> <a href="/report-scam"> Report Scam </a>{" "}
        <a href="/login"> Login / Register </a>{" "}
      </nav>{" "}
    </header>
  );
};

export default Header;
