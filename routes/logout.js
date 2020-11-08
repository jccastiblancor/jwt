var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const model = mongoose.model("Usuario");

// matar la cookie
router.get("/", async (req, res) => {
  console.log("logout");
  let token = req.cookies.token;
  await model.findOneAndUpdate(
    { token },
    { token: "" },
    {
      new: true,
    }
  );
  res.clearCookie("token");
  res.send({
    success: true,
    message: "Logout successful!",
  });
});

module.exports = router;
