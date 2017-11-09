var mongoose = require('mongoose');

var PizzaSchema = new mongoose.Schema({
  nombre: String,
  masa: String,
  descripcion: String,
  ingredientes: {},
  queso: String,
  tamaño: String,
  porciones: Number,
  
});

module.exports = mongoose.model('Pizza', PizzaSchema);
