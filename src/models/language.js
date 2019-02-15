/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('language', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    locale: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: 'pt-BR'
    }
  }, {
    tableName: 'language'
  });
};
