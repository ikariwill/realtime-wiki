/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_grupo_especial', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    grupo_especial_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'grupo_especial',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuario_grupo_especial'
  });
};
