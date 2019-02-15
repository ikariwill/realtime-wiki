/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('galeria', {
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
    ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    galeria_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'galeria'
  });
};
