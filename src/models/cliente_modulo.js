/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_modulo', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cliente_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    modulo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'modulo',
        key: 'id'
      }
    }
  }, {
    tableName: 'cliente_modulo'
  });
};
