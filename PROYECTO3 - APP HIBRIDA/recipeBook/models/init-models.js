var DataTypes = require("sequelize").DataTypes;
var _ingredientes = require("./ingredientes");
var _recetas = require("./recetas");

function initModels(sequelize) {
  var ingredientes = _ingredientes(sequelize, DataTypes);
  var recetas = _recetas(sequelize, DataTypes);

  ingredientes.belongsTo(recetas, { as: "idRecetas_receta", foreignKey: "idRecetas"});
  recetas.hasMany(ingredientes, { as: "ingredientes", foreignKey: "idRecetas"});

  return {
    ingredientes,
    recetas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
