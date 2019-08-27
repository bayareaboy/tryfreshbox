import React, { Component } from "react";
import { Link } from "react-router-dom";

class LowCarbVeggies extends Component {
  render() {
    return (
      <div>
        <section id="LowCarbVeggies">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/lowcarbveggies.jpg"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Freshly picked low carb veggies mix for people with keto diet.
                  Includes all variety of amazing veggies full of vitamins.
                  Locally and responsibly sourced.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li>2 pcs of Avocadoes</li>
                  <li>1 lb of Tomatoes</li>
                  <li>1 lb of Brussels Sprouts</li>
                  <li>1 bunch of Lettuce</li>
                  <li>1 bunch of Radishes</li>
                </ul>
                <hr />
                *Note: Actual weight of products may vary slightly.
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">
                    Low carb veggies mix for Keto diet
                  </span>
                </h4>
                <hr />
                <h5 className="product-price lead">
                  $<span className="pricetag">16</span> - includes{" "}
                  <span className="pricetag">FREE</span> delivery
                </h5>
                <hr />
                <p class="text-muted">
                  Have questions?{" "}
                  <a href="tel:+14243220342"> Call or text us NOW.</a>
                </p>

                <p>
                  This product is currently trending{" "}
                  <span style={{ fontSize: "1.4em", color: "Tomato" }}>
                    <i class="fas fa-fire" />
                  </span>
                </p>
                <br />

                <Link
                  to="/checkout-lowcarbveggies-mix"
                  type="link"
                  class="btn btn-outline-dark btn-lg btn-block"
                >
                  I want this
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LowCarbVeggies;
