var express = require("express");
var router = express.Router();
const middleware = require("../middleware");
const mongoose = require("mongoose");
const model = mongoose.model("Usuario");

// GET
router.get("/", middleware.checkToken, (req, res) => {
  model.find({}).then((data) => {
    res.send(data);
  });
});

// GET detail
router.get("/:id", (req, res) => {
  model.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.send(doc);
    } else {
      res.send("no data for this id_");
    }
  });
});

module.exports = router;
