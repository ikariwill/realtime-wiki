/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antropometria_teste_formula', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    antropometria_teste_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'antropometria_teste',
        key: 'id'
      }
    },
    antropometria_formula_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'antropometria_formula',
        key: 'id'
      }
    }
  }, {
    tableName: 'antropometria_teste_formula'
  });
};
