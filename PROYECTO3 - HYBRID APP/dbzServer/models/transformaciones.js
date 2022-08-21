const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transformaciones', {
    codigo: {
      type: DataTypes.STRING(250),
      allowNull: false,
      primaryKey: true
    },
    saga: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      references: {
        model: 'personajes',
        key: 'id'
      }
    },
    transformacion: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transformaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
