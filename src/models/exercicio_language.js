/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exercicio_language', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    locale: {
      type: DataTypes.CHAR(5),
      allowNull: false
    }
  }, {
    tableName: 'exercicio_language'
  });
};
