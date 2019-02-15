/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acesso_token', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    acesso_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'acesso',
        key: 'id'
      }
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dt_expiracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    origem: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'WEB'
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'acesso_token'
  });
};
