
var DataTypes = require("sequelize").DataTypes;
var _personajes = require("./personajes");
var _transformaciones = require("./transformaciones");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var personajes = _personajes(sequelize, DataTypes);
  var transformaciones = _transformaciones(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  transformaciones.belongsTo(personajes, { as: "id_personaje", foreignKey: "id"});
  personajes.hasMany(transformaciones, { as: "transformaciones", foreignKey: "id"});

  return {
    personajes,
    transformaciones,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;