import React, { Component } from "react";
import { Link } from "react-router-dom";

class FruitsVeggiesMix2 extends Component {
  render() {
    return (
      <div>
        <section id="FruitsVeggiesMix2">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/boximage4.jpeg"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Freshly picked fruits and vegetables mix straight from local
                  farmers. Includes all variety of amazing veggies and fruits
                  full of vitamins. Great for people who love to cook, eat
                  fruits, making fresh salads or juices.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li>0.5 lb of Carrots</li>
                  <li>0.5 lb of Tomatoes</li>
                  <li>1 lb of Oranges</li>
                  <li>1 lb of Apples</li>

                  <li>1 bunch of Broccoli</li>
                  <li>1 bunch of Bananas</li>
                  <li>1 pc of Kiwi</li>
                  <li>1 bunch of Celery</li>
                  <li>1 lb of Pears</li>
                  <li>1 lb of Onions</li>
                  <li>
                    1 box of Blueberries (*Seasonal Fruit - subject to
                    availability)
                  </li>
                  <li>1 bunch of Asparagus</li>
                </ul>
                <hr />
                *Note: Actual weight of products may vary slightly.
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">Fruits & Veggies Mix</span>
                </h4>
                <hr />
                <h5 className="product-price lead">
                  $<span className="pricetag">30</span> - includes{" "}
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
                  to="/checkout-fruitsveggies-mix2"
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
export default FruitsVeggiesMix2;
