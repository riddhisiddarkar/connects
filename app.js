const express = require("express");
const cors = require("cors");

require("./db/mongoose");
const user = require("./db/Models/User.model");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", require("./db/Routes/User.Route"));
app.use("/ngo", require("./db/Routes/NGO.Route"));
app.use("/report", require("./db/Routes/ProblemReport.Route"));
module.exports = app;
