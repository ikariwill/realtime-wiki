/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('psicometria', {
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
      type: DataTypes.STRING(150),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    obrigatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    momento: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    tableName: 'psicometria'
  });
};
