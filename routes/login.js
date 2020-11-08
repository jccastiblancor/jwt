var express = require("express");
var router = express.Router();
let jwt = require("jsonwebtoken");

let config = require("../config");
const middleware = require("../middleware");
const mongoose = require("mongoose");
const model = mongoose.model("Usuario");

router.post("/", middleware.checkUser, async (req, res) => {
  const correo = req.body.correo;
  let token = jwt.sign({ correo }, config.secret, {
    expiresIn: "24h",
  });

  await model.findOneAndUpdate(
    { correo },
    { token },
    {
      new: true,
    }
  );

  res.cookie("token", token);
  res.redirect("/");
  res.send({
    success: true,
    message: "Authentication successful!",
    token,
  });
});

module.exports = router;
