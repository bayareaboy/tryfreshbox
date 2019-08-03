const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  deliveryTime: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  address2: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  frequency: {
    type: String
  },
  boxType: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model("order", OrderSchema);
