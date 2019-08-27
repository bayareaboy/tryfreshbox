import React, { Component } from "react";
import About from "../layout/About";
import Faq from "../layout/Faq";

import GetStarted from "../layout/GetStarted";

import Offer from "../layout/Offer";
import Showcase from "../layout/Showcase";
import Welcome from "../layout/Welcome";
import Produce from "../products/Produce";
import Bakery from "../products/Bakery";
import Snacks from "../products/Snacks";
import Meat from "../products/Meat";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Produce />

        <h4 className="mb-35 ml-55 mt-35">More Categories coming soon...</h4>

        <div class="row mb-15">
          <div class="col-lg-12">
            <div class="container">
              <hr />
              <div class="row">
                <div class="col-sm">
                  <i class="lni-delivery " /> FREE delivery
                </div>
                <div class="col-sm">
                  <i class="lni-emoji-smile " /> Satisfaction guarantee
                </div>
                <div class="col-sm">
                  <i class="lni-check-mark-circle " /> Cancel anytime
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <Faq />
      </div>
    );
  }
}
export default LandingPage;
