/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antropometria_formula', {
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
      type: DataTypes.STRING(45),
      allowNull: false
    },
    formula: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'antropometria_formula'
  });
};
