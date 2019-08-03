import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="mt-150 mb-150 mr-50 ml-50">
          <h2>Have questions?</h2>
          <br />
          <p>
            No problem. Feel free to call or email us and our fabulous <br />
            customer experience team member will gladly you assist you.
          </p>
          <br />
          <h5>Contact by phone</h5>
          <br />
          <p>
            {" "}
            Phone: <a href="tel:4243220342">(424)322-0342</a>
          </p>
          <br />
          <h5>Contact by email</h5>
          <br />
          <p>
            {" "}
            Email:{" "}
            <a href="mailto:mavlonbek@tryfreshbox.com">
              mavlonbek@tryfreshbox.com
            </a>
            <br />
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
