var express = require('express');
var router = express.Router();
var pizza = require("../controllers/PizzaController.js");

// Get all pizzas
router.get('/', function(req, res) {
  pizza.list(req, res);
});

// Get single pizza by id
router.get('/show/:id', function(req, res) {
  pizza.show(req, res);
});

// Create pizza
router.get('/create', function(req, res) {
  pizza.create(req, res);
});

// Save pizza
router.post('/save', function(req, res) {
  pizza.save(req, res);
});

// Edit pizza
router.get('/edit/:id', function(req, res) {
  pizza.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  pizza.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  pizza.delete(req, res);
});
// router.get('/jwt', function(req, res, next) {
//   res.render("../views/pizzas/jwt", {pizza: pizza})
// });


module.exports = router;