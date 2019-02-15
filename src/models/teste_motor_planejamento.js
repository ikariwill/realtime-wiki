/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teste_motor_planejamento', {
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
    planejamento_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'planejamento',
        key: 'id'
      }
    },
    dt_teste: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'teste_motor_planejamento'
  });
};
