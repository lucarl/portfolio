import React, { Component, useEffect } from "react";
import "./ShareLock.css";
import mobile from "../images/mobile-header.png";

function ShareLock() {
  return (
    <div className="article-section">
      <div className="header">
        <div className="share-lock-header">
          <h1>SHARELOCK</h1>
          <p>PROVIDING SMART ACCESS AND SHARING FOR YOU BIKE</p>
        </div>
        <img src={mobile} alt="mobile" />
      </div>
      <div className="share-lock-content">
        <h2>ABOUT SHARELOCK</h2>
      </div>
    </div>
  );
}

export default ShareLock;
