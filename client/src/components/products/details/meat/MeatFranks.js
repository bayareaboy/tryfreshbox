import React, { Component } from "react";

class MeatFranks extends Component {
  render() {
    return (
      <div>
        <section id="MeatFranks">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img
                  src="/dist/images/showcase/meat/halalsausage.jpg"
                  alt="tryfreshbox.com"
                />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Halal Hoffy Premium Beef Franks 5 LB
                </p>
                <br />
                <h5>What's included:</h5>
                <ul>
                  <li>1 Box of Halal Hoffy Premium Beef Franks 5 LB</li>
                </ul>
                <hr />
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">
                    Halal Hoffy Premium Beef Franks
                  </span>
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
export default MeatFranks;
