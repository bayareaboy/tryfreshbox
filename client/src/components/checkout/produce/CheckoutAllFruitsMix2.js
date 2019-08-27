import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PaymentsMedium from "../payments/PaymentsMedium";

class CheckoutAllFruitsMix2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      address2: "",
      state: "",
      city: "",
      zip: "",
      deliveryTime: "",
      frequency: "",
      boxType: "all fruits Mix 2"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const newOrder = this.state;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newOrder);
      const res = await axios.post("/api/orders/submit", body, config);
      console.log(res.data);
      this.setState({ complete: true });
    } catch (err) {
      console.error(err.response.data);
    }
  }

  render() {
    if (this.state.complete) return <PaymentsMedium />;
    return (
      <div>
        <div className="container">
          <div className="py-5 text-center mt-100 ">
            <h2>Checkout</h2>
          </div>

          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your total</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Freshbox All Fruits Mix</h6>
                    <small className="text-muted">Includes FREE delivery</small>
                    <hr />

                    <small className="text-muted">
                      Terms and conditions apply. Cancel, pause and upgrade your
                      plan anytime. No cancellation fees, hidden fees and any
                      extra fees at all.
                    </small>
                    <hr />
                    <small className="text-muted">
                      Freshbox is Only available at:
                      <ul>
                        <li>San Francisco</li>
                        <li>Daly City</li>
                      </ul>
                    </small>
                  </div>
                  <span className="text-muted">$22</span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Delivery Information</h4>
              <form
                className="needs-validation"
                noValidate
                onSubmit={this.handleSubmit}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="boxType"
                    value={this.state.boxType}
                    onChange={this.handleChange}
                    name="boxType"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value={this.state.firstName}
                      name="firstName"
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value={this.state.lastName}
                      name="lastName"
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder=""
                      value={this.state.email}
                      name="email"
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid email is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder=""
                      value={this.state.phone}
                      name="phone"
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid phone number is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Delivery address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    value={this.state.address}
                    name="address"
                    onChange={this.handleChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    value={this.state.address2}
                    name="address2"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">State</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      value={this.state.state}
                      name="state"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">City</label>
                    <select
                      className="custom-select d-block w-100"
                      id="city"
                      value={this.state.city}
                      name="city"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>San Francisco</option>

                      <option>Daly City</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      value={this.state.zip}
                      name="zip"
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="deliveryTime">Choose a delivery day</label>
                    <select
                      className="custom-select d-block w-100"
                      id="deliveryTime"
                      value={this.state.deliveryTime}
                      name="deliveryTime"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="Mon 9:00am - 1:00pm">
                        Mon 9:00am - 1:00pm
                      </option>
                      <option value="Mon 2:00pm - 8:00pm">
                        Mon 2:00pm - 8:00pm
                      </option>
                      <option value="Tue 9:00am - 1:00pm">
                        Tue 9:00am - 1:00pm
                      </option>
                      <option value="Tue 2:00pm - 8:00pm">
                        Tue 2:00pm - 8:00pm
                      </option>
                      <option value="Wed 9:00am - 1:00pm">
                        Wed 9:00am - 1:00pm
                      </option>
                      <option value="Wed 2:00pm - 8:00pm">
                        Wed 2:00pm - 8:00pm
                      </option>
                      <option value="Thu 9:00am - 1:00pm">
                        Thu 9:00am - 1:00pm
                      </option>
                      <option value="Thu 2:00pm - 8:00pm">
                        Thu 2:00pm - 8:00pm
                      </option>
                      <option value="Fri 9:00am - 1:00pm">
                        Fri 9:00am - 1:00pm
                      </option>
                      <option value="Fri 2:00pm - 8:00pm">
                        Fri 2:00pm - 8:00pm
                      </option>
                      <option value="Sat 9:00am - 1:00pm">
                        Sat 9:00am - 1:00pm
                      </option>
                      <option value="Sat 2:00pm - 8:00pm">
                        Sat 2:00pm - 8:00pm
                      </option>
                      <option value="Sun 9:00am - 1:00pm">
                        Sun 9:00am - 1:00pm
                      </option>
                      <option value="Sun 2:00pm - 8:00pm">
                        Sun 2:00pm - 8:00pm
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="frequency">Frequency</label>
                    <select
                      className="custom-select d-block w-100"
                      id="frequency"
                      value={this.state.frequency}
                      name="frequency"
                      onChange={this.handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="weekly">Every week</option>
                      <option value="bi-weekly">Every other week</option>
                      <option value="twiceAweek">Twice a week</option>
                    </select>
                  </div>
                </div>

                <hr className="mb-4" />
                <button className="btn btn-primary btn-lg btn-block mb-100">
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutAllFruitsMix2;
