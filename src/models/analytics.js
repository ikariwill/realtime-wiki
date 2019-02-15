/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analytics', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(450),
      allowNull: false
    },
    acesso_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cliente_unidade_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dt_acesso: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'analytics'
  });
};
