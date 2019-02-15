/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teste_motor', {
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
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    dt_teste: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    origem: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'teste_motor'
  });
};
