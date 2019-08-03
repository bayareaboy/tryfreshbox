import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" class="slider-area pt-100">
          <div class="container-fluid position-relative">
            <div class="slider-active">
              <div class="single-slider">
                <div class="slider-bg">
                  <div class="row no-gutters align-items-center ">
                    <div class="col-lg-4 col-md-5">
                      <div class="slider-product-image d-none d-md-block">
                        <img src="/dist/images/box.png" alt="Slider" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-7">
                      <div class="slider-product-content">
                        <h1
                          class="slider-title mb-10"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          Fresh <span>Fruits</span> and <span>Veggies</span>
                        </h1>
                        <p
                          class="mb-25"
                          data-animation="fadeInUp"
                          data-delay="0.9s"
                        >
                          Freshbox - Get your weekly fruits and vegetables
                          delivered FRESH <br />
                          from local producers. FREE delivery on all orders.
                        </p>
                        <Link
                          class="main-btn"
                          to="/choose-a-box-type"
                          data-animation="fadeInUp"
                          data-delay="1.5s"
                        >
                          Get started <i class="lni-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="slider-social">
              <div class="row justify-content-end">
                <div class="col-lg-7 col-md-6">
                  <ul class="social text-right">
                    <li>
                      <a href="https://www.facebook.com/tryfreshbox">
                        <i class="lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/tryfreshbox">
                        <i class="lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/tryfreshbox">
                        <i class="lni-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
