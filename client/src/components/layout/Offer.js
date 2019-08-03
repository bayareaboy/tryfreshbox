import React from "react";
import { Link } from "react-router-dom";

export default function Offer() {
  return (
    <div>
      <section id="products" class="discount-product pt-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="single-discount-product mt-30">
                <div class="product-image">
                  <img src="/dist/images/fruit.jpg" alt="Product" />
                </div>
                <div class="product-content">
                  <h3>
                    Your search for fresh
                    <br />
                    fruits ends here
                  </h3>
                  <br />
                  <Link to="/choose-a-box-type" class="btn btn-light">
                    See fruits <i class="lni-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-discount-product mt-30">
                <div class="product-image">
                  <img src="/dist/images/veggie.jpg" alt="Product" />
                </div>
                <div class="product-content">
                  <h3>
                    Veggies, veggies
                    <br /> and more veggies
                  </h3>
                  <br />
                  <Link to="/choose-a-box-type" class="btn btn-light">
                    See vegetables <i class="lni-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
