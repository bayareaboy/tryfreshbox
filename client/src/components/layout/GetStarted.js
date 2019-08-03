import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div>
      <section id="about" className="blog-area pb-125">
        <div className="container">
          <div class="row justify-content-center">
            <div class="section-title text-center pb-25">
              <h3 class="lead">Convinced?</h3>
            </div>
          </div>
          <div class="row justify-content-center">
            <ul>
              <li>
                <p>
                  <span className="h3 ">We knew you would join us.</span>
                </p>
              </li>{" "}
              <br />
              <li />{" "}
              <center>
                {" "}
                <Link
                  class="main-btn"
                  to="/choose-a-box-type"
                  data-animation="fadeInUp"
                  data-delay="1.5s"
                >
                  Let's start <i class="lni-chevron-right" />
                </Link>
              </center>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
