import React from "react";

export default function ThankYou() {
  return (
    <div>
      <div className="container">
        <div className="mt-150 mb-150 mr-50 ml-50">
          <h2>Thank you for your order.</h2>
          <br />
          <p>An email</p>
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
