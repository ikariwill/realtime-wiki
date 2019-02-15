/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    whitelabel: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    logo_pequeno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logo_grande: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cliente'
  });
};
