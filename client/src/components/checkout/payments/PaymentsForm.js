import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class PaymentsForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = { complete: false };
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/api/orders/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div>
        <div className="container">
          <div className="mt-150 mb-150">
            <CardElement />
            <button onClick={this.submit}>Complete Payment</button>
          </div>
        </div>
      </div>
    );
  }
}
export default injectStripe(PaymentsForm);
