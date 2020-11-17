import React from "react";
import "./Main.css";
import arrow from "../images/arrow.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Main() {
  return (
    <div className="wrapper" id="Main">
      <div className="text-name">CARL LUNDBORG</div>
      <div className="text-info">
        INFORMATION TECHNOLOGIST | INTERACTION DESIGNER
      </div>
      <div className="scroll-down">
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          duration={500}
        >
          <input type="image" className="arrow-img" src={arrow}/>
        </Link>
      </div>
    </div>
  );
}

export default Main;
