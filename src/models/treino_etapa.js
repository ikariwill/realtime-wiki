/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treino_etapa', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    treino_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'treino',
        key: 'id'
      }
    },
    etapa_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'etapa',
        key: 'id'
      }
    }
  }, {
    tableName: 'treino_etapa'
  });
};
