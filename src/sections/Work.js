import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";

class Work extends Component {
  state = {};

  render() {
    return (
      <div className="grid-container" id="Work">
        <Link to="/pulserace">
          <div className="grid-item">
            <p>PULSE RACE</p>
            <div className="description">
              <p>A game made to inspire children about natural science.</p>
            </div>
            <div className="overlay"></div>
            <img src={work1} alt="work1" />
          </div>
        </Link>
        <Link to="/shop&pet">
          <div className="grid-item">
            <p>SHOP&PET</p>
            <div className="description">
              <p>A critical design project about shopping habits and its negative effects.</p>
            </div>
            <div className="overlay"></div>
            <img src={work2} alt="work2" />
          </div>
        </Link>
        <Link to="/sharelock">
          <div className="grid-item">
            <p>SHARELOCK</p>
            <div className="description">
              <p>An app designed to reinvent the way of authentication.</p>
            </div>
            <div className="overlay"></div>
            <img src={work3} alt="work3" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Work;
