const mongoose = require("mongoose");
const { Schema } = mongoose;

const productoSchema = new Schema({
  nombre: String,
  precio: Number,
});

mongoose.model("Producto", productoSchema, "Producto");
