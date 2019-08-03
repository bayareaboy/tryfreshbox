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
          <div class="row justify-content-center">
            <ul>
              <li>
                <p>
                  <span className="h3 ">1.</span> Choose a subscription plan
                  that is best for your family size.
                </p>
              </li>{" "}
              <br />
              <li>
                <p>
                  <span className="h3 ">2.</span> We get it, not everyone adores
                  the same things equally. Pick a <br />
                  box type and we will only deliver fresh produce that you love.
                </p>
              </li>{" "}
              <br />
              <li>
                <p>
                  <span className="h3 ">3.</span> Now you're in control. Keep
                  receiving amazing freshbox <br />
                  everyweek, or pause, modify and cancel your subscription{" "}
                  <br />
                  anytime. See? Simple.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
