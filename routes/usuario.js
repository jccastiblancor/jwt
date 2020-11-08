var express = require("express");
var router = express.Router();
const middleware = require("../middleware");
const mongoose = require("mongoose");
const model = mongoose.model("Usuario");

// GET
router.get("/", middleware.isAdmin, (req, res) => {
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

// UPDATE
router.patch("/:correo", async (req, res) => {
  let doc = await model.findOneAndUpdate(
    { correo: req.params.correo },
    req.body,
    {
      new: true,
    }
  );
  res.send(doc);
});

router.get("/log/info", async (req, res) => {
  let token = req.cookies.token;
  if (!token) {
    res.send({});
  } else {
    const usuario = await model.findOne({ token });
    res.send(usuario);
  }
});

module.exports = router;
