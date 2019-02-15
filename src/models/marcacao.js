/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marcacao', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    analise_jogo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'analise_jogo',
        key: 'id'
      }
    },
    tag: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tempo: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'marcacao'
  });
};
