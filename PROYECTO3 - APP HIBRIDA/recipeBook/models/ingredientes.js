const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredientes', {
    codigo_barras: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cant_ingredientes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idRecetas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recetas',
        key: 'idRecetas'
      }
    },
    nombre_ingrediente: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    usado_receta: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ingredientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo_barras" },
        ]
      },
      {
        name: "idRecetas",
        using: "BTREE",
        fields: [
          { name: "idRecetas" },
        ]
      },
    ]
  });
};
