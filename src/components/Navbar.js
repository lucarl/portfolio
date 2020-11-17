import React from "react";
import "./Navbar.css";
import logo from "../images/cllogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div>
      <div className="logo">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          duration={700}
        >
          <img src={logo} />
        </Link>
      </div>
      <div className="navbar">
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          duration={700}
        >
          <button>About</button>
        </Link>
        <Link
          activeClass="active"
          to="Work"
          spy={true}
          smooth={true}
          duration={700}
        >
          <button>Work</button>
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          duration={700}
        >
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
