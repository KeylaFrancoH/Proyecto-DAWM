const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recetas', {
    idRecetas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    elaboracion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tiempo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha: {
      type: DataTypes.STRING(250),
      allowNull: true
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
          { name: "idRecetas" },
        ]
      },
    ]
  });
};
