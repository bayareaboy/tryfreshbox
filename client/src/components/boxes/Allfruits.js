import React from "react";
import { Link } from "react-router-dom";

export default function Allfruits() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-7">
          <div class="footer-link mt-50">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="/dist/images/boxes/fruits/small.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Freshbox Small</h5>
                <p className="lead ">$15/week + FREE delivery.</p> <br />
                <p class="card-text">
                  Get 5-8 lbs of amazing fruits delivered right to your doorstep
                  everyweek. Always FRESH. <br />
                </p>
                <Link to="/checkout-small-fruits" class="btn btn-primary mt-15">
                  I want this
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-7">
          <div class="footer-link mt-50">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="/dist/images/boxes/fruits/medium.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Freshbox Medium</h5>
                <p className="lead ">$20/week + FREE delivery.</p> <br />
                <p class="card-text">
                  Get 9-11 lbs of amazing fruits delivered right to your
                  doorstep everyweek. Always FRESH. <br />
                </p>
                <Link
                  to="/checkout-medium-fruits"
                  class="btn btn-primary mt-15"
                >
                  I want this
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-7">
          <div class="footer-link mt-50">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="/dist/images/boxes/fruits/large.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Freshbox Large</h5>
                <p className="lead ">$25/week + FREE delivery.</p> <br />
                <p class="card-text">
                  Get 12-15 lbs of amazing fruits delivered right to your
                  doorstep everyweek. Always FRESH. <br />
                </p>
                <Link to="/checkout-large-fruits" class="btn btn-primary mt-15">
                  I want this
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
