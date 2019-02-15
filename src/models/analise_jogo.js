/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analise_jogo', {
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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_analise: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    url_video: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'analise_jogo'
  });
};
