// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/privacy-policy"> Privacy Policy </a>{" "}
      <a href="/terms-of-service"> Terms of Service </a>{" "}
      <a href="/contact"> Contact </a>{" "}
    </footer>
  );
};

export default Footer;
