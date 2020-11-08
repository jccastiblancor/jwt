var express = require("express");
var router = express.Router();
const middleware = require("../middleware");
const mongoose = require("mongoose");
const model = mongoose.model("Empresa");

// GET
router.get("/", middleware.isAdmin, (req, res) => {
  model.find({}).then((data) => {
    res.send(data);
  });
});

// GET detail
router.get(
  "/:id",
  middleware.checkToken,
  middleware.isEmpresaorAdmin,
  (req, res) => {
    model.findOne({ _id: req.params.id }).then((doc) => {
      if (doc) {
        res.send(doc);
      } else {
        res.send("no data for this id_");
      }
    });
  }
);

// CREATE producto
router.post("/", middleware.isEmpresa, (req, res) => {
  const { nombre, categoria } = req.body;
  let producto = new model({
    nombre,
    categoria,
  });
  producto
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
