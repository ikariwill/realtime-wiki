/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teste_motor_coleta', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dt_coleta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    teste_motor_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'teste_motor',
        key: 'id'
      }
    },
    equipe_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'equipe',
        key: 'id'
      }
    }
  }, {
    tableName: 'teste_motor_coleta'
  });
};
