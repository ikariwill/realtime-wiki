/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parametro_bioquimico', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unidade: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    cliente_unidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente_unidade',
        key: 'id'
      }
    }
  }, {
    tableName: 'parametro_bioquimico'
  });
};
