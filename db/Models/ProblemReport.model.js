const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  problem: {
    type: String,
  },
  noOfPeopleAffected: {
    type: String,
  },
  category: {
    type: Object,
  },
});

module.exports = mongoose.model("Report", ReportSchema);
