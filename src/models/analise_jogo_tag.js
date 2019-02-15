/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analise_jogo_tag', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    grupo_modalidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'grupo_modalidade',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tempo: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'analise_jogo_tag'
  });
};
