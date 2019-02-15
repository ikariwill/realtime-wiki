/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissao_cargo', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cargo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cargo',
        key: 'id'
      }
    },
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'menu',
        key: 'id'
      }
    }
  }, {
    tableName: 'permissao_cargo'
  });
};
