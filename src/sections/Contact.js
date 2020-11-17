import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="contact-section" id="Contact">
        <div>
          <p className="contact-info">
            Feel free to contact me regarding work or internship!
          </p>
          <a
            className="mail"
            href="mailto:carl.e.w.lundborg@gmail.com?subject = Feedback&body = Message"
          >
            Carl.e.w.lundborg@gmail.com
          </a>
        </div>
        <div className="copyright-info">
          <p>This website is designed and created by Carl Lundborg.</p>
          <br />
          <p>
            Copyright © Carl Lundborg <br />
            Icons courtesy of Flaticon
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
