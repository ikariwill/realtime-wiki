/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('psicometria_planejamento', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    psicometria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'psicometria',
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
    tableName: 'psicometria_planejamento'
  });
};
