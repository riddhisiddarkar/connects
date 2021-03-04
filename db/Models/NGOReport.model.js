const mongoose = require("mongoose");

const NGOReportSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  quantityOfPeople: {
    type: Number,
    required: true,
  },
  noOfChildren: {
    type: Number,
  },
  noOfSeniorCitizens: {
    type: Number,
  },
});
