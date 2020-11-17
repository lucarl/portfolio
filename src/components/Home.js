import React from "react";
import Main from "../sections/Main";
import Navbar from "./Navbar";
import About from "../sections/About";
import Work from "../sections/Work";
import Contact from "../sections/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
      <div className="Home">
        <Navbar />
        <Main />
        <About />
        <Work />
        <Contact />
      </div>
  );
}

export default Home;
