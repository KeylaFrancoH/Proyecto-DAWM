const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recetas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    elaboracion: {
      type: DataTypes.STRING(350),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(350),
      allowNull: false
    },
    tiempo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'recetas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
