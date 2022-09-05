var express = require('express');
const axios = require('axios');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/personajes', function(req, res, next) {
    	
  models.personajes.findAll({
  })
 .then(personaje => {
    res.json(personaje)
 })
 .catch(error => res.status(400).send(error))
});


router.get('/personajes/:id', function(req, res, next) {
    	
  models.personajes.findOne({ where: { id: req.params.id} })
        .then(personaje=> {
            res.json(personaje);
        })
});

router.get('/personajes/razas/:id', function(req, res, next) {
    	
  models.personajes.findAll({ where: { raza: req.params.id} })
        .then(personaje=> {
            res.json(personaje);
        })
});



router.get('/transformaciones', function(req, res, next) {
    	
  models.transformaciones.findAll({
   
  })
 .then(personaje => {
    res.json(personaje)
 })
 .catch(error => res.status(400).send(error))
});

router.get('/transformaciones/personaje/:id', function(req, res, next) {
    	
  models.transformaciones.findAll({ where: { id: req.params.id} })
  .then(transform=> {
      res.json(transform);
  })
});



router.get('/dbz', function(req, res, next) {
    	
  models.transformaciones.findAll({
    include: [{ 
      model: models.personajes,
      as: 'id_personaje'
    }],
  })
 .then(personaje => {
    res.json(personaje)
 })
 .catch(error => res.status(400).send(error))
});


router.get('/usuarios', function(req, res, next) {
    	
  models.usuarios.findAll({
  })
 .then(user=> {
    res.json(user)
 })
 .catch(error => res.status(400).send(error))
});

//BASE DE DATOS NO RELACIONAL
router.get('/dbzInfo', (req, res, next) => {

  axios.get(`https://dbzdata-default-rtdb.firebaseio.com/dbz.json`)
  .then( resAxios => {
      res.json(resAxios.data)
  })
  .catch(err => console.log(err))

});

router.get('/dbzInfo/:id', (req, res, next) => {

  axios.get(`https://dbzdata-default-rtdb.firebaseio.com/dbz/:id.json`)
  .then( resAxios => {
      res.json(resAxios.data)
  })
  .catch(err => console.log(err))

});

module.exports = router;
