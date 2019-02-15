/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametro_bioquimico_planejamento', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parametro_bioquimico_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_bioquimico',
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
    dt_resposta: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'parametro_bioquimico_planejamento'
  });
};
