/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_modalidade', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modalidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'modalidade',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    grupo_modalidade_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'grupo_modalidade',
        key: 'id'
      }
    }
  }, {
    tableName: 'grupo_modalidade'
  });
};
