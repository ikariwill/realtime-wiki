/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nivel_teste_motor', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tipo_teste_motor_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tipo_teste_motor',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    maximo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    minimo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'nivel_teste_motor'
  });
};
