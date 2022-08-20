var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);


router.get('/ingredientes', function (req, res, next) {
    models.ingredientes.findAll({
    })

        .then(ingredients => {
            res.json(ingredients)
        })
        .catch(error => res.status(400).send(error))
});

router.get('/ingredientes/:idRecetas', function (req, res, next) {
    models.ingredientes.findOne({ where: { idRecetas: req.params.idRecetas } })
        .then(productos => {
            res.json(productos);
        })
});

router.get('/recetas', function (req, res, next) {
    models.recetas.findAll({

    })
        .then(recipe => {
            res.json(recipe)
        })
        .catch(error => res.status(400).send(error))
});

router.get('/usuarios', function (req, res, next) {
    models.usuarios.findAll({

    })
        .then(user => {
            res.json(user)
        })
        .catch(error => res.status(400).send(error))
});



module.exports = router;
