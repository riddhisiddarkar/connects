const router = require("express").Router();
const bcrypt = require("bcrypt");

const user = require("../Models/User.model");
const ngo = require("../Models/NGO.model");
const saltRounds = 10;

router.get("/", (req, res) => {
  res.send("Test successful");
});

router.post("/register", (req, res) => {
  new ngo({
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    phoneNo: req.body.phoneNo,
    category: req.body.category,
    accepting: req.body.accepting,
  })
    .save()
    .then((data) => {
      console.log(data);
      console.log("Successfully added data");
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
          new user({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            ngoId: data._id,
          })
            .save()
            .then((r) => {
              console.log("Successfully added data");
              console.log(r);
              res.send(data);
            })
            .catch((err) => {
              console.log("There is an error in adding using users");
              console.log(err);
              res.status(401).send(err);
            });
        });
      });
    })
    .catch((error) => {
      console.log("There is an error here in adding ngo");
      console.log(error);
      res.status(403).send(error);
    });
});

router.post("/login", (req, res) => {
  user
    .findOne({ email: req.body.email })
    .then((data) => {
      console.log(data);
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        if (result)
          res.status(200).send({
            id: data._id,
            ngoId: data.ngoId,
          });
        else res.status(401).send("Passwords donot match");
      });
    })
    .catch((err) => {
      console.log("There is an error in logging in");
      console.log(err);
      res.status(401).send(err);
    });
});

module.exports = router;
