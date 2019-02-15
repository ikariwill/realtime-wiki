/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu_modulo', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modulo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'modulo',
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
    tableName: 'menu_modulo'
  });
};
