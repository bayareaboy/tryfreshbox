import React from "react";
import { Carousel } from "react-bootstrap";

export default function Showcase() {
  return (
    <div>
      <section id="showcase" class="showcase-area pt-100 pb-50">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="container">
                <hr />
                <div class="row">
                  <div class="col-sm">
                    <i class="lni-delivery lni-tada-effect" /> FREE delivery
                  </div>
                  <div class="col-sm">
                    <i class="lni-emoji-smile lni-tada-effect" /> Satisfaction
                    guarantee
                  </div>
                  <div class="col-sm">
                    <i class="lni-check-mark-circle lni-tada-effect" /> Cancel
                    anytime
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div class="row mt-35">
            <div class="col-lg-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/dist/images/showcase/2.jpeg"
                    alt="tryFreshbox.com veggies img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/dist/images/showcase/1.jpeg"
                    alt="tryFreshbox.com veggies img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/dist/images/showcase/3.jpeg"
                    alt="tryFreshbox.com veggies img"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
