import React, { Component } from "react";

class MorningSnacks extends Component {
  render() {
    return (
      <div>
        <section id="MorningSnacks">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/snacks/chobani.png"
                  alt="tryfreshbox.com salad lovers mix"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Morning Snack box full of amazing snacks great for 1 person.
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li>7pc of Chobani Greek Yogurt Variety pack</li>
                  <li>1 bunch of Bananas</li>
                  <li>1lb of Apples</li>
                </ul>
                <hr />
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">Snacks Morning Pack</span>
                </h4>
                <hr />
                <h5 className="product-price lead">
                  $<span className="pricetag">15</span> - includes{" "}
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
export default MorningSnacks;
