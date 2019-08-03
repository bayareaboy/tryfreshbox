import React, { Component } from "react";
import About from "../layout/About";
import Faq from "../layout/Faq";

import GetStarted from "../layout/GetStarted";
import Home from "../layout/Home";
import Offer from "../layout/Offer";
import Showcase from "../layout/Showcase";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Home />
        <Offer />
        <About />
        <Showcase />
        <Faq />
        <GetStarted />
      </div>
    );
  }
}
export default LandingPage;
