const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  amount: {
    type: Number,
  },
  food: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  other: {
    type: String,
  },
});

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    default: [],
  },
  website: {
    type: String,
  },
  money: {
    type: Boolean,
  },
  food: {
    type: Boolean,
  },
  items: {
    type: Boolean,
  },
  pending: [donationSchema],
  completed: [donationSchema],
});

module.exports = mongoose.model("NGO", ngoSchema);
