var mongoose = require('mongoose');

var PizzaSchema = new mongoose.Schema({
  masa: String,
  descripcion: String,
  position: String,
  tamaño: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pizza', PizzaSchema);
var PizzaSche