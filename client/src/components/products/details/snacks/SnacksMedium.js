import React, { Component } from "react";

class SnacksMedium extends Component {
  render() {
    return (
      <div>
        <section id="SnacksMedium">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/snacks/chipsahoy.jpg"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Medium Snack box full of amazing snacks great for 1-3 people.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li> 12pc Nature Valley Sweet & Salty Almond Bars</li>
                  <li>1pack of Dry Roasted & Salted Peanuts 32 Oz </li>
                  <li> 15pcs Variety Pack of Chips</li>
                  <li> 1 box of Original Chips Ahoy Cookies, 13 Oz</li>
                </ul>
                <hr />
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">Snacks Medium Pack</span>
                </h4>
                <hr />
                <h5 className="product-price lead">
                  $<span className="pricetag">20</span> - includes{" "}
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

                <button
                  type="button"
                  class="btn btn-outline-dark btn-lg btn-block"
                >
                  I want this
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SnacksMedium;
