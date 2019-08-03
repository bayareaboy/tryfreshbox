const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Order = require("../../models/Order");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const stripe = require("stripe")("sk_live_dUw48koW29JInDUMiBWmKIuU000DhR33P5");
// @route post api/orders/submit, subscribe users
// router.use(require("body-parser").text());

router.post(
  "/submit",
  // [
  //   check("delivery", "When would you like us to deliver?")
  //     .not()
  //     .isEmpty(),
  //   check("phone", "What is your phone number?")
  //     .not()
  //     .isEmpty()
  // ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      address2,
      state,
      city,
      zip,
      deliveryTime,
      frequency,
      boxType
    } = req.body;

    try {
      let order = await Order.findOne({ phone });
      if (order) {
        return res
          .status(400)
          .json({ errors: [{ msg: "You are already subscribed" }] });
      }
      // create user instance
      order = new Order({
        firstName,
        lastName,
        email,
        phone,
        address,
        address2,
        state,
        city,
        zip,
        deliveryTime,
        frequency,
        boxType
      });

      await order.save().then(order => res.json(order));
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
router.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

// Stripe Elements working api

// router.post("/charge", async (req, res) => {
//   try {
//     let { status } = await stripe.charges.create({
//       amount: 1499,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body
//     });

//     res.json({ status });
//   } catch (err) {
//     res.status(500).end();
//   }
// });

module.exports = router;
