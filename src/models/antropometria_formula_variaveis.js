/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antropometria_formula_variaveis', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    antropometria_formula_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'antropometria_formula',
        key: 'id'
      }
    },
    antropometria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'antropometria',
        key: 'id'
      }
    }
  }, {
    tableName: 'antropometria_formula_variaveis'
  });
};
