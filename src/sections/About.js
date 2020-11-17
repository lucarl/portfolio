import React, { Component } from "react";
import "./About.css";
import profile from "../images/profile.png";
import cv from "../files/Carl_Lundborg_s_CV.pdf";
import download from "../images/download.png";
class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-wrapper">
        <div className="about-section" id="About">
          <div className="img-wrapper">
            <img src={profile} className="profile-img" alt="profile img" />
          </div>
          <div className="text-wrapper">
            <section>
              <p>Hi, I'm Carl</p>
              <p>
                I am a software engineering student, currently studying the
                Interaction Design master at Chalmers. I am focusing on game
                development and UX/UI design, but have knowledge in both
                back-end and front-end programming. I also work with music and
                photography.
                <br />
              </p>
            </section>
            <div className="download-button">
              <a href={cv} download>
                <img src={download} alt="Download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
