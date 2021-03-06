import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" className="blog-area pt-125">
        <div className="container">
          <div class="row justify-content-center">
            <div class="section-title text-center pb-25">
              <h3 class="title mb-15">How does it work? Simple.</h3>
            </div>
          </div>
          <div className="container mr-250 ml-250">
            <div class="row justify-content-center">
              <ul>
                <li>
                  <p>
                    <span className="h3 ">1.</span> Browse and see our products.
                  </p>
                </li>{" "}
                <br />
                <li>
                  <p>
                    <span className="h3 ">2.</span> Choose a type of product you
                    want and subscribe.
                  </p>
                </li>{" "}
                <br />
                <li>
                  <p>
                    <span className="h3 ">3.</span> Now you're in control. Keep
                    receiving amazing freshbox products weekly, bi-weekly or
                    monthly, or pause, modify and cancel your subscription
                    anytime. See? Simple.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
