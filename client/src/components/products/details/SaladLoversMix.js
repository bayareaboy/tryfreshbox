import React, { Component } from "react";
import { Link } from "react-router-dom";

class SaladLoversMix extends Component {
  render() {
    return (
      <div>
        <section id="SaladLoversMix">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/boximage1.jpeg"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Freshly picked vegetables mix straight from local farmers.
                  Great for people who love greens, making fresh salads or
                  simply have a diet full of green veggies.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li>0.5 lb of Carrots</li>
                  <li>1 bunch of Romaine</li>
                  <li>1 bunch of Radishes</li>
                  <li>1 pc of Cauliflower</li>
                  <li>1 bunch of Broccoli</li>
                  <li>1 pc of Avocado</li>
                  <li>1 lb of Tomatoes</li>
                  <li>0.5 lb of mixed bell peppers</li>
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
                    Salad Lovers Mix Veggies
                  </span>
                </h4>
                <hr />
                <h5 className="product-price lead">
                  $<span className="pricetag">22</span> - includes{" "}
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
                  to="/checkout-saladlovers-mix"
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
export default SaladLoversMix;
