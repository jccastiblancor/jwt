const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  correo: String,
  clave: String,
  rol: String,
  token: String,
});

mongoose.model("Usuario", usuarioSchema, "Usuario");
