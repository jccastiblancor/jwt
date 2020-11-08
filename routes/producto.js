var express = require("express");
var router = express.Router();
const middleware = require("../middleware");
const mongoose = require("mongoose");
const model = mongoose.model("Producto");

// GET productos
router.get("/", (req, res) => {
  model.find({}).then((data) => {
    res.send(data);
  });
});

// CREATE producto
router.post("/", middleware.isEmpresa, (req, res) => {
  const { nombre, precio } = req.body;
  let producto = new model({
    nombre,
    precio,
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
