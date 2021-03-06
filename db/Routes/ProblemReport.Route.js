const router = require("express").Router();

const report = require("../Models/ProblemReport.model");

router.get("/", (req, res) => {
  res.send("Test successful");
});

router.post("/addreport", (req, res) => {
  const newReport = new report({
    problem: req.body.problem,
    noOfPeopleAffected: req.body.noOfPeopleAffected,
    category: req.body.category,
  })
    .save()
    .then(() => {
      console.log("Sucessfully added report");
      res.status(200).send("Sucessfully added report");
    })
    .catch((err) => {
      console.log("There is an error here in adding error report");
      console.log(err);
      res.status(501).send(err);
    });
});

module.exports = router;
