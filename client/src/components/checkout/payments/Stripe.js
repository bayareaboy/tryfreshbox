import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import PaymentsForm from "./PaymentsForm";

export default class Stripe extends Component {
  render() {
    return (
      <div>
        <StripeProvider apiKey="pk_test_0u5HEdSaV8pLMOhgg1PhKmVZ00YlBgGg8J">
          <Elements>
            <PaymentsForm />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}
