const mongoose = require("mongoose");
const { Schema } = mongoose;

const empresaSchema = new Schema({
  nombre: String,
  categoria: String,
});

mongoose.model("Empresa", empresaSchema, "Empresa");
