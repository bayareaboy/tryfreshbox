import React, { Component } from "react";

class DetailPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section id="detailpage">
          <div className="container mt-150">
            <div class="row">
              <div class="col-sm-8">
                <img src="/dist/images/showcase/boximage4.jpeg" alt="cool" />
                <hr />
                <p className="pricetag ">About product</p>
                <br />
                <p className="description">
                  Freshly picked fruits and vegetables mix box straight from
                  local farmers.{" "}
                </p>
                <h7>What's included:</h7>
                <ul>
                  <li>1lb of Apples</li>
                  <li>1 lb of Oranges</li>
                  <li> 2 potatoes</li>
                  <li>2 avocadoes</li>
                  <li>1 onion</li>
                </ul>
              </div>
              {
                // Side 2
              }
              <div class="col-sm-4">
                <h4 className="product-title">
                  <span className="pricetag-title">
                    Fresh Fruits and Veggies Box
                  </span>
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
                  <span style={{ fontSize: "1.7em", color: "Tomato" }}>
                    <i class="fas fa-fire" />
                  </span>
                </p>
                <br />

                <button
                  type="button"
                  class="btn btn-outline-success btn-lg btn-block"
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
export default DetailPage;
