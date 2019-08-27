import React, { Component } from "react";

class SnacksLarge extends Component {
  render() {
    return (
      <div>
        <section id="SnacksLarge">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/snacks/chips.jpg"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Large Snack box full of amazing snacks great for 1-2 people.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li> 7pc Nature Valley Sweet & Salty Almond Bars</li>
                  <li>3pc Clif Bar Crunchy Peanut Butter Energy Bars</li>
                  <li> 10pcs Variety Pack of Chips</li>
                  <li> 1 box of Original Chips Ahoy Cookies, 13 Oz</li>
                </ul>
                <hr />
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">Snacks Large Pack</span>
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
export default SnacksLarge;
