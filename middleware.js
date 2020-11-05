let jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const model = mongoose.model("Usuario");
const CryptoJS = require("crypto-js");

const config = require("./config.js");

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token) {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: "Token is not valid",
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    }
  } else {
    return res.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

const checkUser = async (req, res, next) => {
  let correo = req.body.correo;
  let clave = req.body.clave;

  const usuario = await model.findOne({ correo });

  if (correo && clave) {
    if (usuario) {
      var sha256Hash = CryptoJS.SHA256(clave);
      if (
        correo === usuario.correo &&
        sha256Hash.toString() === usuario.clave
      ) {
        next();
      } else {
        return res.send(403).json({
          success: false,
          message: "Incorrect username or password",
        });
      }
    } else {
      return res.send(403).json({
        success: false,
        message: "Incorrect username or password",
      });
    }
  } else {
    return res.send(400).json({
      success: false,
      message: "Authentication failed! Please check the request",
    });
  }
};

const isEmpresa = (req, res, next) => {
  next();
};

const isEmpresaorAdmin = (req, res, next) => {
  next();
};

const isAdmin = (req, res, next) => {
  next();
};

module.exports = {
  checkToken,
  checkUser,
  isEmpresa,
  isEmpresaorAdmin,
  isAdmin,
};
