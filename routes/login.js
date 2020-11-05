var express = require("express");
var router = express.Router();
let jwt = require("jsonwebtoken");

let config = require("../config");
const middleware = require("../middleware");

router.post("/", middleware.checkUser, async (req, res, next) => {
  const correo = req.body.correo;
  let token = jwt.sign({ correo }, config.secret, {
    expiresIn: "24h",
  });
  res.send({
    success: true,
    message: "Authentication successful!",
    token: token,
  });
});

module.exports = router;
