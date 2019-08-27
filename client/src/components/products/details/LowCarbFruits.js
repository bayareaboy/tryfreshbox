import React, { Component } from "react";
import { Link } from "react-router-dom";

class LowCarbFruits extends Component {
  render() {
    return (
      <div>
        <section id="LowCarbFruits">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/lowcarbfruits.jpg"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Freshly picked low carb fruits mix for people with keto diet.
                  Includes all variety of amazing fruits full of vitamins.
                  Locally and responsibly sourced.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li>
                    1 box of Strawberries (*Seasonal Fruit - Subject to
                    availability)
                  </li>
                  <li>1 lb of Pears</li>
                  <li>1 lb of Apples</li>
                  <li>1 lb of Oranges</li>
                  <li>1 lb of Peaches</li>
                  <li>1 bunch of Bananas</li>
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
                    Low carb fruits mix for Keto diet
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
                  to="/checkout-lowcarbfruits-mix"
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
export default LowCarbFruits;
