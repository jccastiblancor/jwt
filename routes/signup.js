var express = require("express");
var router = express.Router();
const CryptoJS = require("crypto-js");
const mongoose = require("mongoose");
const model = mongoose.model("Usuario");

// CREATE usuario
router.post("/", (req, res) => {
  var sha256Hash = CryptoJS.SHA256(req.body.clave);
  let usuario = new model({
    correo: req.body.correo,
    clave: sha256Hash,
    rol: "usuario",
  });
  usuario
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
