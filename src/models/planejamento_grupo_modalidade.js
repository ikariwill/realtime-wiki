/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planejamento_grupo_modalidade', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    planejamento_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'planejamento',
        key: 'id'
      }
    },
    grupo_modalidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'grupo_modalidade',
        key: 'id'
      }
    }
  }, {
    tableName: 'planejamento_grupo_modalidade'
  });
};
