/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antropometria_teste', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cliente_unidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente_unidade',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'antropometria_teste'
  });
};
