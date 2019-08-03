import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 8000,
  draggable: false
  //etc you get the idea
});

export default function PaymentPage() {
  const [product] = useState({
    name: "Freshbox Medium",
    price: 20,
    description: "Great"
  });
  async function handleToken(token, addresses) {
    const response = await axios.post("/api/orders/checkout", {
      token,
      product
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast.success("Payment Successful! Receipt is sent to your email.", {
        position: toast.POSITION.TOP_LEFT
      });
    } else {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }
  return (
    <div>
      <div className="container">
        <div className="mt-150 mb-150 mr-50 ml-50">
          <center>
            <h4>Pay with Credit Card</h4>
            <StripeCheckout
              stripeKey="pk_live_gXu1JpGxSnMivsPDa4lfksRG00kaqSQ7s8"
              token={handleToken}
              amount={product.price * 100}
              name={product.name}
              billingAddress
              shippingAddress
              required
            />
          </center>
        </div>
      </div>
    </div>
  );
}
