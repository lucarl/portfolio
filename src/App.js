import React from "react";
import "./App.css";
import PulseRace from "./work/PulseRace";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./work/Shop";
import ShareLock from "./work/ShareLock";
import ScrollToTop from "./components/ScrollToTop"
require('./index.css')

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pulserace" component={PulseRace} />
          <Route path="/shop&pet" component={Shop} />
          <Route path="/sharelock" component={ShareLock} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
