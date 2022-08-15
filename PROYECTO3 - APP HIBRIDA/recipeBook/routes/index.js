var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const recetas = require('../models/recetas.js');
var models = initModels(sequelize);  
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingredientes', function(req, res, next) {
  models.ingredientes.findAll({ 
  })
 
 .then(ingredients => {
    res.json(ingredients)
 })
 .catch(error => res.status(400).send(error))
});

router.get('/recetas', function(req, res, next) {
  models.recetas.findAll({
    
  })
 .then(recipe => {
    res.json(recipe)
 })
 .catch(error => res.status(400).send(error))
});



module.exports = router;
