const router = require("express").Router();
const ngo = require("../Models/NGO.model");

router.get("/", (req, res) => res.send("Test successful"));

router.get("/all", (req, res) => {
  ngo
    .find()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(401).send(err);
    });
});

router.get("/:id", (req, res) => {
  ngo
    .findById(req.params.id)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log("There is an error in getting the ngo details");
      console.log(error);
      res.status(403).send(error);
    });
});
router.post("/addpending/:id", (req, res) => {
  const {
    name,
    email,
    type,
    phoneNo,
    address,
    amount,
    food,
    quantity,
    item,
  } = req.body;
  console.log(name, email, type, phoneNo, address, amount, quantity, item);
  const newPendingTask = {
    name,
    email,
    type,
    phoneNo,
    address,
  };

  switch (type) {
    case "money":
      newPendingTask["amount"] = amount;
      break;
    case "food":
      newPendingTask["food"] = food;
      newPendingTask["quantity"] = quantity;
      break;
    case "items":
      newPendingTask["item"] = item;
      newPendingTask["quantity"] = quantity;
  }
  ngo
    .findByIdAndUpdate(req.params.id, {
      $push: { pending: newPendingTask },
    })
    .then((data) => {
      console.log("Successfully updated data");
      console.log(data);
      res.send("update done");
    })
    .catch((error) => {
      console.log(error);
      res.status(401).send(error);
    });
});

module.exports = router;
